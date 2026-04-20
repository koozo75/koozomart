export interface Category {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
}

const IMG = (id: string) =>
  `https://rs-menus-api.roocdn.com/images/${id}/image.jpeg?width=800&height=800&auto=webp&format=jpg&fit=cover`;

export const categories: Category[] = [
  {
    slug: 'nouilles',
    name: 'Nouilles instantanées',
    subtitle: 'ラーメン · 라면',
    image: IMG('3783530e-0fc9-401a-8155-4d835333c24c'),
  },
  {
    slug: 'mochi',
    name: 'Mochi',
    subtitle: '餅',
    image: IMG('5b410b24-4b66-432f-9eac-d892026b475c'),
  },
  {
    slug: 'sauce-soja',
    name: 'Sauce soja',
    subtitle: '醤油',
    image: IMG('0a51ad68-38d7-4028-876b-091a8e15c4f4'),
  },
  {
    slug: 'kimchi',
    name: 'Kimchi & gâteau de riz',
    subtitle: '김치 · 떡',
    image: IMG('747d2dc4-b448-42ae-9f04-dd0cd3dd1a1b'),
  },
  {
    slug: 'boissons',
    name: 'Boissons',
    subtitle: '飲料 · 음료',
    image: IMG('fc3932a6-0c67-4092-9ade-7fa7b398a9c4'),
  },
  {
    slug: 'snacks-sales',
    name: 'Snacks salés',
    subtitle: 'おつまみ · 과자',
    image: IMG('cbdc9571-61d5-471b-b499-2cfac3619e6b'),
  },
];
