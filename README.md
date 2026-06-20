Este é um projeto [Next.js](https://nextjs.org) project criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Portfolio

Portfolio pessoal desenvolvido em **Next.js + TypeScript**, apresentando projetos, habilidades e informações de contato, com rotas reais para cada seção.

🔗 **Repositório do projeto:** [github.com/dionimf/dionimf](https://github.com/dionimf/dionimf.git)
👤 **Perfil GitHub:** [github.com/dionimf](https://github.com/dionimf)

> 💡 Todos os comandos abaixo estão em blocos de código com botão de copiar — basta passar o mouse sobre o bloco no GitHub e clicar no ícone 📋 no canto superior direito para copiar o conteúdo.

## 🚀 Tecnologias

- **Next.js 15** (App Router) — Framework React com rotas, SSR e otimizações
- **TypeScript** — Tipagem estática
- **React 19**
- **Tailwind CSS v4** — Estilização utilitária
- **Lucide React** — Ícones

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18.18 ou superior)
- npm (já vem junto com o Node.js) ou [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
- Git (opcional, para clonar o repositório)

Para verificar se já estão instalados:

```bash
node -v
npm -v
```

## 💻 Instalação e Execução Local

### 1. Clone o repositório (ou baixe os arquivos)

```bash
git clone https://github.com/dionimf/dionimf.git
cd dionimf
```

### 2. Instale as dependências

```bash
npm install
```

Isso instalará automaticamente todas as dependências listadas no `package.json`, incluindo `next`, `react`, `react-dom`, `lucide-react`, `typescript` e os tipos `@types/react`, `@types/node`, além do `tailwindcss` v4 com `@tailwindcss/postcss`.

> ℹ️ O Next.js usa o **PostCSS** para integrar o Tailwind v4 (não o plugin do Vite). Isso já está configurado no arquivo `postcss.config.mjs` do projeto — não é necessário nenhum passo manual adicional.

### 3. Rode o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## 🗺️ Rotas da Aplicação

| Rota         | Página     |
|--------------|------------|
| `/`          | Home       |
| `/projetos`  | Projetos   |
| `/sobre`     | Sobre      |
| `/contato`   | Contato    |

## 🏗️ Build para Produção

### 1. Gere os arquivos otimizados de produção

```bash
npm run build
```

Isso cria uma build otimizada (SSR/estática, conforme cada rota) na pasta `.next`.

### 2. Inicie o servidor de produção localmente

```bash
npm run start
```

Por padrão, a aplicação ficará disponível em `http://localhost:3000`, agora servida em modo produção.

## 🌐 Deploy em Produção

### Vercel (recomendado — criadora do Next.js)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale a CLI da Vercel:
   ```bash
   npm install -g vercel
   ```
3. Na raiz do projeto, rode:
   ```bash
   vercel
   ```
4. Siga as instruções no terminal. A Vercel detecta automaticamente projetos Next.js e configura tudo (build, rotas, SSR) sem necessidade de configuração extra.

> Alternativamente, basta importar o repositório do GitHub diretamente em [vercel.com/new](https://vercel.com/new) para deploy automático a cada push.

### Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Conecte o repositório do GitHub
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** deixe o plugin oficial `@netlify/plugin-nextjs` gerenciar (Netlify detecta Next.js automaticamente)

### Servidor próprio (VPS / Docker)

```bash
npm run build
npm run start
```

Recomenda-se usar um gerenciador de processos como [PM2](https://pm2.keymetrics.io/) para manter a aplicação rodando em produção:

```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

## 📁 Estrutura do Projeto

```
portfolio-next-ts/
├── app/
│   ├── layout.tsx           # Layout raiz (Navbar, fontes, metadata)
│   ├── page.tsx               # Rota / (Home)
│   ├── globals.css           # Import do Tailwind v4
│   ├── projetos/
│   │   └── page.tsx           # Rota /projetos
│   ├── sobre/
│   │   └── page.tsx           # Rota /sobre
│   └── contato/
│       └── page.tsx           # Rota /contato
├── components/
│   └── Navbar.tsx             # Menu de navegação (client component)
├── lib/
│   └── data.ts                 # Dados tipados de projetos, habilidades e contato
├── next.config.js
├── next-env.d.ts              # Tipos globais do Next.js (não editar)
├── postcss.config.mjs        # Integração do Tailwind v4 via PostCSS
├── tsconfig.json               # Configuração do TypeScript + alias "@/"
├── package.json
└── README.md
```

## ⚙️ Variáveis de Ambiente (opcional)

Caso futuramente o projeto utilize variáveis de ambiente (ex: integração com formulário de contato via API), crie um arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_API_URL=https://sua-api.com
EMAIL_SERVICE_KEY=sua-chave
```

> ⚠️ Nunca suba o arquivo `.env.local` para o repositório. O Next.js já o ignora por padrão no `.gitignore` gerado.
> Variáveis que precisam estar disponíveis no navegador devem começar com `NEXT_PUBLIC_`.

## 📝 Scripts Disponíveis

| Comando           | Descrição                                          |
|--------------------|-----------------------------------------------------|
| `npm run dev`      | Inicia o servidor de desenvolvimento (porta 3000)   |
| `npm run build`    | Gera o build de produção                            |
| `npm run start`    | Inicia o servidor em modo produção                  |
| `npm run lint`     | Roda o linter do Next.js                             |

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests com sugestões e melhorias.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo como base para o seu próprio portfolio.

## 📬 Contato

Para dúvidas ou sugestões, entre em contato através da seção de contato no próprio site ou pelo meu perfil no GitHub: [github.com/dionimf](https://github.com/dionimf)
