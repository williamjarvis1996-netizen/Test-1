export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: 'branded' | 'film' | 'tv' | 'theatre' | 'immersive';
  year: string;
  role: string;
  description: string;
  longDescription?: string;
  credits?: string[];
  awards?: string[];
  links?: { label: string; url: string }[];
  image?: string;
  featured?: boolean;
}

export const categories = {
  branded: 'Branded Content',
  film: 'Film',
  tv: 'TV Development',
  theatre: 'Theatre & Audio',
  immersive: 'Immersive & Digital',
} as const;

export const projects: Project[] = [
  {
    slug: 'aramco-prosperity-zone',
    title: 'Ground That Built a Nation',
    client: 'Aramco',
    category: 'branded',
    year: '2026',
    role: 'Lead Producer / Budget Holder',
    description: 'Prosperity Zone campaign for Aramco, managing end-to-end production from script to final delivery.',
    featured: true,
  },
  {
    slug: 'hamilton-festive',
    title: 'In The Midst Of It',
    client: 'Hamilton Watches',
    category: 'branded',
    year: '2026',
    role: 'Producer',
    description: 'Festive 2026 campaign for Hamilton Watches. On-the-ground production across a three-day shoot, overseeing delivery of hero film and cutdowns.',
    featured: true,
  },
  {
    slug: 'ares-management',
    title: 'Speaker Films & Sizzle Reel',
    client: 'Ares Management',
    category: 'branded',
    year: '2025-2026',
    role: 'Producer',
    description: 'Sizzle reel and speaker films for Ares Management, with an ongoing retainer through January 2027.',
  },
  {
    slug: 'fora-at-five',
    title: 'Fora at Five',
    client: 'Fora',
    category: 'branded',
    year: '2026',
    role: 'Producer',
    description: 'Anniversary campaign for Fora, delivered end-to-end from concept through final cut.',
    featured: true,
  },
  {
    slug: 'chelsea-damac',
    title: 'Chelsea x DAMAC',
    client: 'Chelsea FC / DAMAC Properties',
    category: 'branded',
    year: '2025',
    role: 'Producer',
    description: 'Partnership content for Chelsea FC and DAMAC Properties, including VFX-driven post-production.',
  },
  {
    slug: 'revolut',
    title: 'Revolut Campaign',
    client: 'Revolut',
    category: 'branded',
    year: '2025',
    role: 'Producer',
    description: 'Branded content campaign for Revolut.',
  },
  {
    slug: 'ddd',
    title: 'Dinner, Diamonds and Death',
    category: 'film',
    year: '2025',
    role: 'Writer / Director',
    description: 'Dark comedy short film. Currently in post-production, targeting Sundance London.',
    featured: true,
  },
  {
    slug: 'aortic',
    title: 'Aortic',
    category: 'film',
    year: '2024',
    role: 'Writer / Co-Producer',
    description: 'Short film co-produced with Niamh Marie Smith. A tender exploration of nostalgia, self-acceptance, and the courage to keep moving forwards.',
    awards: ['Jury Award for Best Performance (Macauley Keeper), Rob Knox London Film Festival 2025'],
    links: [
      { label: 'IMDb', url: 'https://www.imdb.com/title/tt28815002/' },
    ],
    featured: true,
  },
  {
    slug: 'break-a-leg',
    title: 'Break A Leg',
    category: 'tv',
    year: '2024',
    role: 'Co-Creator / Writer',
    description: 'Dark comedy thriller, 6 x 30 min. When a cheerful but struggling acting student accepts a job chopping up human corpses, her talent as an actor dramatically improves. In development with Netflix, ITV, Hager Moss.',
    credits: ['Co-created with Moritz Matzmorr and Naala Vanslembrouck'],
    featured: true,
  },
  {
    slug: 'brain-drain',
    title: 'Brain Drain',
    category: 'tv',
    year: '2022',
    role: 'Creator / Writer',
    description: 'Apocalyptic adventure comedy, 6 x 25 min. On the brink of a zombie apocalypse, an unusual trio of government interns must navigate incompetent politicians, bureaucratic absurdities, and brain-controlling fungi. Optioned by Fandango Productions.',
    featured: true,
  },
  {
    slug: 'road-trip-comedy',
    title: 'Untitled Road Trip Comedy',
    category: 'tv',
    year: '2023',
    role: 'Writer',
    description: 'A stolen RV, a stolen octopus, and five strangers unravelling across Germany over one weekend. Farcical ensemble comedy with fully developed treatment.',
  },
  {
    slug: 'the-master-plan',
    title: 'The Master Plan',
    category: 'tv',
    year: '2024',
    role: 'Writer / Creator',
    description: 'Six-part HBO/Penguin-tone series. Doctor Who\'s Master tracked across Cold War Europe.',
  },
  {
    slug: 'distracted-rat',
    title: 'Distracted Rat Productions',
    category: 'theatre',
    year: '2019-2021',
    role: 'Co-Founder / Creative Producer',
    description: 'New writing production company. Produced a 3-night festival at OSO Arts Centre: 14 new short plays, 50+ artists, sold out every night. Co-produced the Remote Radioplays festival.',
  },
  {
    slug: 'remote-radioplays',
    title: 'Remote Radioplays',
    category: 'theatre',
    year: '2020-2021',
    role: 'Writer / Producer / Performer',
    description: 'Two festival releases during lockdown. Wrote and performed The Fjordic Typhoon. Appeared in Skink alongside Charlotte Jarvis.',
  },
  {
    slug: 'vidi-guides',
    title: 'Vidi Guides',
    category: 'immersive',
    year: '2020-2024',
    role: 'Head of Content & Production',
    description: 'Led content strategy and production for 100+ immersive travel podcasts. Partnerships with Walt Disney, Hilton Hotels, Lonely Planet, Culture Trip.',
    links: [
      { label: 'Portfolio', url: 'https://will-jarvis.co.uk/vidi-guides' },
    ],
  },
  {
    slug: 'colosseum-ar',
    title: 'Colosseum Immersive Tour',
    category: 'immersive',
    year: '2022',
    role: 'Content Producer',
    description: 'Augmented reality immersive tour of the Colosseum.',
  },
  {
    slug: 'disney-magic-kingdom',
    title: 'Disney Magic Kingdom Immersive Tour',
    category: 'immersive',
    year: '2021',
    role: 'Content Producer',
    description: 'Immersive audio tour of Disney\'s Magic Kingdom.',
  },
];

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
