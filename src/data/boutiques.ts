export interface Boutique {
  slug: string;
  name: string;
  address: string;
  postcode: string;
  city: string;
  mapQuery: string;
  status?: 'ouverte' | 'bientot';
  metro?: string;
  deliveroo?: string;
}

export const boutiques: Boutique[] = [
  {
    slug: 'bastille',
    name: 'KOOZO BASTILLE',
    address: '22 rue de Lappe',
    postcode: '75011',
    city: 'Paris',
    mapQuery: 'KOOZO BASTILLE, 22 rue de Lappe, 75011 Paris',
    status: 'ouverte',
    metro: 'Bastille (1, 5, 8)',
    deliveroo: 'https://deliveroo.fr/fr/menu/paris/11eme-bastille/koozo-mart',
  },
  {
    slug: 'republique',
    name: 'KOOZO RÉPUBLIQUE',
    address: '77 rue de Turbigo',
    postcode: '75003',
    city: 'Paris',
    mapQuery: 'KOOZO REPUBLIQUE, 77 rue de Turbigo, 75003 Paris',
    status: 'ouverte',
    metro: 'Temple (3) · Arts et Métiers (3, 11)',
    deliveroo: 'https://deliveroo.fr/fr/menu/paris/paris-3e-temple/koozo-mart-republique',
  },
  {
    slug: 'montrouge',
    name: 'KOOZO MONTROUGE',
    address: '39 avenue Pierre Brossolette',
    postcode: '92120',
    city: 'Montrouge',
    mapQuery: '39 avenue Pierre Brossolette, 92120 Montrouge',
    status: 'bientot',
    metro: 'Mairie de Montrouge (4)',
  },
];
