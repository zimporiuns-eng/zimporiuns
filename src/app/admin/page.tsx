'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha fixa (mude depois)
    if (senha === 'Zim@Admin2026') {
      localStorage.setItem('admin_logado', 'true');
      router.push('/admin/dashboard');
    } else {
      setErro('Senha incorreta');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🔐</div>
          <h1 className="text-2xl font-bold">Área Administrativa</h1>
          <p className="text-gray-500 text-sm">Zimporiuns</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#FFD700]"
          />
          {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FFD700] to-[#CD7F32] text-white py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

