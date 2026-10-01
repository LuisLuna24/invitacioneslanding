export interface CatalogItem {
  id: string;
  title: string;
  category: "Boda" | "XV Años" | "Bautizo" | "Cumpleaños" | "Baby Shower" | "Primera Comunión" | "Graduación";
  style: "Nocturno & Lujo" | "Romántico & Floral" | "Minimalista & Moderno" | "Celestial & Gold" | "Boho & Jardín" | "Clásico & Romántico" | "Romántico & Tradicional" | "Gala Elegante & Monograma" | "Noche & Dorado Elegante";
  description: string;
  image: string;
  tags: string[];
  paletteName: string;
  paletteColors: string[];
  featured?: boolean;
  isNew?: boolean;
  demoUrl?: string;
}

export const CATALOG_CATEGORIES = [
  "Todos",
  "Bodas",
  "XV Años",
  //"Bautizos",
  //"Cumpleaños",
  //"Baby Shower",
  //"Primera Comunión",
] as const;

export const CATALOG_STYLES = [
  "Todos",
  //"Nocturno & Lujo",
  //"Celestial & Gold",
  //"Romántico & Floral",
  "Minimalista & Moderno",
  //"Boho & Jardín",
  "Clásico & Romántico",
  "Romántico & Tradicional",
  "Gala Elegante & Monograma",
  "Noche & Dorado Elegante",
] as const;

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "boda-mildre-luis-minimal",
    title: "Minimal Classic",
    category: "Boda",
    style: "Minimalista & Moderno",
    description: "Estética limpia y sofisticada con paleta en tonos azul hielo y blanco, tipografía editorial con serifas, contador regresivo integrado y acceso directo a mapa y menú.",
    image: "/img/f1.jpg",
    tags: ["Menú Hamburguesa", "Cuenta Regresiva", "Google Maps", "RSVP Web", "Fotografías"],
    paletteName: "Azul Cielo & Blanco",
    paletteColors: ["#E8EEF5", "#1B3A5C", "#4A7C9D"],
    featured: true,
    demoUrl: "https://boda1lunaweb.netlify.app/",
  },
  {
    id: "boda-maria-carlos-classic",
    title: "Romantic Classic",
    category: "Boda",
    style: "Clásico & Romántico",
    description: "Diseño elegante y tradicional sobre fotografía de fondo con tonos cálidos, tipografía caligráfica sofisticada, sección de padrinos y padres, y frase emotiva.",
    image: "/img/f2.jpg",
    tags: ["Ceremonia", "Padres y Padrinos", "RSVP WhatsApp", "Google Maps", "Galería"],
    paletteName: "Beige Cálido & Crema",
    paletteColors: ["#D4C4A8", "#F5F2EB", "#2C2C2C"],
    featured: true,
    demoUrl: "https://boda2lunaweb.netlify.app/",

  },
  {
    id: "boda-mildre-luis-full",
    title: "Boda Mildre & Luis — Historia de Amor",
    category: "Boda",
    style: "Romántico & Tradicional",
    description: "Invitación interactiva con fotografía de portada, cuenta regresiva en tiempo real, sección 'Nuestra Historia de Amor' con monograma personalizado, y detalles de ceremonia y recepción con Google Maps.",
    image: "/img/f3.jpg",
    tags: ["Cuenta Regresiva", "Nuestra Historia", "Google Maps", "Ceremonia Religiosa", "Recepción", "RSVP"],
    paletteName: "Crema & Oscuro Sofisticado",
    paletteColors: ["#F9F6F0", "#2C2C2C", "#C5A059"],
    featured: true,
    demoUrl: "https://boda3lunaweb.netlify.app/",
  },
  {
    id: "xv-mildre-villaseñor-gala",
    title: "Gala de Quinceañera",
    category: "XV Años",
    style: "Gala Elegante & Monograma",
    description: "Invitación de XV años con diseño clásico y sofisticado, monograma plateado ornamentado, fecha detallada, contador regresivo, itinerario de recepción con ubicación y sección de mesa de regalos.",
    image: "/img/f4.jpg",
    tags: ["Monograma", "Cuenta Regresiva", "Google Maps", "Mesa de Regalos", "Itinerario"],
    paletteName: "Rojo, Negro & Plata",
    paletteColors: ["#490912", "#1C1C1C", "#C0C0C0"],
    featured: true,
    isNew: true,
    demoUrl: "https://xv1lunaweb.netlify.app/",

  },
  {
    id: "xv-jasmin-itzel-midnight",
    title: "Midnight Gold",
    category: "XV Años",
    style: "Noche & Dorado Elegante",
    description: "Invitación interactiva con fondo verde noche y destellos dorados, tipografía clásica con serifas, contador regresivo en tiempo real y secciones dedicadas a padres y padrinos.",
    image: "/img/f5.jpg",
    tags: ["Cuenta Regresiva", "Padres y Padrinos", "Diseño Nocturno", "RSVP Web", "Animación"],
    paletteName: "Verde Noche & Oro",
    paletteColors: ["#0B2217", "#D4AF37", "#133023"],
    featured: true,
    isNew: true,
    demoUrl: "https://xv2lunaweb.netlify.app/",
  },
];
