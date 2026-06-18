'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IdiomaSelector from './IdiomaSelector';

export default function Header() {
  const pathname = usePathname();
  
  const links = [
    { href: '/', label: 'Início' },
    { href: '/vendas', label: 'Vendas' },
    { href: '/planos', label: 'Planos' },
    { href: '/criadores', label: 'Criadores' },
  ];
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo com ícone maior e nome */}
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/apple-touch-icon.png" 
            alt="Zimporiuns Logo" 
            className="w-10 h-10 rounded-lg"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#CD7F32] bg-clip-text text-transparent">
            Zimporiuns
          </span>
        </Link>
        
        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-[#FFD700] ${
                pathname === link.href ? 'text-[#FFD700] font-semibold' : 'text-gray-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Botões direita + seletor idioma */}
        <div className="flex gap-4 items-center">
          <button className="text-gray-600 hover:text-[#FFD700] transition-colors">
            Entrar
          </button>
          <button className="bg-[#FFD700] text-[#1E1E2F] px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Assinar
          </button>
          <IdiomaSelector />
        </div>
      </div>
    </header>
  );
}
