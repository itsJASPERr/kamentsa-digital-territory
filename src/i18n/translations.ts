export const translations = {
  en: {
    // Navigation
    nav: {
      ourHistory: "Our History",
      artisanShop: "Artisan Shop",
      donateNow: "Donate Now",
    },
    
    // Hero Section
    hero: {
      title: "Weaving Sacred Memory",
      subtitle: "Preserving the millenary knowledge, art, and territorial autonomy of the Kamëntsá community in the Sibundoy Valley.",
      cta: "Support Our Center",
    },
    
    // Legacy Section
    legacy: {
      title: "Our Legacy",
      text: "For generations, our elders have painted and woven our history into sacred geometries. This digital canvas exists to extend that legacy across the globe, protecting our cultural house.",
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
      label: "English",
      alternate: "es",
    },
  },
  
  es: {
    // Navigation
    nav: {
      ourHistory: "Nuestra Historia",
      artisanShop: "Tienda Artesana",
      donateNow: "Donar Ahora",
    },
    
    // Hero Section
    hero: {
      title: "Tejiendo Memoria Sagrada",
      subtitle: "Preservando el conocimiento milenario, el arte y la autonomía territorial de la comunidad Kamëntsá en el Valle de Sibundoy.",
      cta: "Apoya Nuestro Centro",
    },
    
    // Legacy Section
    legacy: {
      title: "Nuestro Legado",
      text: "Durante generaciones, nuestros abuelos han pintado y tejido nuestra historia en geometrías sagradas. Este lienzo digital existe para extender ese legado por todo el mundo, protegiendo nuestra casa cultural.",
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
      label: "Español",
      alternate: "en",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
