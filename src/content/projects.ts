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
  video?: string;
  featured?: boolean;
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
    image: 'images/hamilton-in-the-midst-of-it.webp',
    description: [
      'Festive campaign for Hamilton Watches built around the chaos of Christmas morning. The film uses a top-down, locked-on-the-watch POV to follow three characters through the mayhem of the day: Dan in the kitchen battling biscuit dough and flour clouds, Maya navigating a wrapping disaster at the dining table, and Frank holding court in the living room while his granddaughter Ellie tears through the house around him. Three Hamilton watches (the Khaki Field Mecca, the American Classic Cushion, and the Khaki Field Murph) anchor each storyline, always in frame, always on the wrist.',
      'Shot over three days at a manor house in Hertfordshire. The production ran a Sony FX3 with Cooke SP3 primes as the main camera package, alongside a VMI Ember high-speed camera for slow-motion hero moments: flour erupting from a bowl, a catch in mid-air. Match-cut transitions stitch the three worlds together (whisk to volume peak, dough to wrapping paper, TV cut-to-black to icing grab), keeping the film moving at the frantic, playful pace of Christmas itself. One of the 15-second social cuts was shot natively on iPhone, mounted alongside the main camera for its rawer texture.',
      'A three-day shoot with a cast of four (including a child performer working under UK under-9 regulations), a team of extras for a chaotic hallway entrance, and a dedicated stills unit running in parallel. Delivered as five films: a 45-60 second hero cut, a 30-second cutdown, and three 15-second social cuts (one per watch), each output in four aspect ratios with full motion graphics, sound design, and colour grade.',
    ],
    featured: true,
  },
  {
    slug: 'hamilton-into-the-wild',
    title: 'Hamilton Watches "Into the Wild"',
    client: 'Hamilton Watches',
    category: 'branded',
    year: 'Spring 2026',
    role: 'Producer',
    num: '02',
    image: 'images/hamilton-into-the-wild.webp',
    video: 'https://www.youtube.com/watch?v=Rl0pLkaWXs4',
    description: [
      'Three-part branded content series for the Hamilton Khaki Field. The films follow the watch out of the city and into the Welsh countryside, leaning into the Khaki Field\'s military heritage and its identity as an outdoor watch built for rough terrain.',
      'Shot on location in Wales over two days with director Ron Mulvey and DOP Angus Steele. The series tracks the watch through landscapes that echo the Khaki Field\'s origins as a tool for soldiers and explorers, moving from urban environments into open country. Published as a three-part series across Hamilton\'s Instagram and YouTube channels.',
    ],
    featured: true,
  },
  {
    slug: 'hamilton-power-up',
    title: 'Hamilton Watches "Power Up"',
    client: 'Hamilton Watches',
    category: 'branded',
    year: 'Autumn 2025',
    role: 'Producer',
    num: '03',
    image: 'images/hamilton-power-up.webp',
    video: 'https://www.youtube.com/watch?v=aKi2dFwtTxo',
    description: [
      'Launch film for the Hamilton Khaki Field Power Reserve, the first model in the Khaki Field line to feature a power reserve indicator on the dial. The film introduced the top-down, locked-on-the-wrist visual language that became the creative foundation for the later "In The Midst Of It" festive campaign.',
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
    image: 'images/fora-at-five.webp',
    video: 'https://www.youtube.com/watch?v=DxAVfx8Igeo',
    description: [
      'Hero brand film marking Fora Travel\'s fifth anniversary. The film tells the story of Alexia, an Italian-American woman who brings her elderly parents Rosa and Marco back to Palermo for their 50th wedding anniversary. Their Fora travel advisor Tess curates the trip from her desk in London, pulling strings to arrange a private vow renewal in the church where Rosa and Marco were married half a century earlier. The story builds from the advisor\'s first video call with Alexia, through a week of discovery across Sicily, to the final scene: Marco waiting at the altar in his wedding suit as Alexia produces a key to a locked church door.',
      'Production spanned two countries. The London shoot (7 May) captured the advisor sequences with Sakira Vel as Tess. The Sicily shoot ran three days across Palermo (12-14 May) with a local crew coordinated through Movie Sicily. Locations included Villa Igiea (pool and lobby), the Mancuso puppet theatre, Teatro Massimo, Capo Market (featuring a split-screen VFX sequence where Marco meets his double across the tomatoes), a golden-hour dance sequence at Piazza Bellini, a Fiat 500 drive up Monte Pellegrino, and the hero scene at San Saverio church: Alexia produces a key, the door opens, and there is her father at the altar. Forty-three shots across the three Sicily days.',
      'Directed by Sam McMullen. Shot by James Parsons. Edited by Ravi Chauhan with post-production by Najeeb Khalid. Delivered August 2026.',
    ],
    featured: true,
  },
  {
    slug: 'chelsea-damac',
    title: 'Chelsea x DAMAC',
    client: 'Chelsea FC / DAMAC Properties',
    category: 'branded',
    year: 'Spring 2026',
    role: 'Producer',
    num: '05',
    image: 'images/chelsea-damac.webp',
    video: 'https://www.youtube.com/watch?v=5o_azlXU-xc',
    description: [
      'Partnership campaign for Chelsea Residences by DAMAC Properties, a Chelsea FC-branded residential development in Dubai. The second shoot in a two-part production, delivering three ads: "Matchday in the Sky," a concept built around a floating football pitch suspended above the clouds by hot air balloon, where players pass the ball before it rolls off the edge and they skydive toward the residences below; and two "Metaverse" comedy spots, green-screen films in which players wearing VR headsets experience the development\'s amenities from their locker room.',
      'Shot at Brooklands Studio over two days (pre-light and build on Day 1, main shoot on Day 2). The production ran two units simultaneously: Unit A (director Elliot Simpson, DOP James Parsons) handling the platform build for the Matchday concept with football-talented body doubles, and Unit B (director Sam McMullen, DOP Akilan Shiyyali) shooting the green-screen Metaverse films. Chelsea FC players Robert Sanchez, Cole Palmer, and Jamie Gittens each had 15-minute windows on shoot day, with all three appearing together in each Metaverse spot. VFX by FocusFrame.',
    ],
  },
  {
    slug: 'booking-traveller-review-awards',
    title: 'Traveller Review Awards',
    client: 'Booking.com',
    category: 'branded',
    year: 'Autumn 2025',
    role: 'Producer',
    num: '06',
    image: 'images/booking-traveller-review-awards.webp',
    video: 'https://www.youtube.com/watch?v=A6IfbTf06PU',
    description: [
      'Hero film for Booking.com\'s annual Traveller Review Awards, a global campaign celebrating the accommodation partners recognised by millions of traveller reviews across the platform. The campaign, titled "Where Hospitality Begins," positions the partners themselves as the subject of the film: the people behind the properties, the hospitality that earns the reviews, the work that keeps guests coming back. Multi-day shoot with full post-production.',
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
    title: 'MCFC Ohana Launch',
    client: 'Ohana Development / Manchester City FC',
    category: 'branded',
    year: 'Spring 2026',
    role: 'Producer',
    num: '07',
    image: 'images/mcfc-ohana.webp',
    video: 'https://www.youtube.com/watch?v=WKEuRSS-1Mw',
    description: [
      'Launch film for Ohana Development\'s Manchester City-branded residential project in Abu Dhabi. The film features Manchester City players and blends live-action footage with 3D-rendered architectural environments and virtual production sequences, positioning the development within the global Manchester City brand.',
      'The production combined three distinct shoot phases: location work at Manchester City\'s training facilities in Manchester, live-action sequences on the ground in Abu Dhabi, and a virtual production day on an LED volume stage. 3D animated renders of the development were supplied by the client and composited into the final film alongside the live-action footage, building a seamless bridge between real and virtual environments. The result is a film that moves between the energy of the football club and the ambition of the development, connecting the two brands through the players who link them.',
    ],
  },
  {
    slug: 'dinner-diamonds-and-death',
    title: 'Dinner, Diamonds and Death',
    category: 'film',
    year: 'Winter 2026',
    role: 'Writer / Director',
    num: '08',
    description: [
      'Non-linear psychological thriller set in London\'s criminal underworld. Alexis receives a mysterious envelope that pulls her into a web of deceit involving Gary, a volatile criminal; Yvonne, his conflicted accomplice; and Hans, the criminal mastermind who also happens to be Alexis\'s mentor. The film\'s structure is intentionally fractured: the audience pieces together the puzzle alongside the characters, moving between timelines as alliances shift and betrayals surface.',
      'Shot across London, Gravesend, and Chadwell Heath. Co-directed with Marc. The film was conceived as a deliberate departure from the typical London skyline crime aesthetic. The story unfolds behind closed doors, in characters\' homes, where the danger follows you inside. Cinematic touchstones include the taut ensemble work of Sexy Beast and the kinetic energy of Lock, Stock and Two Smoking Barrels, filtered through something more intimate and claustrophobic.',
      'Currently in post-production, picture locked. Targeting Sundance London.',
    ],
    featured: true,
  },
  {
    slug: 'aortic',
    title: 'Aortic',
    category: 'film',
    year: 'Summer 2025',
    role: 'Writer / Co-Producer',
    num: '09',
    image: 'images/aortic.webp',
    description: [
      'Short film. Nestled inside the broom closet of a quiet hospital, Jack musters the courage to leave a heartfelt voice note to an old friend. The film blurs the lines between past and present, moving between the comforting glow of nostalgia and the unyielding light of the here and now. A story about self-acceptance, the weight of time, and the courage to keep moving forwards.',
      'Co-produced with Niamh Marie Smith. Shot in November 2023. Macauley Keeper plays Jack in the lead role.',
    ],
    awards: [
      'Jury Award for Best Performance (Macauley Keeper) at the Rob Knox London Film Festival 2025',
      'Currently on the festival circuit',
    ],
  },
  {
    slug: 'break-a-leg',
    title: 'Break A Leg',
    category: 'tv',
    year: 'Summer 2026',
    role: 'Co-Creator / Writer',
    num: '10',
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
    num: '11',
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
    num: '12',
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
    num: '13',
    image: 'images/the-emoji-project.webp',
    description: [
      'Sold-out anthology of new writing at Camden Fringe, performed at the Hen and Chickens Theatre across three nights in August 2021. Produced by Distracted Rat Productions.',
      'An intergenerational collection of short plays and scenes, each written in response to a single emoji. Writers ranged in age from 11 to 75. The show covered the absurd, the political, and everything between. Reviewers described it as making "you giggle and think in the same breath."',
      'Directed by Susie MacDonald, Gabriel Harris, and Annys Whyatt.',
    ],
  },
  {
    slug: 'remote-radioplays',
    title: 'Remote Radioplays',
    category: 'digital',
    year: 'Spring 2020',
    role: 'Writer / Producer / Performer',
    num: '14',
    description: [
      'Two-season anthology of original radio plays produced remotely during lockdown under Distracted Rat Productions. Seventeen episodes across two seasons, built entirely over video calls and file transfers.',
      'Season 2, "The Thing with Feathers," brought together 11 international writers and a 35-person creative team spanning 16 time zones. The season explored the utility of hope and how we reconcile with the past while moving into the future.',
      'Will wrote and performed in "The Fjordic Typhoon." Available on Spotify.',
    ],
  },
  {
    slug: 'vidi-guides',
    title: 'Vidi Guides',
    category: 'digital',
    year: '2020-2024',
    role: 'Head of Content & Production',
    num: '15',
    image: 'images/vidi-guides.webp',
    description: [
      'Four years leading content and production at Vidi Guides, a platform producing podcast-style self-guided audio walking tours triggered by GPS and available offline. Oversaw the creation of 100+ immersive travel podcasts and location-based audio tours across London (Brixton, Soho, Kew Gardens, Covent Garden, Westminster), Paris, Cambridge, Oxford, Edinburgh, Stonehenge, Stratford-upon-Avon, and Vimy Ridge.',
      'Clients included Walt Disney, Hilton Hotels, Lonely Planet, and Culture Trip. The role spanned scripting, voice casting, location research, and production management across dozens of simultaneous tours in multiple cities. A flagship production was the immersive audio guide to Walt Disney World\'s Magic Kingdom, a GPS-triggered tour produced directly for Disney\'s parks division with location-aware narration that responds to where you are rather than what you tap. Vidi Guides was founded by Marius Nigond in 2019 and has since evolved into iWander, an AI-powered travel companion named a PhocusWire Hot 25 Travel Startup for 2025.',
    ],
  },
];

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
