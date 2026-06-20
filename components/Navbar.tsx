'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

interface ItemMenu {
  nome: string;
  rota: string;
}

const itens: ItemMenu[] = [
  { nome: 'home', rota: '/' },
  { nome: 'projetos', rota: '/projetos' },
  { nome: 'sobre', rota: '/sobre' },
  { nome: 'contato', rota: '/contato' },
];

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg border-b border-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Dioni M. Ferreira
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8">
            {itens.map((item) => (
              <Link
                key={item.rota}
                href={item.rota}
                className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                  pathname === item.rota ? 'text-cyan-400 font-semibold' : 'text-gray-300'
                }`}
              >
                {item.nome}
              </Link>
            ))}
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            {menuAberto ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {itens.map((item) => (
              <Link
                key={item.rota}
                href={item.rota}
                onClick={() => setMenuAberto(false)}
                className={`block w-full text-left capitalize py-2 px-4 rounded transition-all ${
                  pathname === item.rota
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
              >
                {item.nome}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
