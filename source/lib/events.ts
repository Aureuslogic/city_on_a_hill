export const eventFormats = ['In person', 'Virtual', 'Hybrid'] as const;
export const eventFocuses = ['Business & leadership', 'Investment', 'Creative industries', 'Young professionals', 'Community impact'] as const;

export type EcosystemEvent = {
  slug: string;
  title: string;
  city: string;
  market: string;
  format: (typeof eventFormats)[number];
  focus: (typeof eventFocuses)[number];
  audience: string;
  summary: string;
  image: string;
};

// Programme previews demonstrate the event-discovery system without publishing
// invented dates. Replace or extend these with confirmed event records.
export const ecosystemEvents: EcosystemEvent[] = [
  {
    slug: 'london-marketplace-leaders-breakfast',
    title: 'Marketplace Leaders Breakfast',
    city: 'London',
    market: 'United Kingdom',
    format: 'In person',
    focus: 'Business & leadership',
    audience: 'Founders, executives and marketplace apostles',
    summary: 'A focused morning of practical insight, trusted introductions and prayer for Christian leaders building in commerce and culture.',
    image: '/directory/consulting-team.png',
  },
  {
    slug: 'global-kingdom-founders-roundtable',
    title: 'Global Kingdom Founders Roundtable',
    city: 'Online',
    market: 'International',
    format: 'Virtual',
    focus: 'Business & leadership',
    audience: 'Entrepreneurs and emerging founders',
    summary: 'An international peer conversation for founders sharing honest challenges, commercial wisdom and opportunities to collaborate.',
    image: '/directory/young-diverse-leaders.png',
  },
  {
    slug: 'lagos-faith-enterprise-forum',
    title: 'Faith & Enterprise Forum',
    city: 'Lagos',
    market: 'Nigeria',
    format: 'Hybrid',
    focus: 'Community impact',
    audience: 'Business owners, professionals and social-impact leaders',
    summary: 'A cross-sector gathering exploring how excellent enterprise can strengthen families, communities and institutions.',
    image: '/directory/banking-and-founder.png',
  },
  {
    slug: 'toronto-christian-creatives-mixer',
    title: 'Christian Creatives Mixer',
    city: 'Toronto',
    market: 'Canada',
    format: 'In person',
    focus: 'Creative industries',
    audience: 'Designers, writers, media leaders and creative founders',
    summary: 'A welcoming evening for Christian creatives to meet collaborators, exchange ideas and discover commercial opportunity.',
    image: '/directory/publishing-team.png',
  },
  {
    slug: 'dubai-capital-purpose-circle',
    title: 'Capital & Purpose Circle',
    city: 'Dubai',
    market: 'United Arab Emirates',
    format: 'Hybrid',
    focus: 'Investment',
    audience: 'Investors, founders and commercially experienced advisers',
    summary: 'A thoughtful conversation about investment readiness, responsible capital and backing enterprises with lasting value.',
    image: '/directory/market-professionals.png',
  },
  {
    slug: 'nairobi-young-leaders-lab',
    title: 'Young Leaders Lab',
    city: 'Nairobi',
    market: 'Kenya',
    format: 'Hybrid',
    focus: 'Young professionals',
    audience: 'Christian professionals and entrepreneurs aged 21–35',
    summary: 'An energetic development experience connecting young talent with mentors, practical tools and an international peer network.',
    image: '/directory/young-diverse-leaders.png',
  },
];

export const eventMarkets = [...new Set(ecosystemEvents.map((event) => event.market))].sort();
