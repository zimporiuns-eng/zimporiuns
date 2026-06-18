import fs from 'fs';
import path from 'path';

export interface FileInventory {
  path: string;
  type: 'file' | 'directory';
  size?: number;
  relevance?: 'core' | 'important' | 'optional' | 'unknown';
}

/**
 * ESCANEIA O PROJETO INTEIRO
 */
export function scanProject(dir: string): FileInventory[] {
  const result: FileInventory[] = [];

  function walk(currentPath: string) {
    const items = fs.readdirSync(currentPath);

    items.forEach((item) => {
      const fullPath = path.join(currentPath, item);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        result.push({
          path: fullPath,
          type: 'directory'
        });
        walk(fullPath);
      } else {
        result.push({
          path: fullPath,
          type: 'file',
          size: stats.size
        });
      }
    });
  }

  walk(dir);

  return result;
}

/**
 * CLASSIFICA IMPORTÂNCIA DO ARQUIVO
 */
export function classifyFile(filePath: string): FileInventory['relevance'] {
  const criticalPatterns = [
    'api',
    'service',
    'admin',
    'auth',
    'security'
  ];

  const optionalPatterns = [
    'test',
    'example',
    '.log',
    '.md'
  ];

  if (criticalPatterns.some(p => filePath.includes(p))) {
    return 'core';
  }

  if (optionalPatterns.some(p => filePath.includes(p))) {
    return 'optional';
  }

  return 'unknown';
}
