// Franquicias para filtrar IDEAS (chips)
window.FRANCHISES = [
  { slug: "fallout", name: "Fallout" },
  { slug: "the-last-of-us", name: "The Last of Us" },
  { slug: "stranger-things", name: "Stranger Things" },
  { slug: "arcane", name: "Arcane" },
  { slug: "hollow-knight", name: "Hollow Knight" },
  { slug: "chainsaw-man", name: "Chainsaw Man" },
  { slug: "valorant", name: "Valorant" },
  { slug: "death-note", name: "Death Note" },
  { slug: "harry-potter", name: "Harry Potter" },
  { slug: "voleibol", name: "Voleibol" },
  { slug: "juegos-mesa", name: "Juegos de mesa" },
];

// TOP (no fallas) – prioridad REAL según tú
window.TOP_ITEMS = [
  {
    title: "Meta Quest 3S",
    desc: "Prioridad alta. Si cae esto, me explota la cabeza (para bien).",
    tags: ["Top", "Tecnología", "VR"],
    price: "€€€",
    links: [
      { label: "Amazon", url: "" },
      { label: "Alternativa", url: "" }
    ]
  },
  {
    title: "PLAUD Note Pro (voz → texto)",
    desc: "La versión Pro: por la diferencia de precio, la normal no compensa. Prioridad: precisión > facilidad > PC.",
    tags: ["Top", "Organización", "Voz a texto"],
    price: "€€€",
    links: [
      { label: "Web oficial / tienda", url: "" },
      { label: "Amazon", url: "" },
      { label: "Alternativa", url: "" }
    ]
  },
  {
    title: "Figura Hollow Knight – Hornet (resina 8–12 cm)",
    desc: "Puede ser agresiva o chill. Con que sea buena y no gigante, perfecto.",
    tags: ["Top", "Hollow Knight", "Figura"],
    price: "€€€",
    links: [
      { label: "Tienda / alternativa", url: "" }
    ]
  },
  {
    title: "Figura Hollow Knight – The Knight (resina 8–12 cm)",
    desc: "Una figura del caballero para estantería/setup.",
    tags: ["Top", "Hollow Knight", "Figura"],
    price: "€€€",
    links: [
      { label: "Tienda / alternativa", url: "" }
    ]
  },

  // “Primeras de franquicia” que podrían subir al TOP
  {
    title: "The Last of Us – Ellie (juego) figura / mini diorama",
    desc: "Figura sola o con mini entorno. Cualquier opción buena me vale.",
    tags: ["Top", "The Last of Us", "Figura"],
    price: "€€€",
    links: [
      { label: "Amazon", url: "" },
      { label: "Alternativa", url: "" }
    ]
  },
  {
    title: "Stranger Things – Luz Upside Down (ambiente)",
    desc: "Luz oscura/ambiental que no moleste a los ojos.",
    tags: ["Top", "Stranger Things", "Luz"],
    price: "€€",
    links: [
      { label: "Amazon", url: "" },
      { label: "Alternativa", url: "" }
    ]
  },
  {
    title: "Fallout – Decoración (placa/logo/facción) o figura (Deathclaw/servoarmadura)",
    desc: "Me gusta prácticamente cualquier cosa de Fallout si tiene buen diseño.",
    tags: ["Top", "Fallout", "Decoración"],
    price: "€€",
    links: [
      { label: "Amazon", url: "" },
      { label: "Alternativa", url: "" }
    ]
  },

  // Solo 1 juego en TOP (los demás van en IDEAS)
  {
    title: "Un juego de cartas (TOP): Cards Against Humanity / Joking Hazard / Exploding Kittens",
    desc: "Solo 1 aquí. El resto de juegos estarán en IDEAS por si alguien prefiere elegir otro.",
    tags: ["Top", "Juegos de mesa", "Cartas"],
    price: "€€",
    links: [
      { label: "Amazon", url: "" }
    ]
  },
];

