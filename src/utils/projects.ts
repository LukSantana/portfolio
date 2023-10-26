interface ProjectProps {
  imgUrl: string;
  title: string;
  description: string;
  responsibilities: string;
  projectUrl: string;
  gitHubUrl: string;
}

export const projects: Array<ProjectProps> = [
  {
    imgUrl: "/assets/img/fashionista1.png",
    title: "Fashionista",
    description:
      "Team project made with React and Node.js with PostgreSQL as DBMS",
    responsibilities: "Team leadership, development and planning.",
    projectUrl: "https://fashionista-hackadev.netlify.app/",
    gitHubUrl: "https://github.com/LukSantana/fashionista2",
  },
  {
    imgUrl: "/assets/img/nlw-esports.png",
    title: "NLW-eSports",
    description:
      "Project made with React, React Native and Node.js on Rocketseat's Next Level Week",
    responsibilities: "Development.",
    projectUrl: "https://nlw-esports-luk.netlify.app/",
    gitHubUrl: "https://github.com/LukSantana/NLW-eSports",
  },
  {
    imgUrl: "/assets/img/geradorSenha.png",
    title: "Gerador de Senhas",
    description: "Password generator made with HTML, CSS and Javascript.",
    responsibilities: "Development, planning and design.",
    projectUrl: "https://luksantana.github.io/geradorSenha/",
    gitHubUrl: "https://github.com/LukSantana/geradorSenha",
  },
  {
    imgUrl: "/assets/img/validador.png",
    title: "Validador de CPF",
    description: "CPF (Brazilian Person Document Identification) validator made with HTML, CSS, Javascript and Node.js",
    responsibilities: "Development, planning and design.",
    projectUrl: "https://luksantana.github.io/verificador-cpf/",
    gitHubUrl: "https://github.com/LukSantana/verificador-cpf",
  },
  {
    imgUrl: "/assets/img/relogio.png",
    title: "Relógio",
    description: "Clock made with HTML, CSS and Javascript.",
    responsibilities: "Development, planning and design.",
    projectUrl: "https://luksantana.github.io/relogio/",
    gitHubUrl: "https://github.com/LukSantana/relogio",
  },
  {
    imgUrl: "/assets/img/calculadora.png",
    title: "Calculadora",
    description: "Calculator made with HTML, CSS and Javascript.",
    projectUrl: "https://luksantana.github.io/calculadora/",
    responsibilities: "Development, planning and design.",
    gitHubUrl: "https://github.com/LukSantana/calculadora",
  },
];