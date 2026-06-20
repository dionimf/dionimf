import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
};

export default function PoliticaDePrivacidade() {
  return (
    <section className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Política de Privacidade
        </h1>

        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700 text-gray-300 space-y-6">
          <p>
            Esta política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar este portfólio.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Informações que coletamos</h2>
            <p>
              O site não coleta dados pessoais sensíveis diretamente. Ao entrar em contato, apenas o conteúdo que você fornecer por e-mail ou formulários será utilizado para responder à sua mensagem.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Uso das informações</h2>
            <p>
              As informações recebidas por meio de contato são usadas exclusivamente para responder às suas dúvidas, propostas de trabalho ou oportunidades profissionais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Segurança</h2>
            <p>
              Adotamos boas práticas para proteger as informações recebidas, mas lembre-se de que nenhum método de transmissão pela internet é totalmente seguro.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Links externos</h2>
            <p>
              Este portfólio pode conter links para outros sites. Esta política não se aplica a sites externos, e recomendamos verificar as políticas de privacidade desses sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Alterações nesta política</h2>
            <p>
              Reservo-me o direito de atualizar esta política de privacidade a qualquer momento. As alterações serão publicadas nesta página.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
