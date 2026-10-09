export interface ProjectLink {
  url: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: 'branded' | 'film' | 'tv' | 'other';
  year: string;
  role: string;
  description: string[];
  awards?: string[];
  details?: { key: string; value: string }[];
  keywords?: string[];
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
  other: 'Other Work',
} as const;

export const projects: Project[] = [
  {
    slug: 'hamilton-in-the-midst-of-it',
    title: 'Hamilton Watches Festive Campaign',
    client: 'Hamilton Watches',
    category: 'branded',
    year: 'Autumn 2026',
    role: 'Lead Producer / Writer',
    num: '01',
    wide: true,
    image: 'images/hamilton-in-the-midst-of-it.gif',
    links: [{ url: 'https://www.instagram.com/hamiltonwatch/?hl=en', label: 'Releasing Winter 2026' }],
    details: [
      { key: 'Director', value: 'Bailey Smith' },
      { key: 'DOP', value: 'James Parsons' },
      { key: 'Location', value: 'Hertfordshire' },
    ],
    keywords: ['Hamilton Watches', 'festive campaign', 'Christmas', 'branded content', 'watch film', 'slow motion', 'match-cut transitions', 'Hertfordshire', 'high-speed cameras', 'luxury watches', 'Bailey Smith', 'James Parsons', 'RD Content', 'Will Jarvis'],
    description: [
      'Festive campaign for Hamilton Watches built around the chaos of Christmas Eve. Three overlapping storylines, each anchored by a different watch, stitched together with match-cut transitions and shot on high-speed cameras for slow-motion hero moments.',
      'Producing at RD Content, Will led the project from concept through delivery, collaborating with director Bailey Smith and DOP James Parsons. He ran a three-day shoot at a manor house in Hertfordshire with two camera units plus a social unit operating simultaneously, managing talent, locations, and the client relationship across multiple approval rounds.',
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
    role: 'Lead Producer',
    num: '02',
    image: 'images/hamilton-into-the-wild.gif',
    links: [
      { url: 'https://www.youtube.com/watch?v=Rl0pLkaWXs4', label: 'Watch Episode 1' },
      { url: 'https://www.youtube.com/watch?v=EWpCx7rLcSk', label: 'Watch Episode 2' },
      { url: 'https://www.youtube.com/watch?v=dhcNE25wCg4', label: 'Watch Episode 3' },
    ],
    details: [
      { key: 'Watches', value: 'Khaki Field Bronze, Khaki Field King, Khaki Field Power Reserve' },
      { key: 'Director', value: 'Ron Mulvey' },
      { key: 'DOP', value: 'Angus Steele' },
    ],
    keywords: ['Hamilton Watches', 'Khaki Field Bronze', 'Khaki Field King', 'Khaki Field Power Reserve', 'Into the Wild', 'Ron Mulvey', 'Angus Steele', 'Wales', 'branded content', 'watch film', 'outdoor', 'adventure', 'RD Content', 'Will Jarvis'],
    description: [
      'Three-part branded series for three different Hamilton Watches, leaning into the company\'s adventurous heritage and their identity as an outdoor tool built for rough terrain. Shot across rural Wales with a visual language rooted in natural light and rugged countryside.',
      'Producing at RD Content, Will led the series alongside director Ron Mulvey, managing a three-day location shoot across remote Welsh countryside. He worked closely with DOP Angus Steele to shape a visual approach that matched the Khaki Field\'s character.',
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
      { key: 'Director', value: 'Ron Mulvey' },
      { key: 'Shooting Producer', value: 'Will Newton' },
    ],
    keywords: ['Hamilton Watches', 'Power Reserve Mechanical 40mm', 'Khaki Field Titanium', 'Ron Mulvey', 'Will Newton', 'Cannes Corporate Media Awards', 'Lens Awards', 'branded content', 'watch film', 'power reserve', 'RD Content', 'Will Jarvis'],
    description: [
      'Launch film for the Hamilton Power Reserve Mechanical 40mm, built around the watch\'s power reserve indicator shown directly on the dial. Introduced the top-down, locked-on-the-wrist visual language that became a signature of Hamilton Watches\' branded content.',
      'Working as Creative Producer at RD Content, Will managed post-production, overseeing the edit, colour grade, sound design, and motion graphics pipeline. He worked with shooting producer Will Newton and director Ron Mulvey to build the film\'s energy metaphor around the power reserve concept.',
      'Winner at the Cannes Corporate Media & TV Awards 2026. Submitted for the Lens Awards under Best Creative Execution. The visual language established here carried directly into the later festive campaign.',
    ],
    awards: [
      'Winner at the Cannes Corporate Media & TV Awards 2026',
      'Submitted for the Lens Awards 2026 under Best Creative Execution',
    ],
    featured: true,
  },
  {
    slug: 'booking-traveller-review-awards',
    title: 'Booking.com',
    client: 'Booking.com',
    category: 'branded',
    year: 'Autumn 2025',
    role: 'Co-Producer / Creative Lead',
    num: '04',
    wide: true,
    image: 'images/booking-traveller-review-awards.gif',
    links: [
      { url: 'https://www.youtube.com/watch?v=A6IfbTf06PU', label: 'Watch Hero Film' },
      { url: 'https://www.youtube.com/watch?v=RVkZrQ3n7Jw', label: 'Watch Hoxton Spotlight' },
      { url: 'https://awards.booking.com/en-gb/accommodations', label: 'Read More Here' },
    ],
    details: [
      { key: 'Campaign', value: 'Traveller Review Awards 2026 (14th Annual)' },
      { key: 'Hero Film', value: 'Where Hospitality Begins' },
      { key: 'Partners Recognised', value: '1.81 million across 221 countries' },
      { key: 'Production Company', value: 'RD Content' },
    ],
    keywords: ['Booking.com', 'Traveller Review Awards', 'TRA 2026', 'Where Hospitality Begins', 'Hoxton', 'hospitality', 'travel', 'branded content', 'real partners', 'hero film', 'spotlight film', 'social content', 'MUSE Awards', 'Cannes Corporate Media & TV Awards', 'Lens Awards', '1st AD', 'co-producer', 'RD Content', 'Will Jarvis'],
    description: [
      'Booking.com\'s 14th annual Traveller Review Awards campaign, celebrating 1.81 million partners across 221 countries. The hero film, "Where Hospitality Begins," moved the campaign toward human storytelling with real award-winning partners rather than professional talent.',
      'Working at RD Content, Will co-produced and served as 1st AD, managing the shoot schedule and floor on set across multiple locations with real contributors. He helped shape the campaign\'s channel strategy and deliverables.',
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
    slug: 'chelsea-damac',
    title: 'Chelsea FC',
    client: 'Chelsea FC / DAMAC Properties',
    category: 'branded',
    year: 'Spring 2026',
    role: 'Lead Producer',
    num: '05',
    image: 'images/chelsea-damac.gif',
    links: [
      { url: 'https://www.youtube.com/watch?v=5o_azlXU-xc', label: 'Watch Blue Wave' },
      { url: 'https://www.youtube.com/watch?v=SgZhpGc-M1Y', label: 'Watch Cole Palmer in VR' },
      { url: 'https://www.youtube.com/watch?v=DmxP4WeiiHs', label: 'Watch Skydiving' },
    ],
    details: [
      { key: 'Players', value: 'Cole Palmer, Enzo Fernandez, Moises Caicedo, Wesley Fofana, Trevoh Chalobah' },
      { key: 'VFX', value: 'FocusFrame' },
      { key: 'Location', value: 'Studio shoot, London' },
    ],
    keywords: ['Chelsea FC', 'DAMAC Properties', 'Chelsea Residences', 'Matchday in the Sky', 'Metaverse', 'Cole Palmer', 'Enzo Fernandez', 'Moises Caicedo', 'Wesley Fofana', 'Trevoh Chalobah', 'branded content', 'football', 'Premier League', 'FocusFrame', 'VFX', 'green screen', 'skydiving', 'VR', 'Dubai', 'RD Content', 'Will Jarvis'],
    description: [
      'Three ads for Chelsea Residences by DAMAC Properties: the hero spot "Matchday in the Sky" and two "Metaverse" comedy films featuring Chelsea FC players Cole Palmer, Enzo Fernandez, Moises Caicedo, Wesley Fofana, and Trevoh Chalobah. A campaign built around a floating pitch concept, skydiving sequences, and VR locker room comedy.',
      'Producing at RD Content, Will ran a two-day studio shoot with two units operating simultaneously. One built the Matchday platform sequences with football-talented body doubles while the other shot green-screen for the Metaverse films. He managed tight talent windows, with Chelsea FC players available for just 15 minutes each.',
      'VFX coordinated with FocusFrame. Final campaign delivered to DAMAC across multiple formats.',
    ],
  },
  {
    slug: 'fora-at-five',
    title: 'Fora Travel',
    client: 'Fora Travel',
    category: 'branded',
    year: 'Summer 2026',
    role: 'Lead Producer',
    num: '06',
    image: 'images/fora-at-five.gif',
    links: [
      { url: 'https://www.youtube.com/watch?v=DxAVfx8Igeo', label: 'Watch Fora at Five' },
      { url: 'https://www.instagram.com/p/DeHbSe8twp9/?hl=en', label: 'Watch Fora UK' },
    ],
    details: [
      { key: 'Director (Fora at Five)', value: 'Sam McMullen' },
      { key: 'Director (Fora UK)', value: 'Ewan Thomas' },
      { key: 'DOP', value: 'James Parsons' },
      { key: 'Editor', value: 'Ravi Chauhan' },
      { key: 'Locations', value: 'London, Palermo (Villa Igiea, Teatro Massimo, Capo Market, Piazza Bellini, San Saverio)' },
    ],
    keywords: ['Fora Travel', 'Fora at Five', 'fifth anniversary', 'Sam McMullen', 'Ewan Thomas', 'James Parsons', 'Ravi Chauhan', 'Palermo', 'Sicily', 'Villa Igiea', 'Teatro Massimo', 'Capo Market', 'travel advisor', 'branded content', 'London', 'RD Content', 'Will Jarvis'],
    description: [
      'Hero brand film marking Fora Travel\'s fifth anniversary, telling the story of a family returning to Palermo for a 50th wedding anniversary curated by their Fora travel advisor. Shot across two countries at locations including Villa Igiea, Teatro Massimo, Capo Market, Piazza Bellini, and San Saverio church.',
      'Producing at RD Content, Will led the film end to end, coordinating London studio shoots for the advisor sequences and three days of location work across Palermo in Sicily with a London and local crew. He worked with director Sam McMullen and DOP James Parsons.',
      'Delivered to Fora as their hero brand film, with full post-production including a split-screen VFX sequence managed through to final delivery. Will has since produced further work for Fora, including their UK introductory film for new Fora advisors entering the British market.',
    ],
    featured: true,
  },
  {
    slug: 'mcfc-ohana',
    title: 'Manchester City FC',
    client: 'Manchester City FC',
    category: 'branded',
    year: 'Spring 2026',
    role: 'Lead Producer',
    num: '07',
    image: 'images/mcfc-ohana.gif',
    links: [{ url: 'https://www.youtube.com/watch?v=WKEuRSS-1Mw', label: 'Watch' }],
    keywords: ['Manchester City FC', 'Ohana', 'Yas Residences', 'Yas Island', 'Abu Dhabi', 'MCFC', 'branded content', '3D render', 'live action', 'football', 'Premier League', 'RD Content'],
    description: [
      'Launch film for Manchester City Yas Residences by Ohana, a $4.1 billion waterfront development in Abu Dhabi. Blends live-action footage of Manchester City players with 3D-rendered environments, inviting viewers to explore Ohana\'s new waterfront residences on Yas Island.',
      'Producing at RD Content, Will led the project across three phases: location work at Manchester City\'s training facilities, live-action sequences in Abu Dhabi, and oversight of 3D-rendered assets. He coordinated player availability, crew across two countries, and the compositing of 3D renders into the final film.',
      'The finished film positioned the development within the global Manchester City brand, bridging real and virtual environments for the launch campaign.',
    ],
  },
  {
    slug: 'aortic',
    title: 'Aortic',
    category: 'film',
    year: 'Summer 2024',
    role: 'Writer / Co-Producer',
    num: '08',
    image: 'images/aortic.gif',
    links: [
      { url: 'https://www.imdb.com/title/tt28815002/', label: 'View on IMDb' },
      { url: 'https://www.amazon.co.uk/Silence-Stacks-New-Voices-Rise-ebook/dp/B0G2M56CNY/', label: 'Read the Script' },
    ],
    keywords: ['Aortic', 'short film', 'Macauley Keeper', 'Niamh Marie Smith', 'Rob Knox Film Festival', 'Best Performance', 'drama', 'British film', 'London', 'screenwriter', 'London Library', 'Emerging Writers Programme', 'From the Silence of the Stacks'],
    description: [
      'Short film about a man who retreats to a hospital broom closet to leave a voice note to an old friend. A story about self-acceptance, the weight of time, and the courage to keep moving forwards.',
      'Will wrote the screenplay and co-produced, bringing it to director Niamh Marie Smith. Shot in November 2023 with Macauley Keeper in the lead role as Jack.',
      'World premiere at Picturehouse Central. Macauley Keeper won the Jury Award for Best Performance at the Rob Knox International Film Festival 2025. The screenplay is published in From the Silence of the Stacks, New Voices Rise, the London Library Emerging Writers Programme anthology.',
    ],
    awards: [
      'Jury Award for Best Performance (Macauley Keeper) at the Rob Knox International Film Festival 2025',
      'Screenplay published in From the Silence of the Stacks, New Voices Rise (London Library)',
    ],
  },
  {
    slug: 'steaks',
    title: 'Steaks',
    category: 'film',
    year: 'Autumn 2025',
    role: 'Script Editor & Script Supervisor',
    num: '09',
    image: 'images/steaks.gif',
    keywords: ['Steaks', 'comedy short', 'short film', 'Abi Clark', 'Jake Bhardwaj', 'Ste Hinde', 'script editor', 'script supervisor', 'London', 'British film'],
    description: [
      'Comedy short starring Abi Clark and Jake Bhardwaj, directed by Ste Hinde, whose credits span branded content for Google, Apple, Pepsi, and Barclays, with comedy shorts screened at London Independent Film Festival and Barnes Film Festival.',
      'Will served as script editor and script supervisor. He worked with Ste to tighten the comedy and sharpen the story structure, then tracked continuity on set across dialogue, props, and blocking.',
      'Directed by Ste Hinde, winner of a National RTS Award for his documentary Confido.',
    ],
  },
  {
    slug: 'dinner-diamonds-and-death',
    title: 'Dinner, Diamonds and Death',
    category: 'film',
    year: 'Winter 2026',
    role: 'Director / Co-Writer',
    num: '10',
    image: 'images/dinner-diamonds-and-death.gif',
    links: [
      { url: 'https://www.instagram.com/dinnerdiamondsdeathfilm/', label: 'Follow Here' },
      { url: 'https://www.imdb.com/title/tt38363653/', label: 'View on IMDb' },
    ],
    details: [
      { key: 'Director', value: 'Will Jarvis' },
      { key: 'Writers', value: 'Will Jarvis, Sean Nwachukwu, Adam Sorrell' },
      { key: 'Producer', value: 'Sean Nwachukwu' },
      { key: 'Executive Producer', value: 'Christina Boleat' },
      { key: 'Cast', value: 'Nina Agathou, Alice Motta, Duane C Tucker, Sam Mazlow, Harry Clarke, Helen Laurens, Benjy Abu' },
      { key: 'Casting Director', value: 'Zayd Choudhry' },
      { key: 'Production Designer', value: 'Christina Boleat' },
      { key: 'Locations', value: 'London, Gravesend, Chadwell Heath' },
    ],
    keywords: ['Dinner Diamonds and Death', 'short film', 'psychological thriller', 'non-linear', 'London', 'crime', 'criminal underworld', 'Will Jarvis', 'Sean Nwachukwu', 'Adam Sorrell', 'Nina Agathou', 'Alice Motta', 'Duane C Tucker', 'Sam Mazlow', 'Harry Clarke', 'Helen Laurens', 'Christina Boleat', 'Zayd Choudhry', 'Gravesend', 'Chadwell Heath', 'Sundance London', 'British film'],
    description: [
      'Non-linear psychological thriller set in London\'s criminal underworld, starring Nina Agathou, Alice Motta, Duane C Tucker, Sam Mazlow, Harry Clarke, Helen Laurens, and Benjy Abu. A fractured structure moves between timelines as the audience pieces together the puzzle alongside the characters, set behind closed doors where the danger follows you inside.',
      'Will wrote the script with Sean Nwachukwu and Adam Sorrell, and directed, shooting across London, Gravesend, and Chadwell Heath. He conceived the film as a departure from the typical London skyline crime aesthetic, grounding the story in interiors rather than cityscapes. Produced by Sean Nwachukwu with Christina Boleat as executive producer and production designer.',
      'Currently in post-production with picture lock complete. Targeting Sundance London.',
    ],
    featured: true,
  },
  {
    slug: 'break-a-leg',
    title: 'Break A Leg',
    category: 'tv',
    year: 'Summer 2026',
    role: 'Creator / Writer',
    num: '11',
    image: 'images/break-a-leg.gif',
    keywords: ['Break A Leg', 'dark comedy', 'thriller', 'TV series', 'TV development', 'Netflix', 'ITV', 'Hager Moss', 'GGG', 'Gary Got Got', 'SERIENCAMP', 'Soho', 'London', 'screenwriter', 'pilot script'],
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
    role: 'Writer',
    num: '12',
    image: 'images/brain-drain.webp',
    keywords: ['Brain Drain', 'apocalyptic comedy', 'adventure comedy', 'TV series', 'TV development', 'Fandango Productions', 'GGG', 'Gary Got Got', 'Blackpool', 'political satire', 'screenwriter', 'optioned'],
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
    category: 'other',
    year: 'Autumn 2019',
    role: 'Writer / Director',
    num: '13',
    image: 'images/clockwork-arms.webp',
    keywords: ['The Clockwork Arms', 'theatre', 'immersive', 'time travel', 'London history', 'sold out', 'playwright', 'Distracted Rat Productions', 'new writing', 'fringe theatre'],
    description: [
      'A group of friends stumble into a pub that travels through time. The Clockwork Arms pulls its inhabitants through five periods of London\'s history, forcing them to confront their past and decide what to do with their own time.',
      'Will wrote and directed, guiding the cast through five distinct eras, each with its own London, its own language, and its own stakes. He used the time-travelling pub as a device for reckoning with the city\'s layered history, and with the characters\' own.',
      'Sold out its run. Hana Jarrah as Maya, Joel Coussins as The Bartender. Produced by Laura Aiton and Adam Porrett.',
    ],
  },
  {
    slug: 'the-emoji-project',
    title: 'The Emoji Project',
    category: 'other',
    year: 'Summer 2021',
    role: 'Writer / Creative Producer',
    num: '14',
    image: 'images/the-emoji-project.webp',
    keywords: ['The Emoji Project', 'Camden Fringe', 'anthology', 'new writing', 'theatre', 'sold out', 'Hen and Chickens Theatre', 'Distracted Rat Productions', 'intergenerational', 'short plays'],
    description: [
      'Anthology of new writing for Camden Fringe under Distracted Rat Productions. An intergenerational collection of short plays, each written in response to a single emoji, with contributors ranging in age from 11 to 75.',
      'Will created the format and produced the run, commissioning writers including sean wai keung, Tilney Brune, James Aldred, Jalice Corral, and Alastair Gibbons. He managed production across three nights at the Hen and Chickens Theatre in August 2021.',
      'Sold out its run. Reviewers described it as making "you giggle and think in the same breath." Directed by Susie MacDonald, Gabriel Harris, and Annys Whyatt.',
    ],
  },
  {
    slug: 'chuggington',
    title: 'Chuggington',
    client: 'Ludorum',
    category: 'other',
    year: '2018',
    role: 'Sales & Marketing Assistant',
    num: '15',
    image: 'images/chuggington.gif',
    details: [
      { key: 'Company', value: 'Ludorum plc' },
      { key: 'Show', value: 'Chuggington (created by Sarah Ball)' },
      { key: 'Format', value: '174 episodes across 6 series' },
      { key: 'Broadcasters', value: 'CBeebies (BBC), Disney Channel, Super RTL, TF1, ABC Australia, Fuji TV' },
      { key: 'Duration', value: 'Feb 2018 to Oct 2018' },
    ],
    keywords: ['Chuggington', 'Ludorum', "children's TV", 'animation', 'marketing', 'CBeebies', 'BBC', 'Disney Channel', 'sales', 'London', 'Sarah Ball'],
    description: [
      "Sales and marketing assistant at Ludorum plc, the British studio behind Chuggington, an animated children's TV series created by Sarah Ball. First broadcast on CBeebies in 2008, the show ran for six series and 174 episodes, airing internationally on Disney Channel, Super RTL, TF1, ABC Australia, and Fuji TV.",
      "Will joined Ludorum straight out of university as his first industry role, reporting to the Managing Director. He supported the creation of sales materials and collation of data from multiple departments, maintained social media activity, and assisted the Head of Marketing with localised marketing plans and presentations for international broadcast partners.",
      "Ludorum was founded in 2005 by former HIT Entertainment executives. Chuggington was the studio's flagship property, with a global licensing and merchandising programme spanning toys, publishing, and live events. The franchise was later acquired by Herschend Studios.",
    ],
  },
  {
    slug: 'vidi-guides',
    title: 'Vidi Guides',
    category: 'other',
    year: '2020-2024',
    role: 'Head of Content & Production',
    num: '16',
    image: 'images/vidi-guides.gif',
    links: [{ url: 'https://www.vidiguides.com/', label: 'Visit Vidi Guides' }],
    details: [
      { key: 'Scale', value: '100+ tours across 17 cities in 7 countries' },
      { key: 'Clients', value: 'Walt Disney, Hilton Hotels, Lonely Planet, Culture Trip' },
      { key: 'Cities', value: 'London, Paris, Cambridge, Oxford, Edinburgh, New York, Singapore, Rome, Venice' },
      { key: 'Format', value: 'GPS-triggered audio walking tours' },
    ],
    keywords: ['Vidi Guides', 'audio tours', 'walking tours', 'GPS', 'Walt Disney', 'Hilton Hotels', 'Lonely Planet', 'Culture Trip', 'London', 'Paris', 'New York', 'travel', 'content production', 'digital media'],
    description: [
      '100+ GPS-triggered audio walking tours across 17 cities and 7 countries, produced over four years at Vidi Guides. Cities included London, Paris, Cambridge, Oxford, Edinburgh, New York, Singapore, Rome, and Venice.',
      'Will led content and production, managing the full pipeline from scripting and voice casting to location research and production management across dozens of simultaneous tours.',
      'Clients included Walt Disney, Hilton Hotels, Lonely Planet, and Culture Trip.',
    ],
  },
];

export function getThumb(image: string): string | null {
  if (!image.endsWith('.gif')) return null;
  return 'images/thumbs/' + image.replace('images/', '').replace('.gif', '.webp');
}