// IDEAS – por franquicia (aquí es donde meterás variedad y rangos de precio)
window.IDEA_ITEMS = [
  // Fallout
  {
    franchise_slug: "fallout",
    franchise_name: "Fallout",
    title: "Figura Deathclaw",
    desc: "Coleccionable/figura/estatua. Si es chula, me sirve.",
    tags: ["Fallout", "Figura"],
    price: "€€€",
    links: [{ label: "Amazon", url: "" }, { label: "Alternativa", url: "" }]
  },
  {
    franchise_slug: "fallout",
    franchise_name: "Fallout",
    title: "Figura servoarmadura (Power Armor)",
    desc: "Cualquier modelo si está bien hecho.",
    tags: ["Fallout", "Figura"],
    price: "€€€",
    links: [{ label: "Amazon", url: "" }, { label: "Alternativa", url: "" }]
  },
  {
    franchise_slug: "fallout",
    franchise_name: "Fallout",
    title: "Decor de facción / placa / señal / logo",
    desc: "Opciones baratas y medianas para decorar.",
    tags: ["Fallout", "Decoración"],
    price: "€€",
    links: [{ label: "Amazon", url: "" }]
  },

  // The Last of Us
  {
    franchise_slug: "the-last-of-us",
    franchise_name: "The Last of Us",
    title: "Ellie (juego) figura / diorama",
    desc: "Figura sola o con mini escenario.",
    tags: ["The Last of Us", "Figura"],
    price: "€€€",
    links: [{ label: "Amazon", url: "" }, { label: "Alternativa", url: "" }]
  },
  {
    franchise_slug: "the-last-of-us",
    franchise_name: "The Last of Us",
    title: "Print / póster art",
    desc: "Lámina para enmarcar, estética del juego.",
    tags: ["The Last of Us", "Arte"],
    price: "€€",
    links: [{ label: "Alternativa", url: "" }]
  },

  // Stranger Things
  {
    franchise_slug: "stranger-things",
    franchise_name: "Stranger Things",
    title: "Luz Upside Down / ambiente",
    desc: "Que no sea agresiva para los ojos.",
    tags: ["Stranger Things", "Luz"],
    price: "€€",
    links: [{ label: "Amazon", url: "" }]
  },
  {
    franchise_slug: "stranger-things",
    franchise_name: "Stranger Things",
    title: "Arte/print (Upside Down)",
    desc: "Para pared o estantería, mejor enmarcable.",
    tags: ["Stranger Things", "Arte"],
    price: "€",
    links: [{ label: "Alternativa", url: "" }]
  },

  // Hollow Knight
  {
    franchise_slug: "hollow-knight",
    franchise_name: "Hollow Knight",
    title: "Hornet (pose agresiva / chill)",
    desc: "8–12 cm, resina preferible, sin Funko.",
    tags: ["Hollow Knight", "Figura"],
    price: "€€€",
    links: [{ label: "Tienda", url: "" }]
  },

  // Arcane
  {
    franchise_slug: "arcane",
    franchise_name: "Arcane",
    title: "Jinx (figura individual)",
    desc: "Figura sola, tamaño contenido.",
    tags: ["Arcane", "Figura"],
    price: "€€€",
    links: [{ label: "Tienda", url: "" }]
  },
  {
    franchise_slug: "arcane",
    franchise_name: "Arcane",
    title: "Vi (figura individual)",
    desc: "Figura sola, tamaño contenido.",
    tags: ["Arcane", "Figura"],
    price: "€€€",
    links: [{ label: "Tienda", url: "" }]
  },

  // Chainsaw Man
  {
    franchise_slug: "chainsaw-man",
    franchise_name: "Chainsaw Man",
    title: "Makima (prioridad) / Power (segunda)",
    desc: "Preferencia por Makima, luego Power.",
    tags: ["Chainsaw Man", "Figura"],
    price: "€€€",
    links: [{ label: "Amazon", url: "" }]
  },

  // Valorant
  {
    franchise_slug: "valorant",
    franchise_name: "Valorant",
    title: "Mini figuras (preferente) – Raze / Killjoy / Omen",
    desc: "Mini figuras mejor que llaveros.",
    tags: ["Valorant", "Mini figura"],
    price: "€€",
    links: [{ label: "Amazon", url: "" }]
  },

  // Death Note
  {
    franchise_slug: "death-note",
    franchise_name: "Death Note",
    title: "Misa Misa (estética estantería)",
    desc: "Si es bonita para decoración, top.",
    tags: ["Death Note", "Figura"],
    price: "€€€",
    links: [{ label: "Tienda", url: "" }]
  },
  {
    franchise_slug: "death-note",
    franchise_name: "Death Note",
    title: "L y Light (secundarios / enfrentados)",
    desc: "Opcional: composición chula.",
    tags: ["Death Note", "Figura"],
    price: "€€",
    links: [{ label: "Tienda", url: "" }]
  },

  // Harry Potter
  {
    franchise_slug: "harry-potter",
    franchise_name: "Harry Potter",
    title: "Luna Lovegood (figura) o decor del mundo mágico",
    desc: "Figura de Luna o un objeto decorativo bonito.",
    tags: ["Harry Potter", "Decoración"],
    price: "€€",
    links: [{ label: "Amazon", url: "" }]
  },

  // Voleibol
  {
    franchise_slug: "voleibol",
    franchise_name: "Voleibol",
    title: "Manguitos negros con detalle sutil",
    desc: "Para evitar raspones al tirarme a por la bola.",
    tags: ["Voleibol", "Equipación"],
    price: "€",
    links: [{ label: "Amazon", url: "" }]
  },
  {
    franchise_slug: "voleibol",
    franchise_name: "Voleibol",
    title: "Rodilleras funcionales (look limpio)",
    desc: "Cómodas y que no sean horribles visualmente.",
    tags: ["Voleibol", "Equipación"],
    price: "€€",
    links: [{ label: "Amazon", url: "" }]
  },

  // Juegos de mesa (aquí van todos los demás)
  {
    franchise_slug: "juegos-mesa",
    franchise_name: "Juegos de mesa",
    title: "Cards Against Humanity",
    desc: "Humor negro sin filtros.",
    tags: ["Juegos", "Cartas"],
    price: "€€",
    links: [{ label: "Amazon", url: "" }]
  },
  {
    franchise_slug: "juegos-mesa",
    franchise_name: "Juegos de mesa",
    title: "Joking Hazard",
    desc: "Absurdísimo y rejugable.",
    tags: ["Juegos", "Cartas"],
    price: "€€",
    links: [{ label: "Amazon", url: "" }]
  },
  {
    franchise_slug: "juegos-mesa",
    franchise_name: "Juegos de mesa",
    title: "Exploding Kittens",
    desc: "Rápido, caótico, fácil de sacar.",
    tags: ["Juegos", "Cartas"],
    price: "€",
    links: [{ label: "Amazon", url: "" }]
  },
  {
    franchise_slug: "juegos-mesa",
    franchise_name: "Juegos de mesa",
    title: "Monopoly Fallout",
    desc: "Opcional si se encuentra.",
    tags: ["Juegos", "Tablero"],
    price: "€€",
    links: [{ label: "Amazon", url: "" }]
  },
];
