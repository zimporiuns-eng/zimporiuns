import { NextResponse } from 'next/server';
import { scanProject, classifyFile } from '@/control-center/inventory/system-scan';

export async function GET() {
  const root = process.cwd();

  const files = scanProject(root).map(file => ({
    ...file,
    relevance: classifyFile(file.path)
  }));

  return NextResponse.json({
    total: files.length,
    core: files.filter(f => f.relevance === 'core').length,
    optional: files.filter(f => f.relevance === 'optional').length,
    unknown: files.filter(f => f.relevance === 'unknown').length,
    files
  });
}
