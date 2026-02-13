'use client'
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState('home');

  const projetos = [
    {
      id: 1,
      titulo: 'Sistema ERP Empresarial',
      descricao: 'Sistema completo de gestão empresarial com controle financeiro e estoque',
      tecnologias: ['Laravel', 'PostgreSQL', 'React'],
      imagem: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 2,
      titulo: 'API RESTful Microservices',
      descricao: 'Arquitetura de microserviços escalável com documentação automática',
      tecnologias: ['FastAPI', 'PostgreSQL', 'Python'],
      imagem: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 3,
      titulo: 'Jogo 3D Multiplayer',
      descricao: 'Jogo multiplayer com física realista e sistema de matchmaking',
      tecnologias: ['Unity', 'C#', 'Node.js'],
      imagem: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 4,
      titulo: 'Dashboard Analytics',
      descricao: 'Painel de métricas e relatórios com queries otimizadas',
      tecnologias: ['Flask', 'PL/SQL', 'React'],
      imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 5,
      titulo: 'E-commerce Platform',
      descricao: 'Plataforma de vendas online com gateway de pagamento integrado',
      tecnologias: ['PHP', 'Laravel', 'PostgreSQL'],
      imagem: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 6,
      titulo: 'Sistema de Automação',
      descricao: 'API de automação de processos com alta performance',
      tecnologias: ['Node.js', 'FastAPI', 'PostgreSQL'],
      imagem: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  const habilidades = [
    'PHP', 'Laravel', 'Python', 'Flask', 'FastAPI',
    'PL/SQL', 'PostgreSQL', 'C#', 'Unity', 'Node.js', 'React'
  ];

  const navegarPara = (secao) => {
    setSecaoAtiva(secao);
    setMenuAberto(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header / Navegação */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg border-b border-slate-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </h1>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-8">
              {['home', 'projetos', 'sobre', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => navegarPara(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    secaoAtiva === item ? 'text-cyan-400 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Botão Menu Mobile */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              {menuAberto ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu Mobile */}
          {menuAberto && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['home', 'projetos', 'sobre', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => navegarPara(item)}
                  className={`block w-full text-left capitalize py-2 px-4 rounded transition-all ${
                    secaoAtiva === item
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-20">
        {/* Seção Home */}
        {secaoAtiva === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl font-bold">
                    JP
                  </div>
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Desenvolvedor Full Stack
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Criando experiências digitais incríveis com código limpo e design moderno
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => navegarPara('projetos')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  Ver Projetos
                </button>
                <button
                  onClick={() => navegarPara('contato')}
                  className="border-2 border-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Entre em Contato
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Seção Projetos */}
        {secaoAtiva === 'projetos' && (
          <section className="min-h-screen py-20 px-6">
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
        )}

        {/* Seção Sobre */}
        {secaoAtiva === 'sobre' && (
          <section className="min-h-screen py-20 px-6">
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
        )}

        {/* Seção Contato */}
        {secaoAtiva === 'contato' && (
          <section className="min-h-screen py-20 px-6 flex items-center">
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
                    href="mailto:seu@email.com"
                    className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                      <Mail className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-400">seu@email.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/seuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                      <Github className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">GitHub</p>
                      <p className="text-gray-400">@seuusuario</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/seuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                      <Linkedin className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">LinkedIn</p>
                      <p className="text-gray-400">@seuusuario</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-6 px-6 text-center text-gray-400">
        <p>&copy; 2024 Portfolio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}