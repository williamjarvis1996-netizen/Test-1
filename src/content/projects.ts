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
  details?: { key: string; value: string }[];
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
    links: [{ url: 'https://www.instagram.com/hamiltonwatch/?hl=en', label: 'Releasing Winter 2026' }],
    description: [
      'Festive campaign for Hamilton Watches built around the chaos of Christmas Eve. Three overlapping storylines, each anchored by a different watch, stitched together with match-cut transitions and shot on high-speed cameras for slow-motion hero moments.',
      'Will produced from concept through delivery, running a three-day shoot at a manor house in Hertfordshire with two camera units plus a social unit operating simultaneously. He managed talent, locations, and the client relationship across multiple approval rounds.',
      'Delivered five films with full motion graphics, sound design, and colour grade. The top-down, locked-on-the-wrist visual language established here became the foundation for Hamilton\'s branded content direction.',
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
    links: [
      { url: 'https://www.youtube.com/watch?v=Rl0pLkaWXs4', label: 'Watch Episode 1' },
      { url: 'https://www.youtube.com/watch?v=EWpCx7rLcSk', label: 'Watch Episode 2' },
      { url: 'https://www.youtube.com/watch?v=dhcNE25wCg4', label: 'Watch Episode 3' },
    ],
    details: [
      { key: 'Watches', value: 'Khaki Field Bronze, Khaki Field King, Khaki Field Power Reserve' },
    ],
    description: [
      'Three-part branded series for three different Hamilton Watches, leaning into the company\'s adventurous heritage and their identity as an outdoor tool built for rough terrain. Shot across rural Wales with a visual language rooted in natural light and rugged countryside.',
      'Will produced the series alongside director Ron Mulvey, managing a three-day location shoot across remote Welsh countryside. He worked closely with DOP Angus Steele to shape a visual approach that matched the Khaki Field\'s character.',
      'Delivered as a three-film series to Hamilton with full post-production managed through to sign-off.',
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
    details: [
      { key: 'Watch', value: 'Power Reserve Mechanical 40mm' },
    ],
    description: [
      'Launch film for the Power Reserve Mechanical 40mm, built around the watch\'s power reserve indicator shown directly on the dial. Introduced the top-down, locked-on-the-wrist visual language that became a signature of Hamilton\'s branded content.',
      'Will managed post-production, overseeing the edit, colour grade, sound design, and motion graphics pipeline. He worked with the director to build the film\'s energy metaphor around the power reserve concept. Worked with shooting producer Will Newton alongside the director Ron Mulvey.',
      'Winner at the Cannes Corporate Media & TV Awards 2026. Submitted for the Lens Awards under Best Creative Execution. The visual language established here carried directly into the later festive campaign.',
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
      'Hero brand film marking Fora Travel\'s fifth anniversary, telling the story of a family returning to Palermo for a 50th wedding anniversary curated by their Fora travel advisor. Shot across two countries at locations including Villa Igiea, Teatro Massimo, Capo Market, Piazza Bellini, and San Saverio church.',
      'Will produced the film end to end, coordinating London studio shoots for the advisor sequences and three days of location work across Palermo with a local crew. He assembled the creative team: director Sam McMullen, DOP James Parsons, and editor Ravi Chauhan.',
      'Delivered to Fora as their hero brand film, with full post-production including a split-screen VFX sequence managed through to final delivery. Will has since produced further work for Fora, including their UK introductory film for new Fora advisors entering the British market.',
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
      'Three ads for Chelsea Residences by DAMAC Properties: the hero spot "Matchday in the Sky" and two "Metaverse" comedy films featuring Chelsea FC players. A campaign built around a floating pitch concept, skydiving sequences, and VR locker room comedy.',
      'Will produced a two-day studio shoot with two units operating simultaneously. One built the Matchday platform sequences with football-talented body doubles while the other shot green-screen for the Metaverse films. He managed tight talent windows, with Chelsea FC players available for just 15 minutes each.',
      'VFX coordinated with FocusFrame. Final campaign delivered to DAMAC across multiple formats.',
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
      'Booking.com\'s 14th annual Traveller Review Awards campaign, celebrating 1.81 million partners across 221 countries. The hero film, "Where Hospitality Begins," moved the campaign toward human storytelling with real award-winning partners rather than professional talent.',
      'Will co-produced and served as 1st AD, managing the shoot schedule and floor on set across multiple locations with real contributors. He helped shape the campaign\'s channel strategy and deliverables.',
      'Delivered a hero film, social-native content, a stills campaign, and owned-channel creative. Winner at the Cannes Corporate Media & TV Awards 2026 and four MUSE Awards including three Platinum. Submitted for the Lens Awards 2026 under Hospitality.',
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
      'Launch film for Manchester City Yas Residences by Ohana, a $4.1 billion waterfront development in Abu Dhabi. Blends live-action footage of Manchester City players with 3D-rendered architectural environments to sell a residential project that hadn\'t yet been built.',
      'Will produced across three phases: location work at Manchester City\'s training facilities, live-action sequences in Abu Dhabi, and a virtual production day on an LED volume stage. He coordinated player availability, crew across two countries, and the compositing of 3D renders into the final film.',
      'The finished film positioned the development within the global Manchester City brand, bridging real and virtual environments for the launch campaign.',
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
      'Non-linear psychological thriller set in London\'s criminal underworld. A fractured structure moves between timelines as the audience pieces together the puzzle alongside the characters, set behind closed doors where the danger follows you inside.',
      'Will wrote the script and co-directed with Marc, shooting across London, Gravesend, and Chadwell Heath. He conceived the film as a departure from the typical London skyline crime aesthetic, grounding the story in interiors rather than cityscapes.',
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
      'Comedy short directed by Ste Hinde, whose credits span branded content for Google, Apple, Pepsi, and Barclays, with comedy shorts screened at London Independent Film Festival and Barnes Film Festival.',
      'Will served as script editor and script supervisor. He worked with Ste to tighten the comedy and sharpen the story structure, then tracked continuity on set across dialogue, props, and blocking.',
      'Directed by Ste Hinde, winner of a National RTS Award for his documentary Confido.',
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
      'Short film about a man who retreats to a hospital broom closet to leave a voice note to an old friend. A story about self-acceptance, the weight of time, and the courage to keep moving forwards.',
      'Will wrote the screenplay and co-produced, bringing it to director Niamh Marie Smith. Shot in November 2023 with Macauley Keeper in the lead role as Jack.',
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
      '6 x 30 minute dark comedy thriller. When a struggling acting student takes a job chopping up corpses, her talent dramatically improves. The series follows Riley across Soho, Tower Hamlets, and Docklands as she rises through drama school while sinking deeper into her aunt\'s criminal operation.',
      'Will co-created the series with Moritz Matzmorr and Naala Vanslembrouck as part of the writing collective GGG (Gary Got Got). He adapted it from a German-language project into an English-language original, wrote the full pilot script, outlined all six episodes, and built the pitch deck.',
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
      '6 x 25 minute apocalyptic adventure comedy. Three government interns must navigate incompetent politicians and brain-controlling fungi to save the undead, and possibly the world. Set in a decrepit Home Office branch on the Blackpool seaside where disaster moves faster than government ever could.',
      'Will created the series with Moritz Matzmorr and Naala Vanslembrouck as part of GGG (Gary Got Got). He built the world from scratch, blending political satire, workplace absurdism, and surreal institutional logic described in development as "Terry Gilliam\'s Brazil vibes."',
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
      'A group of friends stumble into a pub that travels through time. The Clockwork Arms pulls its inhabitants through five periods of London\'s history, forcing them to confront their past and decide what to do with their own time.',
      'Will wrote and directed, guiding the cast through five distinct eras, each with its own London, its own language, and its own stakes. He used the time-travelling pub as a device for reckoning with the city\'s layered history, and with the characters\' own.',
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
      'Anthology of new writing for Camden Fringe under Distracted Rat Productions. An intergenerational collection of short plays, each written in response to a single emoji, with contributors ranging in age from 11 to 75.',
      'Will created the format and produced the run, commissioning writers including sean wai keung, Tilney Brune, James Aldred, Jalice Corral, and Alastair Gibbons. He managed production across three nights at the Hen and Chickens Theatre in August 2021.',
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
      'Two-season anthology of original radio plays created during lockdown under Distracted Rat Productions. Seventeen episodes built entirely over video calls and file transfers, with Season 2 spanning a 35-person creative team across 16 time zones.',
      'Will produced both seasons, managing scripting, casting, recording, and post-production remotely. For Season 2, "The Thing with Feathers," he brought together 11 international writers and coordinated the full creative team. He also wrote and performed in "The Fjordic Typhoon."',
      'Available on SoundCloud.',
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
      '100+ GPS-triggered audio walking tours across 17 cities and 7 countries, produced over four years at Vidi Guides. Cities included London, Paris, Cambridge, Oxford, Edinburgh, New York, Singapore, Rome, and Venice.',
      'Will led content and production, managing the full pipeline from scripting and voice casting to location research and production management across dozens of simultaneous tours.',
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
