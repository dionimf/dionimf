import type { Metadata } from 'next';
import { Mail, ExternalLink } from 'lucide-react';
import { contato } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contato | Portfolio',
};

export default function Contato() {
  return (
    <section className="min-h-screen py-12 px-6 flex items-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Entre em Contato
        </h2>
        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
          <p className="text-lg text-gray-300 mb-8 text-center">
            Interessado em trabalhar juntos? Vamos conversar!
          </p>

          <div className="space-y-6">
            <a
              href={`mailto:${contato.email}`}
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-gray-400">{contato.email}</p>
              </div>
            </a>

            <a
              href={contato.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                <ExternalLink className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="font-semibold text-white">GitHub</p>
                <p className="text-gray-400">{contato.githubLabel}</p>
              </div>
            </a>

            <a
              href={contato.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                <ExternalLink className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="font-semibold text-white">LinkedIn</p>
                <p className="text-gray-400">{contato.linkedinLabel}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
