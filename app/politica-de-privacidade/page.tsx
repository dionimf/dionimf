import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Portfolio',
};

export default function PoliticaDePrivacidade() {
  return (
    <section className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Política de Privacidade
        </h1>

        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700 text-gray-300 space-y-6">
          <nav className="mb-4">
            <strong>Sumário</strong>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-sm text-gray-400">
              <li>SOBRE ESTE DOCUMENTO</li>
              <li>ALTERAÇÕES NESTE DOCUMENTO</li>
              <li>SOBRE OS DADOS PESSOAIS</li>
              <li>SEGURANÇA</li>
              <li>DOS DADOS PESSOAIS E TROCAS</li>
              <li>COOKIES</li>
              <li>DA NÃO OBRIGATORIEDADE DOS COOKIES</li>
              <li>DA PROTEÇÃO DE DADOS PELO USUÁRIO</li>
              <li>DO ENVIO DE E-MAIL E PUBLICIDADE</li>
              <li>DE OUTRAS POLÍTICAS DE PRIVACIDADE</li>
            </ol>
          </nav>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. SOBRE ESTE DOCUMENTO</h2>
            <p>
              Mediante este aviso, Dioni M. Ferreira (doravante "DMF") informa aos usuários
              deste site sua política de proteção de dados pessoais, para que os usuários determinem
              livre e voluntariamente se desejam fornecer seus dados pessoais, os quais podem ser
              solicitados na contratação ou no contato para determinados serviços ou propostas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. ALTERAÇÕES NESTE DOCUMENTO</h2>
            <p>
              DMF reserva-se o direito de alterar e modificar a presente política para adaptá-la
              a alterações legislativas, jurisprudenciais ou práticas comerciais. As alterações serão
              publicadas nesta página e poderão entrar em vigor sem aviso adicional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. SOBRE OS DADOS PESSOAIS</h2>
            <p>
              Os dados pessoais recolhidos serão objeto de tratamento, automatizado ou manual, e
              incorporados aos correspondentes registros de dados pessoais, dos quais DMF será
              titular e responsável. O usuário garante que os dados fornecidos são verdadeiros e se
              compromete a comunicar qualquer modificação.
            </p>
            <p className="mt-2">
              A finalidade do tratamento inclui: gestão de contatos e propostas, prestação e melhoria
              de serviços, adequação dos serviços às preferências dos usuários e envio de atualizações
              relacionadas ao portfólio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. SEGURANÇA</h2>
            <p>
              DMF adota medidas técnicas e organizacionais compatíveis com as boas práticas
              para proteger os dados pessoais contra perda, mau uso, acesso não autorizado, divulgação
              ou alteração. Entretanto, nenhum sistema é 100% seguro; em caso de violação de dados,
              adotaremos as medidas adequadas e notificaremos os usuários quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. DOS DADOS PESSOAIS E CESSÕES</h2>
            <p>
              DMF poderá ceder dados pessoais a prestadores de serviço ou empresas parceiras
              quando necessário para a prestação dos serviços e desde que mantidas finalidades compatíveis.
              Nessa hipótese, os usuários serão informados e, quando aplicável, será solicitada anuência
              para a cessão dos respectivos dados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">6. COOKIES</h2>
            <p>
              DMF pode utilizar cookies para melhorar a experiência do usuário, lembrar preferências
              e compilar dados estatísticos sobre o uso do site. Os cookies não identificam o usuário por nome
              automaticamente, e não são utilizados para invadir a privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">7. DA NÃO OBRIGATORIEDADE DOS COOKIES</h2>
            <p>
              O usuário pode configurar seu navegador para ser avisado sobre a recepção de cookies e para
              impedir sua instalação. A utilização de certos serviços pode exigir a aceitação de cookies;
              caso contrário, algumas funcionalidades poderão estar limitadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">8. DA PROTEÇÃO DE DADOS PELO USUÁRIO</h2>
            <p>
              O usuário também pode proteger seus dados evitando a gravação de cookies e excluindo-os do
              disco rígido de seu dispositivo conforme as instruções do navegador. Serviços de terceiros
              que instalem cookies no site deverão ser verificados nas respectivas políticas desses serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">9. DO ENVIO DE E-MAIL E PUBLICIDADE</h2>
            <p>
              DMF não enviará e-mails de natureza comercial sem que o usuário tenha solicitado ou
              autorizado previamente. Comunicações informativas ou publicitárias de parceiros poderão ser
              veiculadas mediante consentimento ou em contexto legítimo previsto na legislação aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">10. DE OUTRAS POLÍTICAS DE PRIVACIDADE</h2>
            <p>
              DMF pode utilizar serviços de terceiros cuja política de privacidade seja aplicável aos
              dados tratados por esses serviços. Sempre que houver conflito entre as políticas, informaremos
              os usuários para que decidam se desejam manter seus dados nesses serviços.
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-4">Versão: 1.0 — Última atualização: {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
