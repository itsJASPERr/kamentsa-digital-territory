export const translations = {
  en: {
    // Navigation
    nav: {
      ourHistory: "Our History",
      artisanShop: "Artisan Shop",
      familyCircle: "Family Circle",
      altar: "Altar",
      donateNow: "Donate Now",
    },
    
    // Hero Section
    hero: {
      title: "Weaving Sacred Memory",
      subtitle: "Preserving the millenary knowledge, art, and territorial autonomy of the Kamëntsá community in the Sibundoy Valley.",
      cta: "Support Our Center",
    },
    
    // Living Territory Section
    territorio: {
      title: "Our Living Territory",
      body1: "For centuries, the Kamëntsá people have safeguarded the Sibundoy Valley, guided by the pillars of Time, Beauty, and Spirit. Our language, our rituals like Bëtsknaté, and our deep bond with the land define who we are.",
      body2: "Today, we are connecting our ancestral traditions with the modern world. By sharing our stories and crafts, we invite you to walk alongside us to preserve a worldview rooted in harmony and mutual respect.",
    },
    
    // Shop Section
    shop: {
      title: "The Work of Hands",
      purchase: "Purchase Piece",
    },
    
    // Products
    products: [
      {
        name: "Chumbe Tradicional",
        desc: "Hand-woven spiritual belt detailing community history lines.",
      },
      {
        name: "Tsombiachs Bracelet",
        desc: "Vibrant beadwork capturing the energy of the sacred fire.",
      },
    ],
    
    // Goals Section
    goals: {
      title: "Cultural Center Goals",
      progress: "35% financed",
      description: "Goal: Constructing the Traditional Medicine House",
    },
    
    // Modal
    modal: {
      title: "Make an Offering",
      subtitle: "Your contribution fuels the preservation of ancestral memory.",
    },
    
    // Footer
    footer: {
      location: "Valle de Sibundoy, Putumayo",
      copyright: "Kamëntsá Community. Crafted with digital reverence.",
    },
    
    // Language
    language: {
      code: "en",
    },
  },
  
  es: {
    // Navigation
    nav: {
      ourHistory: "Nuestra Historia",
      artisanShop: "Tienda Artesana",
      familyCircle: "Círculo Familiar",
      altar: "Altar",
      donateNow: "Donar Ahora",
    },
    
    // Hero Section
    hero: {
      title: "Tejiendo Memoria Sagrada",
      subtitle: "Preservando el conocimiento milenario, el arte y la autonomía territorial de la comunidad Kamëntsá en el Valle de Sibundoy.",
      cta: "Apoya Nuestro Centro",
    },
    

    // Living Territory Section
    territorio: {
      title: "Nuestro Territorio Vivo",
      body1: "Durante siglos, el pueblo Kamëntsá ha salvaguardado el Valle de Sibundoy, guiado por los pilares del Tiempo, la Belleza y el Espíritu. Nuestro idioma, nuestros rituales como el Bëtsknaté y nuestra conexión con la tierra definen quiénes somos.",
      body2: "Hoy, estamos conectando nuestras tradiciones ancestrales con el mundo moderno. Al compartir nuestras historias y artes, te invitamos a caminar junto a nosotros para preservar una cosmovisión arraigada en la armonía y el respeto mutuo.",
    },
    
    // Shop Section
    shop: {
      title: "El Trabajo de las Manos",
      purchase: "Comprar Pieza",
    },
    
    // Products
    products: [
      {
        name: "Chumbe Tradicional",
        desc: "Cinturón espiritual tejido a mano detallando líneas del historial comunitario.",
      },
      {
        name: "Pulsera Tsombiachs",
        desc: "Cuentas vibrantes que capturan la energía del fuego sagrado.",
      },
    ],
    
    // Goals Section
    goals: {
      title: "Objetivos del Centro Cultural",
      progress: "35% financiado",
      description: "Objetivo: Construir la Casa de Medicina Tradicional",
    },
    
    // Modal
    modal: {
      title: "Hacer una Ofrenda",
      subtitle: "Tu contribución impulsa la preservación de la memoria ancestral.",
    },
    
    // Footer
    footer: {
      location: "Valle de Sibundoy, Putumayo",
      copyright: "Comunidad Kamëntsá. Hecho con reverencia digital.",
    },
    
    // Language
    language: {
      code: "es",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
