export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem: string;
  link: string;
}

export interface Contato {
  email: string;
  github: string;
  githubLabel: string;
  linkedin: string;
  linkedinLabel: string;
}

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: 'Sistema ERP Empresarial',
    descricao: 'Sistema completo de gestão empresarial com controle financeiro e estoque',
    tecnologias: ['Laravel', 'PostgreSQL', 'React'],
    imagem: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 2,
    titulo: 'API RESTful Microservices',
    descricao: 'Arquitetura de microserviços escalável com documentação automática',
    tecnologias: ['FastAPI', 'PostgreSQL', 'Python'],
    imagem: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 3,
    titulo: 'Jogo 3D Multiplayer',
    descricao: 'Jogo multiplayer com física realista e sistema de matchmaking',
    tecnologias: ['Unity', 'C#', 'Node.js'],
    imagem: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 4,
    titulo: 'Dashboard Analytics',
    descricao: 'Painel de métricas e relatórios com queries otimizadas',
    tecnologias: ['Flask', 'PL/SQL', 'React'],
    imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 5,
    titulo: 'E-commerce Platform',
    descricao: 'Plataforma de vendas online com gateway de pagamento integrado',
    tecnologias: ['PHP', 'Laravel', 'PostgreSQL'],
    imagem: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    link: '#',
  },
  {
    id: 6,
    titulo: 'Sistema de Automação',
    descricao: 'API de automação de processos com alta performance',
    tecnologias: ['Node.js', 'FastAPI', 'PostgreSQL'],
    imagem: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop',
    link: '#',
  },
];

export const habilidades: string[] = [
  'PHP', 'Laravel', 'Python', 'Flask', 'FastAPI',
  'PL/SQL', 'PostgreSQL', 'C#', 'Unity', 'Node.js', 'React',
];

export const contato: Contato = {
  email: 'dionimfx@gmail.com',
  github: 'https://github.com/dionimf',
  githubLabel: '@dionimf',
  linkedin: 'https://www.linkedin.com/in/dionimf/',
  linkedinLabel: '@dionimf',
};
