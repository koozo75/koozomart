export interface Product {
  slug: string;
  name: string;
  origin: 'Japon' | 'Corée';
  category: string;
  description: string;
  image?: string;
}

export const products: Product[] = [
  {
    slug: 'sample-1',
    name: 'Produit témoin I',
    origin: 'Japon',
    category: 'Snacks',
    description:
      'Texte de présentation à remplacer. Décrivez l’origine, le goût, les occasions de dégustation.',
  },
  {
    slug: 'sample-2',
    name: 'Produit témoin II',
    origin: 'Corée',
    category: 'Condiments',
    description:
      'Texte de présentation à remplacer. Décrivez l’origine, le goût, les occasions d’utilisation.',
  },
  {
    slug: 'sample-3',
    name: 'Produit témoin III',
    origin: 'Japon',
    category: 'Vie quotidienne',
    description:
      'Texte de présentation à remplacer. Décrivez l’usage, la matière, les particularités.',
  },
  {
    slug: 'sample-4',
    name: 'Produit témoin IV',
    origin: 'Corée',
    category: 'Snacks',
    description: 'Texte de présentation à remplacer.',
  },
];
