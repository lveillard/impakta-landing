const match = {
  titleMobile: "Match",
  titleDesktop: "El match perfecto",
  type: "horizontal",
  order: 1,
  items: [
    {
      title: "Inteligencia Artificial",
      content:
        "Nuestra I.A. identifica los puestos de trabajo que mejor se adaptan a tus habilidades y a tu personalidad.",
      image: "img/IA.svg",
    },
    {
      title: "Proceso unificado",
      content: "Las mejores empresas y start-ups en un sólo proceso.",
      image: "img/collect.svg",
    },
    {
      title: "Proceso didáctico",
      content:
        "Uno de nuestros objetivos principales es que aprendas mientras realizas las pruebas y que recibas todo el feedback posible, ya sea positivo o negativo.",
      image: "img/learning.svg",
    },
  ],
};

const impact = {
  titleMobile: "Impacto",
  order: 2,
  type: "horizontal",

  titleDesktop: "El match perfecto",
  items: [
    {
      title: "Centrado en candidato",
      content:
        "<li> Nuestro proceso esta centrado en el candidato. </li> <li> Las empresas que no cumplen con nuestros requisitos son descartadas.</li>",
      image: "img/powerful.svg",
      contentType: "html",
    },
    {
      title: "Con un propósito",
      content:
        "<li> Sólo aceptamos empresas modernas y start-ups con un producto o servicio de calidad con un propósito claro. </li> <li> Además, si lo deseas puedes decidir participar sólo en  procesos para empresas con un objetivo ecólogico o social.</li> ",
      image: "img/barriers.svg",
      contentType: "html",
    },
    {
      title: "Cultura de start-up ",
      content:
        "Sólo admitimos empresas de mentalidad moderna, centrados en sus empleados y con buena cultura de empresa.",
      image: "img/scrum.svg",
    },
  ],
};

const community = {
  titleMobile: "Comunidad",
  order: 3,
  type: "horizontal",

  titleDesktop: "Comunidad de elite",
  items: [
    {
      title: "Comunidad de elite",
      content:
        "Ponemos en contacto al 5% de candidatos que superan el proceso y organizamos eventos en las principales ciudades de España.",
      image: "img/party.svg",
    },
    {
      title: "Formación y mentores",
      content:
        "Candidatos de generaciones anteriores mentorizan a los nuevos candidatos durante sus primeros meses.",
      image: "img/quality.svg",
    },
    {
      title: "Seguimiento",
      content:
        "Una vez contratados, hacemos un seguimiento regular para evaluar a las empresas. También organizamos reuniones para ayudar a los candidatos a aprovechar al máximo su experiencia.",
      image: "img/teach.svg",
    },
  ],
};

const faq = {
  titleMobile: "FAQ",
  order: 3,
  type: "vertical",
  titleDesktop: "Preguntas frecuentes",
  items: [
    {
      title: "¿Qué porcentaje de candidatos superan el proceso?",
      content: "Aproximadamente el 5% de los candidatos validan el proceso.",
    },
    {
      title: "¿Qué ocurre si finalizo el proceso con éxito?",
      content:
        "Impakta proporciona tres servicios gratuitos a los candidatos que superan el proces. 1) Propuesta de trabajo 2) Acceso a la comunidad 3) Formación y seguimiento",
    },
    {
      title: "¿Qué pasa si no supero el proceso de selección?",
      content:
        "Si lo deseas, entrarás en una base de datos que puede ser consultada por múltiples empresas.",
    },
    {
      title: "¿Puedo volver a intentarlo?",
      content:
        "La plataforma vuelve a activarse a los 6 meses para que puedas volver a pasar el proceso utilizando los nuevos conocimientos y experiencias adquiridas.",
    },
  ],
};

export const candidato = {
  match: match,
  impact: impact,
  community: community,
  faq: faq,
};

export const programs = {
  titleMobile: "Comunidad",
  order: 3,
  type: "horizontal",

  titleDesktop: "Comunidad de elite",
  items: [
    {
      title: "Programa EMPATYA",
      content:
        "Te ayudamos a construir un CV y acercamos tu currículum a cientos de empresas de tu sector. #formación",
      image: "img/resume.svg",
      buttonColor: "#2870ff",
      id: 1,
    },
    {
      title: "Programa OLIG.IA",
      content:
        "Participa en el concurso de talento OLIGYA y entra a formar parte de una de nuestras start-up y scale-up asociadas. #concurso",
      image: "img/hire.svg",
      buttonColor: "#fff067",
      id: 2,
    },
    {
      title: "Programa LAUNCHYA",
      content: "¿Tienes una idea y no sabes por dónde empezar? #preincubadora",
      image: "img/idea.svg",
      buttonColor: "#c9009d",
      id: 3,
    },
  ],
};
