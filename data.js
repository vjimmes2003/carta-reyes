// ===============================
// Carta de Reyes — data.js
// ===============================

window.FRANCHISES = [
  { slug: "tech-vr", name: "Tech / VR" },
  { slug: "organizacion", name: "Organización" },
  { slug: "fallout", name: "Fallout" },
  { slug: "hollow-knight", name: "Hollow Knight" },
  { slug: "chainsaw-man", name: "Chainsaw Man" },
  { slug: "demon-slayer", name: "Demon Slayer" },
  { slug: "juegos-mesa", name: "Juegos de mesa" },
  { slug: "barajas", name: "Barajas / Cartas" },
  { slug: "setup", name: "Setup / Escritorio" },
  { slug: "libros", name: "Libros" }
];

// ===============================
// 🏆 TOP (no fallas)
// ===============================
window.TOP_ITEMS = [
  {
    title: "Meta Quest 3S",
    desc: "Visor VR para juegos, experiencias y aplicaciones.",
    tags: ["Top", "Tech", "VR"],
    price: "Amazon: 279 € (cupón: 249 €) · ECI: 379 € (256 GB)",
    img: "assets/products/meta-quest-3s.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/f2xzSpi" },
      { label: "El Corte Inglés", url: "https://www.elcorteingles.es/electronica/A52795734-gafas-de-realidad-mixta-meta-quest-3s-256-gb/?stype=text_box&color=Blanco" }
    ]
  },
  {
    title: "PLAUD Note Pro (voz → texto)",
    desc: "Grabadora inteligente con transcripción automática. Prioridad en precisión.",
    tags: ["Top", "Organización", "Voz a texto"],
    price: "189 €",
    img: "assets/products/plaud-note-pro.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/6rFvoGg" },
      { label: "Web oficial", url: "https://es.plaud.ai/products/plaud-note-pro" }
    ]
  },
  {
    title: "Monopoly Fallout (segunda mano)",
    desc: "Edición Fallout. Ideal si aparece a buen precio y en buen estado.",
    tags: ["Top", "Fallout", "Juegos de mesa"],
    price: "35 € (Milanuncios) · 50 € (Wallapop)",
    img: "assets/products/monopoly-fallout.jpg",
    links: [
      { label: "Milanuncios", url: "https://www.milanuncios.com/juegos-de-mesa/monopoly-edicion-fallout-559097649.htm" },
      { label: "Wallapop", url: "https://es.wallapop.com/item/monopoly-fallout-edicion-coleccionista-948002359" }
    ]
  },
  {
    title: "Libro: La saga Fallout — Historia de una mutación",
    desc: "Libro sobre el universo Fallout (historia, arte y evolución).",
    tags: ["Top", "Fallout", "Libro"],
    price: "18,90 €",
    img: "assets/products/libro-saga-fallout.jpg",
    links: [
      { label: "El Corte Inglés", url: "https://www.elcorteingles.es/libros/A56958291-la-saga-fallout-historia-de-una-mutacion-tapa-blanda-con-solapas/?stype=text_box&color=Sin+especificar" },
      { label: "Amazon", url: "https://amzn.eu/d/dgFB5gu" }
    ]
  },
  {
    title: "Figura Nezuko contenta (Demon Slayer) — 11 cm",
    desc: "Figura para estantería.",
    tags: ["Top", "Demon Slayer", "Figura"],
    price: "26,59 €",
    img: "assets/products/figura-nezuko.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/12kuZ8w" }
    ]
  },
  {
    title: "Figura Pochita feliz (Chainsaw Man) — 8 cm",
    desc: "Figura pequeña y decorativa.",
    tags: ["Top", "Chainsaw Man", "Figura"],
    price: "22,95 €",
    img: "assets/products/figura-pochita.jpg",
    links: [
      { label: "El Corte Inglés", url: "https://www.elcorteingles.es/universo-friki/A50571411-figura-8-cm-pochita-feliz-chainsaw-man-furyu/?parentCategoryId=999.51265420013&color=Sin+especificar" }
    ]
  },
  {
    title: "HDP – Hasta Donde Puedas",
    desc: "Juego de cartas de humor negro en español.",
    tags: ["Top", "Cartas", "Humor negro"],
    price: "24,95 €",
    img: "assets/products/hdp-hasta-donde-puedas.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/4e3pFih" }
    ]
  },
  {
    title: "Bang! (juego de cartas)",
    desc: "Clásico muy rejugable y fácil de sacar.",
    tags: ["Top", "Juegos de mesa", "Cartas"],
    price: "39,95 €",
    img: "assets/products/bang.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/36YjidO" },
      { label: "El Corte Inglés", url: "https://www.elcorteingles.es/universo-friki/A14101858-juego-de-cartas-bang-la-bala-edicion-especial/?parentCategoryId=999.51265421013&color=Sin+especificar%26utm_source%3Dcopied_link%26utm_medium%3Dshared_referral%26utm_campaign%3Dshared_referral_web" }
    ]
  }
];

