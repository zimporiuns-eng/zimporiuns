import { classifyFile } from '../inventory/system-scan';

export function zimDecideAction(filePath: string) {
  const relevance = classifyFile(filePath);

  if (relevance === 'core') {
    return {
      action: 'REQUIRES_REVIEW',
      risk: 'HIGH',
      message: 'Arquivo crítico — requer auditoria antes de alteração'
    };
  }

  if (relevance === 'unknown') {
    return {
      action: 'BLOCK',
      risk: 'CRITICAL',
      message: 'Arquivo não classificado — alteração bloqueada'
    };
  }

  return {
    action: 'ALLOW',
    risk: 'LOW',
    message: 'Mudança permitida'
  };
}
