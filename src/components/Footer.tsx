'use client';

import Link from 'next/link';

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/apple-touch-icon.png" alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#FFD700] to-[#CD7F32] bg-clip-text text-transparent">
                Zimporiuns
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Plataforma de organização categórica de conteúdo para criadores independentes.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              CNPJ: 57.763.175/0001-78
            </p>
          </div>
          
          {/* Coluna 2 - Links rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#FFD700] transition">Início</Link></li>
              <li><Link href="/planos" className="hover:text-[#FFD700] transition">Planos</Link></li>
              <li><Link href="/criadores" className="hover:text-[#FFD700] transition">Criadores</Link></li>
              <li><Link href="/login" className="hover:text-[#FFD700] transition">Entrar</Link></li>
            </ul>
          </div>
          
          {/* Coluna 3 - Suporte */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contato@zimporiuns.com.br" className="hover:text-[#FFD700] transition">contato@zimporiuns.com.br</a></li>
              <li><a href="tel:+5511968295173" className="hover:text-[#FFD700] transition">(11) 96829-5173</a></li>
              <li><span className="text-gray-400">Horário: Seg-Sex, 9h às 18h</span></li>
            </ul>
          </div>
          
          {/* Coluna 4 - Redes sociais */}
          <div>
            <h3 className="text-white font-semibold mb-4">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-[#FFD700] transition">📘</a>
              <a href="#" className="text-2xl hover:text-[#FFD700] transition">📷</a>
              <a href="#" className="text-2xl hover:text-[#FFD700] transition">🐦</a>
              <a href="#" className="text-2xl hover:text-[#FFD700] transition">💬</a>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              © {anoAtual} Zimporiuns. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
