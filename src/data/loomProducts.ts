export interface LoomProduct {
  id: string;
  name: string;
  price: string;
  symbolism: string;
  desc: string;
  img: string;
  checkoutUrl: string;
}

export const loomProducts: LoomProduct[] = [
  {
    id: 'item-01',
    name: 'The Hummingbird Chumbe',
    price: '45.00',
    symbolism: 'Messenger of the Word',
    desc: 'The hummingbird carries words between the ancestors and the earth. It guards the sacred Borrachero tree. Hand-woven using traditional fibers.',
    img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80',
    checkoutUrl: '#'
  },
  {
    id: 'item-02',
    name: 'Sacred Turtle Carving',
    price: '85.00',
    symbolism: 'Inner Strength & Protection',
    desc: 'Carved from fallen native wood - we never harm the trees. The turtle reminds us to walk our spiritual path slowly, leaving a firm footprint.',
    img: 'https://images.unsplash.com/photo-1610959063231-1e9a2ebfb81b?auto=format&fit=crop&w=600&q=80',
    checkoutUrl: '#'
  },
  {
    id: 'item-03',
    name: 'The Frog Motif',
    price: '60.00',
    symbolism: 'Fertility & The Chagra',
    desc: 'Represents the Chagra (agricultural school of life) and the traditional medicine lines maintained within the community.',
    img: 'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=600&q=80',
    checkoutUrl: '#'
  },
  {
    id: 'item-04',
    name: 'Ancestral Seed Necklace',
    price: '35.00',
    symbolism: 'Respectful Harmony',
    desc: 'We wait for the seeds to fall naturally. When the tree drops them, it means they are a gift for us to turn into instruments or art.',
    img: 'https://images.unsplash.com/photo-1599643478524-fb66f8510ad6?auto=format&fit=crop&w=600&q=80',
    checkoutUrl: '#'
  }
];