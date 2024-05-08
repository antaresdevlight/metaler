import routes from "./routes";

const sitedata = {
  header: {
    menu: [
      {
        text: "Inicio",
        route: routes.HOME,
      },
      {
        text: "Contact",
        route: routes.CONTACT,
      },
      {
        text: "Ubicación",
        route: routes.MAP,
      },
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
      "BROCAL Y TAPA (Alcantarillado)",
      "MARCO Y REGILLA ALCANTARILLADO (Alcantarillado)",
      "MARCO Y TAPA AP (Agua potable)",
      "COLADERA PLUVIAL (Alcantarillado)",
      "ARO Y TAPA (Electricidad)",
      "BROCAL Y TAPA MANHOLE (Telecomunicaciones)",
    ],
  },
  our_products: {
    title: "Nuestros Productos",
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
        text: "uriel_vera_@hotmail.com",
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
};

export default sitedata;
