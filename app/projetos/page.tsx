import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { projetos } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projetos | Portfolio',
};

export default function Projetos() {
  return (
    <section className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Meus Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-slate-800/50 backdrop-blur rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-300 mb-4">{projeto.descricao}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={projeto.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Ver projeto <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
