export type Lang = 'en' | 'es'

const en = {
  nav: {
    game:      'Game',
    media:     'Media',
    news:      'News',
    community: 'Community',
    faq:       'FAQ',
    contact:   'Contact',
    preorder:  'Pre-Order',
  },
  hero: {
    badge:       'Coming 2026',
    tagline:     'Where Legends Are Forged',
    description: 'Drop into a living, breathing battlefield. Build, fight, and survive in the most ambitious battle royale ever created.',
    cta_preorder:'Pre-Order Now',
    cta_trailer: 'Watch Trailer',
    available:   'Available on',
    scroll:      'Scroll',
  },
  features: {
    label:    'The Experience',
    heading:  'Redefining the',
    accent:   'Battlefield',
    sub:      "Every mechanic, every map, every match has been crafted to deliver something you've never felt before.",
    items: [
      {
        title: 'Massive Open World',
        desc:  'Explore a 16 km² living battlefield that evolves with every match. Dynamic weather, destructible environments, and hidden secrets await around every corner.',
      },
      {
        title: '100-Player Warfare',
        desc:  'Drop alongside 99 rivals in the ultimate test of skill and strategy. Solo, duo, or squad — every match tells a different story. No two battles are ever the same.',
      },
      {
        title: 'Build & Dominate',
        desc:  'Collect resources, craft fortifications, and outmaneuver your enemies with an advanced building system. Your creativity is your greatest weapon.',
      },
    ],
  },
  trailer: {
    label:    'Media',
    heading:  'Official',
    accent:   'Trailer',
    watchBtn: 'Watch Full Trailer',
  },
  gallery: {
    label:   'Screenshots',
    heading: 'See the',
    accent:  'World',
    view:    'View',
    items: [
      { title: 'Firestorm Ridge',    category: 'Environment'  },
      { title: 'Arctic Stronghold',  category: 'Battleground' },
      { title: 'Jungle Ambush',      category: 'Combat'       },
      { title: 'Urban Warfare',      category: 'Environment'  },
      { title: 'Desert Endgame',     category: 'Gameplay'     },
      { title: 'The Storm Circle',   category: 'Storm Zone'   },
    ],
  },
  news: {
    label:   'Updates',
    heading: 'Latest',
    accent:  'News',
    allNews: 'All News',
    read:    'Read',
    items: [
      {
        category: 'Dev Blog',
        date:     'March 10, 2025',
        readTime: '5 min read',
        title:    'Our Vision for Game: Building the Future of Battle Royale',
        excerpt:  'From day one we set out to create something never seen before — a world that breathes, reacts, and surprises you every single match.',
      },
      {
        category: 'Announcement',
        date:     'February 28, 2025',
        readTime: '2 min read',
        title:    'Closed Beta Registration Is Now Open — Sign Up Today',
        excerpt:  "We're selecting our first wave of Game warriors. Join the closed beta, provide feedback, and help us shape the game before launch.",
      },
      {
        category: 'Gameplay',
        date:     'February 15, 2025',
        readTime: '4 min read',
        title:    'New Mechanics Revealed: The Building System, Explained',
        excerpt:  "Today we're lifting the veil on one of Game's core pillars — the advanced building system that turns every player into an architect.",
      },
    ],
  },
  platforms: {
    label:   'Platforms',
    heading: 'Join the',
    accent:  'Battle',
    sub:     'Game launches on all major platforms simultaneously. Pick your weapon, choose your arena.',
    items: [
      { name: 'PC',     subtitle: 'via Steam'       },
      { name: 'PS5',    subtitle: 'PlayStation 5'   },
      { name: 'Xbox',   subtitle: 'Xbox Series X|S' },
      { name: 'Switch', subtitle: 'Nintendo Switch' },
    ],
  },
  faq: {
    label:   'Help',
    heading: 'Frequently',
    accent:  'Asked',
    items: [
      {
        q: 'When will Game be released?',
        a: 'Game is targeting a 2025 release. Sign up for our newsletter to be the first to know the exact date and secure your spot in the closed beta.',
      },
      {
        q: 'What platforms will Game be available on?',
        a: 'Game will launch simultaneously on PC (Steam), PlayStation 5, and Xbox Series X|S. A Nintendo Switch version is in development with a separate announcement coming soon.',
      },
      {
        q: 'Will Game be free-to-play?',
        a: "Game is a premium title with a one-time purchase. No pay-to-win mechanics. Cosmetic items and seasonal battle passes will be available separately.",
      },
      {
        q: 'How many players are in each match?',
        a: "Up to 100 players per match — Solo, Duo, or Squad of up to 4. Limited-time modes with different configurations are planned for post-launch.",
      },
      {
        q: 'Will there be crossplay between platforms?',
        a: "Yes — full crossplay across all platforms. Play with friends regardless of whether they're on PC, PS5, or Xbox.",
      },
      {
        q: 'How can I sign up for the closed beta?',
        a: "Beta registration is now open! Pre-order Game or complete your registration on our Pre-Order page. Beta testers will be selected in waves — the earlier you sign up, the better.",
      },
    ],
  },
  newsletter: {
    communityLabel: 'Community',
    communityHeading: 'Become part',
    communityAccent:  'of the Flock',
    communitySub:    'Join tens of thousands of Game warriors. Share strategies, get the latest news, and connect with players from every corner of the world.',
    formHeading:    'Stay Updated',
    formSub:        'Dev blogs, beta access, exclusive drops — delivered straight to your inbox. No spam, ever.',
    placeholder:    'Your email address',
    subscribe:      'Subscribe',
    legal:          'By subscribing you agree to our Privacy Policy.',
    successTitle:   "You're in!",
    successSub:     "We'll be in touch very soon.",
  },
  footer: {
    tagline:   'The next generation of battle royale. Forged for those who dare to survive.',
    copyright: '© 2026 Game. All rights reserved.',
    crafted:   'Crafted with',
    by:        'by the Game team',
    sections: [
      { heading: 'Game',    links: ['About', 'Features', 'Screenshots', 'Pre-Order']      },
      { heading: 'Media',   links: ['Trailer', 'Wallpapers', 'Press Kit', 'Brand Assets'] },
      { heading: 'Company', links: ['About Us', 'Careers', 'Blog', 'Partners']            },
      { heading: 'Support', links: ['FAQ', 'Help Center', 'Bug Report', 'Contact']        },
    ],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
}

const es: typeof en = {
  nav: {
    game:      'Juego',
    media:     'Media',
    news:      'Noticias',
    community: 'Comunidad',
    faq:       'FAQ',
    contact:   'Contacto',
    preorder:  'Pre-Orden',
  },
  hero: {
    badge:       'Próximamente 2026',
    tagline:     'Donde se Forjan las Leyendas',
    description: 'Lánzate a un campo de batalla vivo y dinámico. Construye, lucha y sobrevive en el battle royale más ambicioso jamás creado.',
    cta_preorder:'Pre-Ordenar Ahora',
    cta_trailer: 'Ver Tráiler',
    available:   'Disponible en',
    scroll:      'Deslizar',
  },
  features: {
    label:   'La Experiencia',
    heading: 'Redefiniendo el',
    accent:  'Campo de Batalla',
    sub:     'Cada mecánica, cada mapa, cada partida ha sido diseñada para entregarte algo que nunca antes has sentido.',
    items: [
      {
        title: 'Mundo Abierto Masivo',
        desc:  'Explora un campo de batalla de 16 km² que evoluciona con cada partida. Clima dinámico, entornos destructibles y secretos ocultos te esperan en cada rincón.',
      },
      {
        title: 'Guerra de 100 Jugadores',
        desc:  'Lánzate junto a 99 rivales en la prueba definitiva de habilidad y estrategia. Solo, dúo o escuadrón — cada partida cuenta una historia diferente. No hay dos batallas iguales.',
      },
      {
        title: 'Construye y Domina',
        desc:  'Recolecta recursos, construye fortines y supera a tus enemigos con un avanzado sistema de construcción. Tu creatividad es tu mayor arma.',
      },
    ],
  },
  trailer: {
    label:    'Media',
    heading:  'Tráiler',
    accent:   'Oficial',
    watchBtn: 'Ver Tráiler Completo',
  },
  gallery: {
    label:   'Capturas',
    heading: 'Descubre el',
    accent:  'Mundo',
    view:    'Ver',
    items: [
      { title: 'Cresta de Fuego',    category: 'Entorno'        },
      { title: 'Fortaleza Ártica',   category: 'Campo de Batalla'},
      { title: 'Emboscada en Selva', category: 'Combate'        },
      { title: 'Asalto Urbano',      category: 'Entorno'        },
      { title: 'Final en el Desierto', category: 'Jugabilidad'  },
      { title: 'El Círculo de Tormenta', category: 'Zona de Tormenta' },
    ],
  },
  news: {
    label:   'Actualizaciones',
    heading: 'Últimas',
    accent:  'Noticias',
    allNews: 'Ver Todo',
    read:    'Leer',
    items: [
      {
        category: 'Blog Dev',
        date:     '10 de marzo de 2025',
        readTime: '5 min de lectura',
        title:    'Nuestra Visión para Game: Construyendo el Futuro del Battle Royale',
        excerpt:  'Desde el primer día nos propusimos crear algo nunca antes visto — un mundo que respira, reacciona y te sorprende en cada partida.',
      },
      {
        category: 'Anuncio',
        date:     '28 de febrero de 2025',
        readTime: '2 min de lectura',
        title:    'El Registro de Beta Cerrada Ya Está Abierto — Inscríbete Hoy',
        excerpt:  "Estamos seleccionando la primera ola de guerreros Game. Únete a la beta cerrada, danos tu opinión y ayúdanos a dar forma al juego antes del lanzamiento.",
      },
      {
        category: 'Jugabilidad',
        date:     '15 de febrero de 2025',
        readTime: '4 min de lectura',
        title:    'Nuevas Mecánicas Reveladas: El Sistema de Construcción, Explicado',
        excerpt:  "Hoy levantamos el velo sobre uno de los pilares centrales de Game — el sistema de construcción avanzado que convierte a cada jugador en un arquitecto.",
      },
    ],
  },
  platforms: {
    label:   'Plataformas',
    heading: 'Únete a la',
    accent:  'Batalla',
    sub:     'Game se lanza simultáneamente en todas las plataformas principales. Elige tu arma, escoge tu arena.',
    items: [
      { name: 'PC',     subtitle: 'vía Steam'        },
      { name: 'PS5',    subtitle: 'PlayStation 5'    },
      { name: 'Xbox',   subtitle: 'Xbox Series X|S'  },
      { name: 'Switch', subtitle: 'Nintendo Switch'  },
    ],
  },
  faq: {
    label:   'Ayuda',
    heading: 'Preguntas',
    accent:  'Frecuentes',
    items: [
      {
        q: '¿Cuándo se lanzará Game?',
        a: 'Game apunta a un lanzamiento en 2025. Suscríbete a nuestro newsletter para ser el primero en conocer la fecha exacta y asegurar tu lugar en la beta cerrada.',
      },
      {
        q: '¿En qué plataformas estará disponible Game?',
        a: 'Game se lanzará simultáneamente en PC (Steam), PlayStation 5 y Xbox Series X|S. Una versión para Nintendo Switch está en desarrollo y tendrá un anuncio independiente próximamente.',
      },
      {
        q: '¿Game será gratuito?',
        a: "Game es un título premium con compra única. Sin mecánicas de pago para ganar. Los artículos cosméticos y los pases de temporada estarán disponibles por separado.",
      },
      {
        q: '¿Cuántos jugadores hay en cada partida?',
        a: "Hasta 100 jugadores por partida — Solo, Dúo o Escuadrón de hasta 4 jugadores. Modos de tiempo limitado con distintas configuraciones están planeados para después del lanzamiento.",
      },
      {
        q: '¿Habrá juego cruzado entre plataformas?',
        a: "Sí — juego cruzado completo entre todas las plataformas. Juega con amigos sin importar si usan PC, PS5 o Xbox.",
      },
      {
        q: '¿Cómo me inscribo en la beta cerrada?',
        a: "¡El registro para la beta ya está abierto! Pre-ordena Game o completa tu registro en nuestra página de Pre-Orden. Los beta testers se seleccionarán por oleadas — cuanto antes te inscribas, mejor.",
      },
    ],
  },
  newsletter: {
    communityLabel:   'Comunidad',
    communityHeading: 'Únete a',
    communityAccent:  'la Comunidad',
    communitySub:    'Únete a decenas de miles de guerreros Game. Comparte estrategias, recibe las últimas noticias y conéctate con jugadores de todo el mundo.',
    formHeading:    'Mantente Informado',
    formSub:        'Blogs de desarrollo, acceso beta, drops exclusivos — directo a tu bandeja de entrada. Sin spam, jamás.',
    placeholder:    'Tu dirección de correo',
    subscribe:      'Suscribirse',
    legal:          'Al suscribirte aceptas nuestra Política de Privacidad.',
    successTitle:   '¡Ya estás dentro!',
    successSub:     'Pronto estaremos en contacto.',
  },
  footer: {
    tagline:   'La nueva generación del battle royale. Forjada para quienes se atreven a sobrevivir.',
    copyright: '© 2026 Game. Todos los derechos reservados.',
    crafted:   'Hecho con',
    by:        'por el equipo Game',
    sections: [
      { heading: 'Juego',    links: ['Acerca de', 'Características', 'Capturas', 'Pre-Orden'] },
      { heading: 'Media',    links: ['Tráiler', 'Fondos', 'Kit de Prensa', 'Recursos de Marca'] },
      { heading: 'Empresa',  links: ['Sobre Nosotros', 'Carreras', 'Blog', 'Socios']           },
      { heading: 'Soporte',  links: ['FAQ', 'Centro de Ayuda', 'Reportar Error', 'Contacto']   },
    ],
    legal: ['Política de Privacidad', 'Términos de Servicio', 'Política de Cookies'],
  },
}

export const translations = { en, es } as const
export type Translations = typeof en