// ===============================
// 💡 IDEAS
// ===============================
window.IDEA_ITEMS = [
  {
    franchise_slug: "setup",
    franchise_name: "Setup / Escritorio",
    title: "Quntis 40 cm Luz de monitor",
    desc: "Luz suave y regulable para trabajar, estudiar o jugar.",
    tags: ["Setup", "Luz"],
    price: "41,99 €",
    img: "assets/products/quntis-lightbar.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/6Bv4ud4" }
    ]
  },
  {
    franchise_slug: "fallout",
    franchise_name: "Fallout",
    title: "Figura Lucy Fallout TV — 15 cm",
    desc: "Figura McFarlane basada en la serie de Fallout.",
    tags: ["Fallout", "Figura"],
    price: "39,95 €",
    img: "assets/products/lucy-fallout.jpg",
    links: [
      { label: "El Corte Inglés", url: "https://www.elcorteingles.es/universo-friki/A52063977-figura-15-cm-lucy-fallout-tv-mc-farlane-toys/?parentCategoryId=999.51265420013&color=Sin+especificar" }
    ]
  },
  {
    franchise_slug: "fallout",
    franchise_name: "Fallout",
    title: "Minibomba atómica Fallout (almacenamiento)",
    desc: "Decoración funcional para escritorio o estantería.",
    tags: ["Fallout", "Decoración"],
    price: "27,99 €",
    img: "assets/products/bomba-fallout.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/3t1wfiO" }
    ]
  },
  {
    franchise_slug: "juegos-mesa",
    franchise_name: "Juegos de mesa",
    title: "Exploding Kittens",
    desc: "Juego rápido y caótico.",
    tags: ["Juegos", "Cartas"],
    price: "19,95 €",
    img: "assets/products/exploding-kittens.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/2pw5Zq8" },
      { label: "El Corte Inglés", url: "https://www.elcorteingles.es/juguetes/A32996125-exploding-kittens/?parentCategoryId=999.51265421013&color=Sin+especificar" }
    ]
  },
  {
    franchise_slug: "barajas",
    franchise_name: "Barajas / Cartas",
    title: "Baraja de cartas Kuromi",
    desc: "Detalle pequeño y decorativo.",
    tags: ["Kuromi", "Cartas"],
    price: "11,99 € (oferta: 7,49 €)",
    img: "assets/products/baraja-kuromi.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/5NNUstU" }
    ]
  },
  {
    franchise_slug: "barajas",
    franchise_name: "Barajas / Cartas",
    title: "Baraja de cartas Wednesday",
    desc: "Baraja temática estilo Wednesday.",
    tags: ["Wednesday", "Cartas"],
    price: "11,99 €",
    img: "assets/products/baraja-wednesday.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/6BVCapl" }
    ]
  },
  {
    franchise_slug: "libros",
    franchise_name: "Libros",
    title: "Clean Code (español) — Robert C. Martin",
    desc: "Buenas prácticas para escribir mejor código.",
    tags: ["Programación", "Libro"],
    price: "50,82 € (antes: 53,50 €)",
    img: "assets/products/clean-code.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/jf5qOvZ" }
    ]
  },
  {
    franchise_slug: "libros",
    franchise_name: "Libros",
    title: "El Arte de Diseñar Juegos — Jesse Schell",
    desc: "Diseño de videojuegos desde una visión global.",
    tags: ["Videojuegos", "Diseño", "Libro"],
    price: "57 € (antes: 60 €)",
    img: "assets/products/arte-disenar-juegos.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/6eEZB5k" }
    ]
  },
  {
    franchise_slug: "hollow-knight",
    franchise_name: "Hollow Knight",
    title: "Libro hueco Hollow Knight",
    desc: "Libro decorativo tipo caja para guardar objetos.",
    tags: ["Hollow Knight", "Decoración"],
    price: "24,69 € (antes: 25,99 €)",
    img: "assets/products/libro-hueco-hollow.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.eu/d/6XYZK4q" }
    ]
  }
];
