import { NextResponse } from 'next/server';

export async function POST() {
  // Simula limpeza de cache
  // Em produção, aqui limparia Redis, CDN, etc
  return NextResponse.json({ success: true, message: 'Cache limpo com sucesso' });
}

