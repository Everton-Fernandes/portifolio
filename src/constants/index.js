import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    Java,
    CSharp,
    xamarin,
    html,
    css,
    reactjs,
    MySQL,
    tailwind,
    springboot,
    Illustrator,
    git,
    figma,
    photoshop,
    autocad,
    CPOS,
    JR,
    PMSV,
    verion,
    URF,
    PMI,
    PrevisaoTempo,
    Portifolio,
    gerenciador,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Experiência",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Web",
      icon: web,
    },
    {
      title: "Desenvolvedor Mobile",
      icon: mobile,
    },
    {
      title: "Desenvolvedor Backend",
      icon: backend,
    },
    {
      title: "Criador de Conteúdo",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Xamarin",
      icon: xamarin,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "CSharp",
      icon: CSharp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MySQL",
      icon: MySQL,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "SpringBoot",
      icon: springboot,
    },
    {
      name: "Illustrator",
      icon: Illustrator,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Desenvolvedor",
      company_name: "VERION AGRÍCULTURA",
      icon: verion,
      iconBg: "#E6DEDD",
      date: "Maio de 2021 - Novembro de 2023",
      points: [
        "Tenho uma ampla experiência no desenvolvimento Mobile, utilizando tecnologias como Xamarin e C#.",
        "Entendimento dos princípios de design SOLID, bem como das arquiteturas MVVM (Model-View-ViewModel) e MVC (Model-View-Controller)",
        "Minha experiência se estende ao uso do framework .NET Core, onde pude aplicar esses conhecimentos de forma prática e eficaz.",
      ],
    },
    {
      title: "Analista de comércio exterior",
      company_name: "URF LOGÍSTICA",
      icon: URF,
      iconBg: "#E6DEDD",
      date: "Janeiro de 2019 a Junho de 2019.",
      points: [
        "Conhecimentos gerais em importação e exportação, perpassando pelos trâmites operacionais ligados à emissão de DUE e de DI",
        "Rotinas de análises documentais (fatura, packing list e certificados de origem)",
        "Conhecimento pleno na extração de declarações de importação e relacionamento de dados para ingresso de demandas judiciais (pleito de restituição de tributos - Taxa SISCOMEX)",
      ],
    },
    {
      title: "Diretor de departamento de obras públicas",
      company_name: "PREFEITURA MUNICIPAL DE ITANHAÉM",
      icon: PMI,
      iconBg: "#E6DEDD",
      date: "Julho de 2016 - Maio de 2018",
      points: [
        "Supervisão e fiscalização de projetos e obras em instituições públicas, incluindo escolas, hospitais e praças.",
        "Realização de levantamentos quantitativos, cotações de insumos e elaboração de composições de custo.",
        "Participação ativa na elaboração de orçamentos, memórias de cálculo e cronogramas físico-financeiros.",
        "Profundo conhecimento em adequação e regularização de projetos, bem como em compatibilização de projetos",
      ],
    },
    {
      title: "Engenheiro civil",
      company_name: "CPOS - COMPANHIA PAULISTA DE OBRAS E SERVIÇOS",
      icon: CPOS,
      iconBg: "#E6DEDD",
      date: "Fevereiro de 2014 - Fevereiro de 2016",
      points: [
        "Contribuição ativa para levantamentos quantitativos, cotações de insumos e composições de custo.",
        "Participação na elaboração de orçamentos, memórias de cálculo e cronogramas físico-financeiros.",
        "Contribuição na alimentação de planilhas estaduais com insumos e composições.",
      ],
    },
    {
      title: "Estagiário",
      company_name: "CONSTRUTORA E INCORPORADORA JR",
      icon: JR,
      iconBg: "#E6DEDD",
      date: "Abril de 2012 - Abril de 2013",
      points: [
        "Acompanhamento e fiscalização de projetos desde a fase de fundação até o acabamento, incluindo a gestão de equipes próprias e terceirizadas.",
        "Participação em auditorias relacionadas ao Programa Brasileiro da Qualidade e Produtividade do Habitat (PBQP-H).",
        "Elaboração de orçamentos para maquinários necessários para a eficaz execução das obras.",
      ],
    },
    {
      title: "Estagiário",
      company_name: "PREFEITURA MUNICIPAL DE SÃO VICENTE",
      icon: PMSV,
      iconBg: "#E6DEDD",
      date: "Janeiro de 2010 - Janeiro de 2012",
      points: [
        "Acompanhamento e fiscalização de projetos relacionados à Companhia de Desenvolvimento Habitacional e Urbano do Estado de São Paulo (CDHU) e infraestrutura.",
        "Análise e compatibilização de projetos topográficos.",
        "Conhecimento em processos de regularização fundiária",
        "habilidades na elaboração de maquetes eletrônicas em AutoCAD.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Site Previsão do tempo",
      description:
        "Web site utilizando uma API externa de tempo, com uma buscar por cidade e com as principais capitais do Brasil",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: PrevisaoTempo,
      source_code_link: "https://github.com/Everton-Fernandes/previsaoTempo",
    },
    {
      name: "Portifólio",
      description:
        "Web site apresentando os meus trabalhos, projetos e realizações que destacam as habilidades, competências e experiências. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Portifolio,
      source_code_link: "https://github.com/Everton-Fernandes/portifolio",
    },
    {
      name: "Gerenciador",
      description:
        "Web site gerenciador de projetos e serviços. Intuitivo, oferece ferramentas eficientes para planejamento de tarefas e resultados.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gerenciador,
      source_code_link: "https://github.com/Everton-Fernandes/gerenciador",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };