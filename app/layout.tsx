import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Portfolio | Dioni',
  description: 'Portfolio pessoal apresentando projetos, habilidades e contato.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Navbar />
        <main className="pt-20">{children}</main>
        <footer className="bg-slate-900 border-t border-slate-700 py-6 px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dioni M. Ferreira. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
