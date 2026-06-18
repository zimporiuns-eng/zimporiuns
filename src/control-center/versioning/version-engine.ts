import fs from 'fs';
import path from 'path';

const versionsPath = path.join(process.cwd(), 'src/snapshots/versions.json');

export interface VersionEvent {
  id: string;
  version: string;
  module: string;
  description: string;
  timestamp: string;
  rollbackable: boolean;
}

/**
 * REGISTRA VERSÃO DO SISTEMA
 */
export function createVersion(event: VersionEvent) {
  let data: VersionEvent[] = [];

  if (fs.existsSync(versionsPath)) {
    data = JSON.parse(fs.readFileSync(versionsPath, 'utf-8'));
  }

  data.push(event);

  fs.writeFileSync(versionsPath, JSON.stringify(data, null, 2));
}

/**
 * LISTA VERSÕES
 */
export function listVersions() {
  if (!fs.existsSync(versionsPath)) return [];
  return JSON.parse(fs.readFileSync(versionsPath, 'utf-8'));
}
