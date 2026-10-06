export interface ProjectLink {
  url: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: 'branded' | 'film' | 'tv' | 'theatre' | 'digital';
  year: string;
  role: string;
  description: string[];
  awards?: string[];
  image?: string;
  links?: ProjectLink[];
  featured?: boolean;
  wide?: boolean;
  num: string;
}

export const categories = {
  branded: 'Branded Content',
  film: 'Film',
  tv: 'TV Development',
  theatre: 'Theatre & Immersive',
  digital: 'Digital Media',
} as const;

export const projects: Project[] = [
  {
    slug: 'hamilton-in-the-midst-of-it',
    title: 'Hamilton Watches Festive Campaign',
    client: 'Hamilton Watches',
    category: 'branded',
    year: 'Autumn 2026',
    role: 'Producer',
    num: '01',
    wide: true,
    image: 'images/hamilton-in-the-midst-of-it.gif',
    description: [
      'Will produced Hamilton\'s festive campaign from concept through final delivery. He developed the creative treatment around three overlapping Christmas morning storylines, each anchored by a different Hamilton watch, and managed the client relationship across multiple approval rounds.',
      'He ran a three-day shoot at a manor house in Hertfordshire, coordinating a high-speed camera unit alongside the main unit. On set he managed talent, locations, and a schedule built around match-cut transitions that stitched the three storylines together.',
      'Delivered five films: a hero cut, a 30-second cutdown, and three 15-second social edits, each in four aspect ratios with full motion graphics, sound design, and colour grade. The top-down, locked-on-the-wrist visual language established here became the creative foundation for Hamilton\'s branded content direction.',
    ],
    featured: true,
  },
  {
    slug: 'hamilton-into-the-wild',
    title: 'Hamilton Watches "Into the Wild"',
    client: 'Hamilton Watches',
    category: 'branded',
    year: 'Winter 2025',
    role: 'Producer',
    num: '02',
    image: 'images/hamilton-into-the-wild.gif',
    links: [{ url: 'https://www.youtube.com/watch?v=Rl0pLkaWXs4', label: 'Watch' }],
    description: [
      'Will produced this three-part branded series for the Hamilton Khaki Field, leaning into the watch\'s military heritage and its identity as an outdoor tool built for rough terrain. He shaped the creative alongside director Ron Mulvey.',
      'He managed a two-day location shoot across rural Wales, handling logistics for remote countryside locations and working closely with DOP Angus Steele to build a visual language that matched the Khaki Field\'s rugged character.',
      'Will ran the post-production pipeline and delivered the final three-film series to Hamilton, managing edits, grade, and sound through to sign-off.',
    ],
    featured: true,
  },
  {
    slug: 'hamilton-power-up',
    title: 'Hamilton Watches "Power Up"',
    client: 'Hamilton Watches',
    category: 'branded',
    year: 'Spring 2025',
    role: 'Post-Production Producer',
    num: '03',
    image: 'images/hamilton-power-up.gif',
    links: [{ url: 'https://www.youtube.com/watch?v=aKi2dFwtTxo', label: 'Watch' }],
    description: [
      'Will managed post-production on this launch film for the Hamilton Khaki Field Titanium Auto. The film introduced the top-down, locked-on-the-wrist visual language that became the signature of Hamilton\'s branded content.',
      'He oversaw the edit, colour grade, sound design, and motion graphics pipeline, working with the director to build the film\'s energy metaphor around the watch\'s 80-hour power reserve and fuel-gauge complication.',
      'Winner at the Cannes Corporate Media & TV Awards 2026 and submitted for the Lens Awards under Best Creative Execution. The visual language Will helped establish here carried directly into the later festive campaign.',
    ],
    awards: [
      'Winner at the Cannes Corporate Media & TV Awards 2026',
      'Submitted for the Lens Awards 2026 under Best Creative Execution',
    ],
    featured: true,
  },
  {
    slug: 'fora-at-five',
    title: 'Fora Travel',
    client: 'Fora Travel',
    category: 'branded',
    year: 'Summer 2026',
    role: 'Producer',
    num: '04',
    image: 'images/fora-at-five.gif',
    links: [{ url: 'https://www.youtube.com/watch?v=DxAVfx8Igeo', label: 'Watch' }],
    description: [
      'Will produced this hero brand film marking Fora Travel\'s fifth anniversary. He oversaw production across two countries, building the story of a family returning to Palermo for a 50th wedding anniversary, curated by their Fora travel advisor.',
      'He coordinated London studio shoots for the advisor sequences, then managed three days of location work across Palermo with a local crew. Key locations included Villa Igiea, Teatro Massimo, Capo Market, Piazza Bellini, and San Saverio church.',
      'Will assembled the creative team: director Sam McMullen, DOP James Parsons, and editor Ravi Chauhan. He managed the full post pipeline including a split-screen VFX sequence and delivered the final film to Fora.',
    ],
    featured: true,
  },
  {
    slug: 'chelsea-damac',
    title: 'Chelsea FC',
    client: 'Chelsea FC / DAMAC Properties',
    category: 'branded',
    year: 'Spring 2026',
    role: 'Producer',
    num: '05',
    image: 'images/chelsea-damac.gif',
    links: [{ url: 'https://www.youtube.com/watch?v=5o_azlXU-xc', label: 'Watch' }],
    description: [
      'Will produced three ads for Chelsea Residences by DAMAC Properties: the hero spot "Matchday in the Sky" and two "Metaverse" comedy films featuring Chelsea FC players.',
      'He ran a two-day studio shoot with two units operating simultaneously. One unit built the Matchday platform sequences with football-talented body doubles while the other shot green-screen for the Metaverse films. Will managed tight talent windows, with Chelsea FC players available for just 15 minutes each on shoot day.',
      'He coordinated VFX with FocusFrame and delivered the final campaign to DAMAC, covering a floating pitch concept, skydiving sequences, and VR locker room comedy across multiple formats.',
    ],
  },
  {
    slug: 'booking-traveller-review-awards',
    title: 'Booking.com',
    client: 'Booking.com',
    category: 'branded',
    year: 'Autumn 2025',
    role: 'Co-Producer / 1st AD',
    num: '06',
    wide: true,
    image: 'images/booking-traveller-review-awards.gif',
    links: [{ url: 'https://www.youtube.com/watch?v=A6IfbTf06PU', label: 'Watch' }],
    description: [
      'Will co-produced and served as 1st AD on Booking.com\'s 14th annual Traveller Review Awards campaign, celebrating 1.81 million partners across 221 countries. The hero film, "Where Hospitality Begins," moved the campaign toward human storytelling with real award-winning partners.',
      'As 1st AD, Will managed the shoot schedule and floor on set, keeping the production on track across multiple locations and real contributors who weren\'t professional talent. As co-producer he helped shape the campaign\'s channel strategy and deliverables.',
      'The campaign delivered a hero film, social-native content, a stills campaign, and owned-channel creative. It won at the Cannes Corporate Media & TV Awards and took four MUSE Awards including three Platinum.',
    ],
    awards: [
      'Winner at the Cannes Corporate Media & TV Awards 2026',
      'Won four MUSE Awards (three Platinum, one Gold)',
      'Submitted for the Lens Awards 2026 under Hospitality',
    ],
    featured: true,
  },
  {
    slug: 'mcfc-ohana',
    title: 'Manchester City FC',
    client: 'Manchester City FC',
    category: 'branded',
    year: 'Spring 2026',
    role: 'Producer',
    num: '07',
    image: 'images/mcfc-ohana.gif',
    links: [{ url: 'https://www.youtube.com/watch?v=WKEuRSS-1Mw', label: 'Watch' }],
    description: [
      'Will produced the launch film for Manchester City Yas Residences by Ohana, a $4.1 billion waterfront development in Abu Dhabi. The film features Manchester City players and blends live-action with 3D-rendered architectural environments.',
      'He managed a production spanning three phases: location work at Manchester City\'s training facilities, live-action sequences in Abu Dhabi, and a virtual production day on an LED volume stage. Will coordinated player availability, crew across two countries, and the compositing of 3D renders into the final film.',
      'The finished film positioned the development within the global Manchester City brand, bridging real and virtual environments to sell a residential project that hadn\'t yet been built.',
    ],
  },
  {
    slug: 'dinner-diamonds-and-death',
    title: 'Dinner, Diamonds and Death',
    category: 'film',
    year: 'Winter 2026',
    role: 'Writer / Director',
    num: '08',
    image: 'images/dinner-diamonds-and-death.gif',
    description: [
      'Will wrote and co-directed this non-linear psychological thriller set in London\'s criminal underworld. He built the film\'s fractured structure, moving between timelines as the audience pieces together the puzzle alongside the characters.',
      'He shot across London, Gravesend, and Chadwell Heath, co-directing with Marc. Will conceived the film as a departure from the typical London skyline crime aesthetic, setting the story behind closed doors where the danger follows you inside.',
      'Currently in post-production with picture lock complete. Targeting Sundance London.',
    ],
    featured: true,
  },
  {
    slug: 'steaks',
    title: 'Steaks',
    category: 'film',
    year: 'Autumn 2025',
    role: 'Script Editor & Script Supervisor',
    num: '09',
    image: 'images/steaks.gif',
    description: [
      'Will served as script editor and script supervisor on this comedy short directed by Ste Hinde. He shaped the script through development and maintained continuity on set.',
      'As script editor, Will worked with Ste to tighten the comedy and sharpen the story structure. On set he tracked continuity across takes, keeping dialogue, props, and blocking consistent throughout the shoot.',
      'Ste Hinde\'s credits span branded content for Google, Apple, Pepsi, and Barclays, with comedy shorts screened at London Independent Film Festival and Barnes Film Festival. He won a National RTS Award for his documentary Confido.',
    ],
  },
  {
    slug: 'aortic',
    title: 'Aortic',
    category: 'film',
    year: 'Summer 2024',
    role: 'Writer / Co-Producer',
    num: '10',
    image: 'images/aortic.gif',
    description: [
      'Will wrote the script and co-produced this short film about a man who retreats to a hospital broom closet to leave a voice note to an old friend. A story about self-acceptance, the weight of time, and the courage to keep moving forwards.',
      'He developed the screenplay and brought it to director Niamh Marie Smith. Will co-produced the shoot in November 2023, with Macauley Keeper in the lead role as Jack.',
      'World premiere at Picturehouse Central. Macauley Keeper won the Jury Award for Best Performance at the Rob Knox International Film Festival 2025.',
    ],
    awards: [
      'Jury Award for Best Performance (Macauley Keeper) at the Rob Knox International Film Festival 2025',
    ],
  },
  {
    slug: 'break-a-leg',
    title: 'Break A Leg',
    category: 'tv',
    year: 'Summer 2026',
    role: 'Co-Creator / Writer',
    num: '11',
    image: 'images/break-a-leg.gif',
    description: [
      'Will co-created and writes this 6 x 30 minute dark comedy thriller with Moritz Matzmorr and Naala Vanslembrouck as part of the writing collective GGG (Gary Got Got). When a struggling acting student takes a job chopping up corpses, her talent dramatically improves.',
      'Will adapted the series from a German-language project into an English-language original. He wrote the full pilot script, outlined all six episodes, and built the pitch deck. The series follows Riley across Soho, Tower Hamlets, and Docklands as she rises through drama school while sinking deeper into her aunt\'s criminal operation.',
      'Presented at SERIENCAMP UK in January 2024. Currently in development.',
    ],
    featured: true,
  },
  {
    slug: 'brain-drain',
    title: 'Brain Drain',
    category: 'tv',
    year: 'Spring 2023',
    role: 'Creator / Writer',
    num: '12',
    image: 'images/brain-drain.webp',
    description: [
      'Will created and writes this 6 x 25 minute apocalyptic adventure comedy with Moritz Matzmorr and Naala Vanslembrouck as part of GGG (Gary Got Got). Three government interns must navigate incompetent politicians and brain-controlling fungi to save the undead, and possibly the world.',
      'Will built the series world from scratch: a decrepit Home Office branch on the Blackpool seaside where disaster moves faster than government ever could. Political satire, workplace absurdism, and surreal institutional logic described in development as "Terry Gilliam\'s Brazil vibes."',
      'Optioned by Fandango Productions.',
    ],
    featured: true,
  },
  {
    slug: 'the-clockwork-arms',
    title: 'The Clockwork Arms',
    category: 'theatre',
    year: 'Autumn 2019',
    role: 'Writer / Director',
    num: '13',
    image: 'images/clockwork-arms.webp',
    description: [
      'Will wrote and directed this play about a group of friends who stumble into a pub that travels through time. The Clockwork Arms pulls its inhabitants through five periods of London\'s history, forcing them to confront their past and decide what to do with their own time.',
      'Will used the time-travelling pub as a device for reckoning with the city\'s layered history, and with the characters\' own. He directed the cast through five distinct eras, each with its own London, its own language, and its own stakes.',
      'Sold out its run. Hana Jarrah as Maya, Joel Coussins as The Bartender. Produced by Laura Aiton and Adam Porrett.',
    ],
  },
  {
    slug: 'the-emoji-project',
    title: 'The Emoji Project',
    category: 'theatre',
    year: 'Summer 2021',
    role: 'Writer / Creative Producer',
    num: '14',
    image: 'images/the-emoji-project.webp',
    description: [
      'Will created and produced this anthology of new writing for Camden Fringe under Distracted Rat Productions. He conceived the format: an intergenerational collection of short plays, each written in response to a single emoji.',
      'He commissioned writers ranging in age from 11 to 75, curating pieces by sean wai keung, Tilney Brune, James Aldred, Jalice Corral, and Alastair Gibbons among others. Will managed the production across three nights at the Hen and Chickens Theatre in August 2021.',
      'Sold out its run. Reviewers described it as making "you giggle and think in the same breath." Directed by Susie MacDonald, Gabriel Harris, and Annys Whyatt.',
    ],
  },
  {
    slug: 'remote-radioplays',
    title: 'Remote Radioplays',
    category: 'digital',
    year: 'Spring 2020',
    role: 'Writer / Producer / Performer',
    num: '15',
    image: 'images/remote-radioplays.webp',
    links: [{ url: 'https://soundcloud.com/distracted-rat', label: 'Listen' }],
    description: [
      'Will produced this two-season anthology of original radio plays during lockdown under Distracted Rat Productions. He built seventeen episodes across two seasons entirely over video calls and file transfers.',
      'For Season 2, "The Thing with Feathers," Will brought together 11 international writers and coordinated a 35-person creative team spanning 16 time zones. He managed scripting, casting, recording, and post-production remotely across every episode.',
      'Will also wrote and performed in "The Fjordic Typhoon." Available on SoundCloud.',
    ],
  },
  {
    slug: 'vidi-guides',
    title: 'Vidi Guides',
    category: 'digital',
    year: '2020-2024',
    role: 'Head of Content & Production',
    num: '16',
    image: 'images/vidi-guides.webp',
    description: [
      'Will led content and production at Vidi Guides for four years, overseeing the creation of 100+ GPS-triggered audio walking tours across 17 cities and 7 countries.',
      'He managed the full production pipeline: scripting, voice casting, location research, and production management across dozens of simultaneous tours. Cities included London, Paris, Cambridge, Oxford, Edinburgh, New York, Singapore, Rome, and Venice.',
      'Clients included Walt Disney, Hilton Hotels, Lonely Planet, and Culture Trip.',
    ],
  },
];

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getThumb(image: string): string | null {
  if (!image.endsWith('.gif')) return null;
  return 'images/thumbs/' + image.replace('images/', '').replace('.gif', '.webp');
}
