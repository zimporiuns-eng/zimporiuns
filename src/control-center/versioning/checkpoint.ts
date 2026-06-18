import { createVersion } from './version-engine';

export function checkpoint(module: string, description: string) {
  createVersion({
    id: Date.now().toString(),
    version: '1.0.0',
    module,
    description,
    timestamp: new Date().toISOString(),
    rollbackable: true
  });
}
