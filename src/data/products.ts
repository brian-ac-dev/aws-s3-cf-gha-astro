export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  tagline: string;
  description: string;
  accent: string;
  pattern:
    | 'orbit'
    | 'pulse'
    | 'nova'
    | 'echo'
    | 'drift'
    | 'flash'
    | 'volt'
    | 'haze'
    | 'bolt'
    | 'reef'
    | 'ember';
};

export const products: Product[] = [
  {
    slug: 'camiseta-orbit',
    name: 'Camiseta Orbit',
    price: 32,
    category: 'Tops',
    tagline: 'Algodón pesado con print orbital.',
    description:
      'Corte boxy, cuello rib y un print orbital serigrafiado a mano. Pensada para uso diario con drop limpio.',
    accent: '#FF5C4D',
    pattern: 'orbit',
  },
  {
    slug: 'gorra-pulse',
    name: 'Gorra Pulse',
    price: 28,
    category: 'Accesorios',
    tagline: 'Perfil bajo, vibra alta.',
    description:
      'Gorra de 6 paneles con visera curva y bordado Pulse. Ajuste snapback y panel trasero de malla.',
    accent: '#3DDC97',
    pattern: 'pulse',
  },
  {
    slug: 'tote-nova',
    name: 'Tote Nova',
    price: 24,
    category: 'Accesorios',
    tagline: 'Lona gruesa, asa larga, zero fuss.',
    description:
      'Tote de lona 12 oz con costuras reforzadas y logo Nova en contraste. Cabida para laptop de 14".',
    accent: '#FFE566',
    pattern: 'nova',
  },
  {
    slug: 'hoodie-echo',
    name: 'Hoodie Echo',
    price: 68,
    category: 'Tops',
    tagline: 'Felpa suave, capucha forrada.',
    description:
      'Hoodie oversized con bolsillo canguro y rib en puños. Interior brushed y etiqueta tejida PopShop.',
    accent: '#6C8CFF',
    pattern: 'echo',
  },
  {
    slug: 'sneaker-drift',
    name: 'Sneaker Drift',
    price: 96,
    category: 'Calzado',
    tagline: 'Suela gum, upper canvas.',
    description:
      'Sneaker low-top con canvas lavado, plantilla acolchada y suela gum. Edición limitada Drift.',
    accent: '#FF8A3D',
    pattern: 'drift',
  },
  {
    slug: 'cap-flash',
    name: 'Cap Flash',
    price: 34,
    category: 'Accesorios',
    tagline: 'Brim plano, color punch.',
    description:
      'Cap flat-brim con panel frontal estructurado y parche Flash bordado. Interior moisture-wicking.',
    accent: '#FF4DB8',
    pattern: 'flash',
  },
  {
    slug: 'chaqueta-volt',
    name: 'Chaqueta Volt',
    price: 118,
    category: 'Tops',
    tagline: 'Shell ligero, cierre técnico.',
    description:
      'Chaqueta windbreaker con cremallera YKK, capucha packable y logo Volt reflectante. Ideal para media estación.',
    accent: '#A8FF3D',
    pattern: 'volt',
  },
  {
    slug: 'pantalon-haze',
    name: 'Pantalón Haze',
    price: 72,
    category: 'Bottoms',
    tagline: 'Wide leg, wash suave.',
    description:
      'Pantalón wide-leg en twill lavado con pinzas y cintura elástica interna. Caída Haze con bolsillos laterales.',
    accent: '#9B8CFF',
    pattern: 'haze',
  },
  {
    slug: 'mochila-bolt',
    name: 'Mochila Bolt',
    price: 54,
    category: 'Accesorios',
    tagline: '18 L, compartimento laptop.',
    description:
      'Mochila de nylon ripstop con panel acolchado para 15", correas pecho y bolsillo frontal Bolt con cremallera.',
    accent: '#00C2FF',
    pattern: 'bolt',
  },
  {
    slug: 'calcetines-reef',
    name: 'Calcetines Reef',
    price: 14,
    category: 'Accesorios',
    tagline: 'Pack x3, rib colorido.',
    description:
      'Trio de calcetines crew en algodón peinado con rib contrastado Reef. Refuerzo en talón y puntera.',
    accent: '#20E3B2',
    pattern: 'reef',
  },
  {
    slug: 'beanie-ember',
    name: 'Beanie Ember',
    price: 26,
    category: 'Accesorios',
    tagline: 'Lana merino, fold corto.',
    description:
      'Beanie de merino con fold de 5 cm y etiqueta Ember tejida. Calor sin volumen para look diario.',
    accent: '#FF6B35',
    pattern: 'ember',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);
}
