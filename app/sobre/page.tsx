import type { Metadata } from 'next';
import { habilidades } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre | Portfolio',
};

export default function Sobre() {
  return (
    <section className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Sobre Mim
        </h2>
        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Olá! Sou um desenvolvedor full stack com experiência em desenvolvimento web,
            APIs, banco de dados e desenvolvimento de jogos. Trabalho com tecnologias como
            PHP/Laravel, Python (Flask/FastAPI), Node.js, React, além de C# com Unity para
            desenvolvimento de jogos e PL/SQL para otimização de banco de dados.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Minha expertise abrange desde a criação de sistemas empresariais robustos até
            APIs de alta performance e experiências interativas em jogos. Busco sempre
            entregar soluções escaláveis e eficientes, com código limpo e boas práticas.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Habilidades</h3>
          <div className="flex flex-wrap gap-3">
            {habilidades.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
