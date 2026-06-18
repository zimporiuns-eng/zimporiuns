import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const arquivoJson = path.join(process.cwd(), 'src/config/avisos.json');

// Ler avisos
function lerAvisos() {
  try {
    const data = fs.readFileSync(arquivoJson, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Se arquivo não existir, retorna array vazio
    return [];
  }
}

// Salvar avisos
function salvarAvisos(avisos: any[]) {
  fs.writeFileSync(arquivoJson, JSON.stringify(avisos, null, 2));
}

// GET - listar avisos
export async function GET() {
  const avisos = lerAvisos();
  return NextResponse.json(avisos);
}

// POST - adicionar aviso
export async function POST(req: NextRequest) {
  const novoAviso = await req.json();
  const avisos = lerAvisos();
  avisos.push(novoAviso);
  salvarAvisos(avisos);
  return NextResponse.json({ success: true });
}

// PUT - atualizar aviso
export async function PUT(req: NextRequest) {
  const avisoAtualizado = await req.json();
  const avisos = lerAvisos();
  const index = avisos.findIndex((a: any) => a.id === avisoAtualizado.id);
  if (index !== -1) {
    avisos[index] = avisoAtualizado;
    salvarAvisos(avisos);
  }
  return NextResponse.json({ success: true });
}

// DELETE - remover aviso
export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const id = parseInt(url.searchParams.get('id') || '0');
  const avisos = lerAvisos();
  const novosAvisos = avisos.filter((a: any) => a.id !== id);
  salvarAvisos(novosAvisos);
  return NextResponse.json({ success: true });
}

