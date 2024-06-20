import routes from "./routes";

const sitedata = {
  header: {
    menu: [
      {
        text: "Inicio",
        route: routes.HOME,
      },
      {
        text: "Productos",
        route: routes.PRODUCTS,
      },
      // {
      //   text: "Preguntas Frecuentes",
      //   route: routes.FAQS,
      // },
      {
        text: "Contacto",
        route: routes.CONTACT,
      },
      {
        text: "Ubicación",
        route: routes.MAP,
      },
    ],
    socialLinks: [
      {
        icon: "facebook",
        link: "https://www.facebook.com/share/wYigMM3Fh6bywfPz/?mibextid=JRoKGi",
      },
      // {
      //   icon: "instagram",
      //   link: "https://www.google.com/",
      // },
    ],
  },
  hero: {},
  us: {
    title: "Nosotros",
    par1: "METALER es una empresa fundada en el 2020, con el objetivo de ser de las más importantes empresas en la industria de la fundición, diseño y fabricación de moldes, noyos y piezas terminadas.",
    par2: "Somos expertos ofreciendo soluciones para redes de abastecimiento de agua, alcantarillado, servicios públicos, pluviales, redes de telecomunicaciones, pesas y equipos para gimnasio.",
  },
  mission_vission: {
    misionTitle: "Misión",
    misionText:
      "Nuestra misión es satisfacer las necesidades del cliente con excelentes productos, con excelente calidad y resistencia.",
    visionTitle: "Visión",
    visionText:
      "Ser líder en la comercialización de piezas metálicas, garantizando que nuestros productos sean duraderos y confiable creando relaciones a largo plazo.",
  },
  our_focus: {
    title: "Nuestro Enfoque",
    text: "Somos una empresa dedicada a la realización de moldes para fundición, noyos y la producción de piezas terminadas, para diferentes tipos de industrias con la más alta calidad y los precios más competitivos del mercado.",
    boxes: [
      {
        text: "Diseño",
        icon: "leaf",
      },
      {
        text: "Fabricación",
        icon: "tools",
      },
      {
        text: "Soluciones",
        icon: "hours",
      },
    ],
    list: [
      "Alcantarillado",
      "Agua Potable",
      "Electricidad",
      "Telecomunicaciones",
    ],
  },
  our_products: {
    title: "Nuestros Materiales",
    products: [
      {
        name: "Producto1",
        details: "Amet eu facilisi posuere ut at cras non ipsum proin",
        img: "prod1",
      },
      {
        name: "Producto2",
        details: "Emu facilisi posuere ut at cras non ipsum proin",
        img: "prod2",
      },
      {
        name: "Producto3",
        details: "Fasacilisi posuere ut at cras non ipsum proin",
        img: "prod3",
      },
    ],
  },
  contact_label: {
    title: "Contacto",
  },
  footer: {
    copy: "Copyright 2024",
    contactInfo: [
      {
        text: "servicesindustri.ventas@gmail.com",
        icon: "mail",
      },
      {
        text: "775-1492233",
        icon: "phone",
      },
      {
        text: "Chalco de Díaz Covarrubias, C.P. 56608, Estado de México.",
        icon: "location",
      },
    ],
  },
  contact: {
    title: "Contactanos",
  },
  ubicacion: {
    title: "Nuestra Ubicación",
  },
  productos: {
    title: "Productos",
    categories: [
      {
        name: "Alcantarillado",
        description: "consectetur adipiscing elit",
        products: [
          {
            id: "prod-1",
            name: "Brocal",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://picsum.photos/300/200",
          },
          {
            id: "prod-2",
            name: "Marco y Rejilla",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://picsum.photos/300/200",
          },
          {
            id: "prod-3",
            name: "Coladera Pluvial",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://picsum.photos/300/200",
          },
        ],
      },
      {
        name: "Agua Potable",
        description: "consectetur adipiscing elit",
        products: [
          {
            id: "prod-4",
            name: "Marco y tapa",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://picsum.photos/300/200",
          },
        ],
      },
    ],
  },
  preguntas_frecuentes: {
    title: "Preguntas Frecuentes",
    faqs: [
      {
        question: "Pregunta 1",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        question: "Pregunta 2",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        question: "Pregunta 3",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,
      },
    ],
  },
  whatsapp_contacto: {
    number: "7751492233",
  },
};

export default sitedata;
