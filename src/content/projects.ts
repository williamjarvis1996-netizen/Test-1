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
      'Festive campaign for Hamilton Watches built around the chaos of Christmas morning. The film uses a top-down, locked-on-the-watch POV to follow three characters through the mayhem of the day: Dan in the kitchen battling biscuit dough and flour clouds, Maya navigating a wrapping disaster at the dining table, and Frank holding court in the living room while his granddaughter Ellie tears through the house around him. Three Hamilton watches anchor each storyline, always in frame, always on the wrist.',
      'Shot over three days at a manor house in Hertfordshire with a high-speed camera capturing slow-motion hero moments. Match-cut transitions stitch the three worlds together, keeping the film moving at the frantic, playful pace of Christmas itself. Delivered as five films: a hero cut, a 30-second cutdown, and three 15-second social cuts (one per watch), each output in four aspect ratios with full motion graphics, sound design, and colour grade.',
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
      'Three-part branded content series for the Hamilton Khaki Field. The films follow the watch out of the city and into the Welsh countryside, leaning into the Khaki Field\'s military heritage and its identity as an outdoor watch built for rough terrain.',
      'Shot on location in Wales over two days with director Ron Mulvey and DOP Angus Steele. The series tracks the watch through landscapes that echo the Khaki Field\'s origins as a tool for soldiers and explorers, moving from urban environments into open country.',
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
      'Launch film for the Hamilton Khaki Field Titanium Auto, the first Khaki Field model to feature a power reserve indicator on the dial. Built around the H-23 caliber with an 80-hour power reserve displayed by the fuel-gauge complication at 9 o\'clock. The 40mm titanium case and the energy metaphor drove the film\'s concept: a top-down, locked-on-the-wrist visual language that became the creative foundation for the later "In The Midst Of It" festive campaign.',
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
      'Hero brand film marking Fora Travel\'s fifth anniversary. The film tells the story of Alexia, an Italian-American woman who brings her elderly parents Rosa and Marco back to Palermo for their 50th wedding anniversary. Their Fora travel advisor Tess curates the trip from her desk in London, pulling strings to arrange a private vow renewal in the church where Rosa and Marco were married half a century earlier. The story builds from the advisor\'s first video call with Alexia, through a week of discovery across Sicily, to the final scene: Marco waiting at the altar in his wedding suit as Alexia produces a key to a locked church door.',
      'Production spanned two countries: London for the advisor sequences, then three days across Palermo with a local crew. Key locations included Villa Igiea, Teatro Massimo, Capo Market (featuring a split-screen VFX sequence), a golden-hour dance at Piazza Bellini, and the hero scene at San Saverio church.',
      'Directed by Sam McMullen. Shot by James Parsons. Edited by Ravi Chauhan.',
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
      'Partnership campaign for Chelsea Residences by DAMAC Properties, a Chelsea FC-branded residential development at Dubai Maritime City featuring over 1,400 units and a rooftop football pitch. Three ads: "Matchday in the Sky," a concept built around a floating football pitch suspended above the clouds by hot air balloon, where players pass the ball before it rolls off the edge and they skydive toward the residences below; and two "Metaverse" comedy spots in which players wearing VR headsets experience the development\'s amenities from their locker room.',
      'Two-day studio shoot running two units simultaneously: one for the Matchday platform build with football-talented body doubles, the other for the green-screen Metaverse films. Chelsea FC players each had 15-minute windows on shoot day. VFX by FocusFrame.',
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
      'Integrated campaign for Booking.com\'s 14th annual Traveller Review Awards, celebrating 1.81 million partners across 221 countries. The hero film, "Where Hospitality Begins," moved the campaign toward human storytelling, exploring what motivates exceptional hospitality: local roots, life experience, and everyday moments. Featured real award-winning partners, including Dave, whose lifelong connection to Joshua Tree shaped hosting into a chance for guests to reconnect with a place through his eyes.',
      'The campaign delivered a hero film, social-native content amplifying partner stories across platforms, a stills campaign, and email and owned-channel creative driving partners to the awards hub. The channel strategy evolved from the previous year, with social moving to platform-native celebratory content and locally relevant partner stories unlocking growth in key markets.',
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
      'Launch film for Manchester City Yas Residences by Ohana, a $4.1 billion waterfront development on Yas Canal in Abu Dhabi featuring over 2,000 residential units and a Manchester City Football Academy at its core. The film features Manchester City players and blends live-action footage with 3D-rendered architectural environments and virtual production sequences, positioning the development within the global Manchester City brand.',
      'The production combined three distinct phases: location work at Manchester City\'s training facilities in Manchester, live-action sequences in Abu Dhabi, and a virtual production day on an LED volume stage. 3D renders of the development were composited into the final film, building a seamless bridge between real and virtual environments.',
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
      'Non-linear psychological thriller set in London\'s criminal underworld. Alexis receives a mysterious envelope that pulls her into a web of deceit involving Gary, a volatile criminal; Yvonne, his conflicted accomplice; and Hans, the criminal mastermind who also happens to be Alexis\'s mentor. The film\'s structure is intentionally fractured: the audience pieces together the puzzle alongside the characters, moving between timelines as alliances shift and betrayals surface.',
      'Shot across London, Gravesend, and Chadwell Heath. Co-directed with Marc. The film was conceived as a deliberate departure from the typical London skyline crime aesthetic. The story unfolds behind closed doors, in characters\' homes, where the danger follows you inside. Cinematic touchstones include the taut ensemble work of Sexy Beast and the kinetic energy of Lock, Stock and Two Smoking Barrels, filtered through something more intimate and claustrophobic.',
      'Currently in post-production, picture locked. Targeting Sundance London.',
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
      'Comedy short film directed by Ste Hinde. Will Jarvis served as script editor and script supervisor.',
      'Ste Hinde is a London-based director and writer whose work celebrates the awkward and humorous within the scope of human behaviour, grounded in a fascination with what he calls "Bleak Britain." His credits span commercials, documentaries, and branded content for Google, Apple, Pepsi, and Barclays, alongside original comedy shorts screened at the London Independent Film Festival and Barnes Film Festival. He won a National RTS Award for his documentary Confido.',
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
      'Short film. Nestled inside the broom closet of a quiet hospital, Jack musters the courage to leave a heartfelt voice note to an old friend. The film blurs the lines between past and present, moving between the comforting glow of nostalgia and the unyielding light of the here and now. A story about self-acceptance, the weight of time, and the courage to keep moving forwards.',
      'Directed by Niamh Marie Smith. Shot in November 2023. Macauley Keeper plays Jack in the lead role. World premiere at Picturehouse Central.',
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
      'Dark comedy thriller. 6 x 30 minutes. Co-created with Moritz Matzmorr and Naala Vanslembrouck as part of the writing collective GGG (Gary Got Got), originally adapted from a German-language project.',
      'When a cheerful but struggling acting student accepts a job chopping up human corpses, her talent as an actor dramatically improves. Now in the spotlight, she must hide this dark secret from friends, foes, and the public, all while struggling with the morality of her actions.',
      'The series follows Riley across Soho, Tower Hamlets, and Docklands, tracking her double life as she rises through drama school while sinking deeper into her aunt Magda\'s criminal operation. A Scottish Highlands backstory catches up with the present. Hard-edged thriller with tongue-in-cheek energy; ambition, code-switching, and the duality of self run underneath the tension, dark humour, and action.',
      'Full pilot script, episode outlines for all six episodes, and pitch deck complete. Presented at SERIENCAMP UK in January 2024. In development with Netflix, ITV, and Hager Moss.',
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
      'Apocalyptic adventure comedy. 6 x 25 minutes. Created as part of the writing collective GGG (Gary Got Got) with Moritz Matzmorr and Naala Vanslembrouck.',
      'On the brink of a zombie apocalypse, an unusual trio of government interns must manoeuvre incompetent politicians, bureaucratic absurdities, and brain-controlling fungi to save the undead, and possibly the world. Set in Blackpool, Lancashire, in a decrepit Home Office branch on the seaside, where disaster moves faster than government ever could.',
      'Dry and wet humour, political satire, Gen Z and Millennial workplace absurdism. The soul of the civil service meets the end of the world. Described in development as "Terry Gilliam\'s Brazil vibes" for its packed, evocative detail and surreal institutional logic.',
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
      'Sold-out play. On her 25th birthday, Maya and her friends stumble into a pub they have never seen before, only to discover it travels through time. The Clockwork Arms pulls its inhabitants through five periods of London\'s history as they confront their dark past and uncertain future, forcing them to decide what to do with their own time.',
      'A time-travelling pub as a device for reckoning with the city\'s layered past, and with the characters\' own. The play moves between eras, each with its own London: its own language, its own violence, its own tenderness.',
      'Hana Jarrah as Maya. Joel Coussins as The Bartender. Produced by Laura Aiton and Adam Porrett.',
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
      'Sold-out anthology of new writing at Camden Fringe, performed at the Hen and Chickens Theatre across three nights in August 2021. Produced by Distracted Rat Productions.',
      'An intergenerational collection of short plays and scenes, each written in response to a single emoji. Writers ranged in age from 11 to 75, with pieces by sean wai keung, Tilney Brune, James Aldred, Jalice Corral, and Alastair Gibbons among others. The show covered the absurd, the political, and everything between. Reviewers described it as making "you giggle and think in the same breath."',
      'Directed by Susie MacDonald, Gabriel Harris, and Annys Whyatt.',
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
      'Two-season anthology of original radio plays produced remotely during lockdown under Distracted Rat Productions. Seventeen episodes across two seasons, built entirely over video calls and file transfers.',
      'Season 2, "The Thing with Feathers," brought together 11 international writers and a 35-person creative team spanning 16 time zones. Episodes included "End of the World, rsvp by the 20th" by Isa Martinez, "Four Walls/One Night" by Cris Eli Blak, "These Things Are Sent to Try Us" by Emma Bentley, "3, 2, 1..." by Emily Steck and Misha Graham-Patel, "Any Given Time" by Gemma Murray, "Frizzy Izzy" by Jalice Corral, "Goosed" by Jacqueline Graham, and "Living Well Is The Best Revenge" by Max Chase. The season explored the utility of hope and how we reconcile with the past while moving into the future.',
      'Will wrote and performed in "The Fjordic Typhoon." Available on SoundCloud.',
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
      'Four years leading content and production at Vidi Guides, a platform producing podcast-style self-guided audio walking tours triggered by GPS and available offline. Oversaw the creation of 100+ immersive travel podcasts and location-based audio tours spanning 50 tours across 17 cities and 7 countries, including London (Brixton, Soho, Kew Gardens, Covent Garden, Westminster), Paris, Cambridge, Oxford, Edinburgh, Stonehenge, Stratford-upon-Avon, Vimy Ridge, New York, Singapore, Bath, Rome, and Venice.',
      'Clients included Walt Disney, Hilton Hotels, Lonely Planet, and Culture Trip. The role spanned scripting, voice casting, location research, and production management across dozens of simultaneous tours in multiple cities.',
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
