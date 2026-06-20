import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl font-bold">
              DMF
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
          <Link
            href="/projetos"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Ver Projetos
          </Link>
          <Link
            href="/contato"
            className="border-2 border-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  );
}
