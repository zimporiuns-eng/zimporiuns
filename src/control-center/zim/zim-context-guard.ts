import { scanProject } from '../inventory/system-scan';

const BLOCKED_PATTERNS = [
  'password',
  'token',
  'secret',
  'jwt',
  'firebase',
  '.env',
  'private',
  'key'
];

export function zimSanitizeResponse(input: string): string {
  let output = input;

  BLOCKED_PATTERNS.forEach(p => {
    const regex = new RegExp(p, 'gi');
    output = output.replace(regex, '[RESTRITO]');
  });

  return output;
}

/**
 * ZIM CONSULTA INVENTÁRIO INTERNO SEM EXPOR DETALHES
 */
export function zimInternalScan() {
  const files = scanProject(process.cwd());

  return {
    totalFiles: files.length,
    coreModules: files.filter(f => f.path.includes('api') || f.path.includes('service')).length,
    securityMode: true,
    message: 'Acesso restrito à estrutura interna'
  };
}
