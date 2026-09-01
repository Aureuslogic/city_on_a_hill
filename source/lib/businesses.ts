export const businessCategories = [
  'Strategy & consulting',
  'Marketing & creative',
  'Finance & legal',
  'People & wellbeing',
  'Technology & AI',
  'Products & experiences',
  'Education & training',
  'Media & communications',
] as const;

export type BusinessCategory = (typeof businessCategories)[number];

export const businessProfileTypes = [
  'Businesses',
  'Professionals',
  'Communities',
  'Courses',
  'Investors',
] as const;

export type BusinessProfileType = (typeof businessProfileTypes)[number];

export const priorityMarkets = [
  'United Kingdom',
  'United States',
  'Canada',
  'European Union',
  'Nigeria',
  'Australia',
  'Ghana',
  'Zimbabwe',
  'South Africa',
  'United Arab Emirates',
  'Kenya',
  'Malta',
  'Egypt',
] as const;

export type Business = {
  slug: string;
  name: string;
  category: BusinessCategory;
  location: string;
  market: (typeof priorityMarkets)[number];
  countryCode: string;
  serves: string;
  summary: string;
  description: string[];
  benefits: string[];
  services: string[];
  keywords: string[];
  website: string;
  ctaLabel: string;
  profileType?: BusinessProfileType;
  languages?: string[];
  delivery?: 'Online' | 'In person' | 'Online & in person';
  verified: boolean;
  featured: boolean;
  isDemo: boolean;
  accent: 'navy' | 'teal' | 'gold' | 'sky';
  media: {
    kind: 'image' | 'video';
    label: string;
    src?: string;
  };
};

// These demonstration records make the directory and profile templates usable now.
// Replace them with approved business information; the routes, search and metadata
// are generated automatically from this single collection.
export const businesses: Business[] = [
  {
    slug: 'strategy-consulting-showcase',
    name: 'Strategy & Consulting Showcase',
    category: 'Strategy & consulting',
    location: 'London',
    market: 'United Kingdom',
    countryCode: 'GB',
    serves: 'United Kingdom and international clients online',
    summary: 'A demonstration profile for advisers, coaches and strategic partners helping purpose-led organisations move forward.',
    description: [
      'Use this space to introduce the business in plain language: who it serves, the problem it solves and the convictions that shape how the team works.',
      'A full profile can carry a strong founder story, proof of expertise, a focused service offer and a clear route to the business’s own website.',
    ],
    benefits: ['Clarify priorities and direction', 'Turn vision into an actionable plan', 'Gain an experienced outside perspective'],
    services: ['Business strategy', 'Leadership advisory', 'Growth planning', 'Founder coaching'],
    keywords: ['consultant', 'strategy', 'coach', 'business adviser', 'leadership'],
    website: 'https://example.com',
    ctaLabel: 'Visit the business website',
    verified: false,
    featured: true,
    isDemo: true,
    accent: 'navy',
    profileType: 'Professionals',
    languages: ['English'],
    delivery: 'Online & in person',
    media: { kind: 'image', label: 'Strategy consultants collaborating', src: '/directory/consulting-team.png' },
  },
  {
    slug: 'marketing-creative-showcase',
    name: 'Marketing & Creative Showcase',
    category: 'Marketing & creative',
    location: 'Toronto',
    market: 'Canada',
    countryCode: 'CA',
    serves: 'Canada, North America and international clients',
    summary: 'A demonstration shop window for brand, design, content and digital partners building work with meaning and commercial clarity.',
    description: [
      'Show prospective customers the difference this creative business makes, not only the list of deliverables it sells.',
      'Images, a showreel or a case-study video can sit in the media area, followed by benefits, specialist services and one decisive call to action.',
    ],
    benefits: ['Build a clearer, more memorable brand', 'Communicate with the right audience', 'Create consistent campaigns and content'],
    services: ['Brand strategy', 'Web design', 'Content creation', 'Digital marketing'],
    keywords: ['marketing', 'designer', 'branding', 'creative agency', 'content'],
    website: 'https://example.com',
    ctaLabel: 'View the creative studio',
    verified: false,
    featured: true,
    isDemo: true,
    accent: 'gold',
    profileType: 'Businesses',
    languages: ['English', 'French'],
    delivery: 'Online & in person',
    media: { kind: 'image', label: 'Creative founders and collaborators', src: '/directory/young-diverse-leaders.png' },
  },
  {
    slug: 'finance-legal-showcase',
    name: 'Finance & Legal Showcase',
    category: 'Finance & legal',
    location: 'Lagos',
    market: 'Nigeria',
    countryCode: 'NG',
    serves: 'Nigeria and West Africa',
    summary: 'A demonstration profile for accountants, bookkeepers, financial specialists and professional advisers.',
    description: [
      'Build confidence quickly with a concise summary of credentials, regulated services where relevant, ideal clients and the standards the practice follows.',
      'The page is designed to help buyers understand the offer before continuing to the provider’s own website for an enquiry or consultation.',
    ],
    benefits: ['Understand the numbers with confidence', 'Make informed commercial decisions', 'Reduce avoidable financial risk'],
    services: ['Accountancy', 'Bookkeeping', 'Financial planning', 'Commercial advice'],
    keywords: ['accountant', 'bookkeeper', 'finance', 'legal', 'financial adviser'],
    website: 'https://example.com',
    ctaLabel: 'Visit the professional practice',
    verified: false,
    featured: true,
    isDemo: true,
    accent: 'teal',
    profileType: 'Businesses',
    languages: ['English', 'Yoruba'],
    delivery: 'Online & in person',
    media: { kind: 'image', label: 'Business finance consultation', src: '/directory/banking-and-founder.png' },
  },
  {
    slug: 'people-wellbeing-showcase',
    name: 'People & Wellbeing Showcase',
    category: 'People & wellbeing',
    location: 'Nairobi',
    market: 'Kenya',
    countryCode: 'KE',
    serves: 'Kenya, East Africa and online',
    summary: 'A demonstration profile for recruitment, leadership, healthcare and wellbeing specialists who put people first.',
    description: [
      'Use the profile to establish care, competence and trust while clearly explaining who the service is suitable for.',
      'The flexible content areas work for professional biographies, accreditations, testimonials, service pathways and an introductory video.',
    ],
    benefits: ['Support healthier people and teams', 'Access values-led specialist expertise', 'Create sustainable change'],
    services: ['People development', 'Workplace wellbeing', 'Recruitment', 'Leadership support'],
    keywords: ['wellbeing', 'health', 'recruitment', 'HR', 'people', 'social care'],
    website: 'https://example.com',
    ctaLabel: 'Explore the provider’s services',
    verified: false,
    featured: false,
    isDemo: true,
    accent: 'sky',
    profileType: 'Professionals',
    languages: ['English', 'Swahili'],
    delivery: 'Online & in person',
    media: { kind: 'image', label: 'A diverse professional community', src: '/directory/young-diverse-leaders.png' },
  },
  {
    slug: 'technology-ai-showcase',
    name: 'Technology & AI Showcase',
    category: 'Technology & AI',
    location: 'Austin',
    market: 'United States',
    countryCode: 'US',
    serves: 'Global, remote delivery',
    summary: 'A demonstration profile for software, data, cybersecurity, automation and responsible AI specialists.',
    description: [
      'Translate technical capability into outcomes that customers can understand, supported by clear services and credible proof.',
      'The profile can showcase a product screenshot, explainer video or team image, then send qualified visitors directly to the company website.',
    ],
    benefits: ['Automate repetitive work', 'Use data more intelligently', 'Adopt technology responsibly'],
    services: ['AI enablement', 'Software development', 'Automation', 'Technology consulting'],
    keywords: ['technology', 'AI', 'software', 'automation', 'data', 'cybersecurity'],
    website: 'https://example.com',
    ctaLabel: 'Visit the technology company',
    verified: false,
    featured: true,
    isDemo: true,
    accent: 'navy',
    profileType: 'Businesses',
    languages: ['English'],
    delivery: 'Online',
    media: { kind: 'image', label: 'Technology and market professionals', src: '/directory/market-professionals.png' },
  },
  {
    slug: 'products-experiences-showcase',
    name: 'Products & Experiences Showcase',
    category: 'Products & experiences',
    location: 'Melbourne',
    market: 'Australia',
    countryCode: 'AU',
    serves: 'Australia and international customers',
    summary: 'A demonstration shop window for thoughtful products, hospitality, venues, events and memorable customer experiences.',
    description: [
      'Lead with strong product or venue imagery, explain the customer experience and highlight the practical reasons to choose the business.',
      'Visitors can browse the story here and continue to the business’s own store, booking page or website when they are ready.',
    ],
    benefits: ['Discover products with a purposeful story', 'Choose memorable values-led experiences', 'Support independent Christian founders'],
    services: ['Retail products', 'Hospitality', 'Events', 'Experiences'],
    keywords: ['shop', 'products', 'venue', 'hospitality', 'events', 'gifts'],
    website: 'https://example.com',
    ctaLabel: 'Shop or book with the business',
    verified: false,
    featured: false,
    isDemo: true,
    accent: 'gold',
    profileType: 'Businesses',
    languages: ['English'],
    delivery: 'Online & in person',
    media: { kind: 'image', label: 'Independent hair and beauty business', src: '/directory/hair-and-beauty-team.png' },
  },
  {
    slug: 'education-training-showcase',
    name: 'Education & Training Showcase',
    category: 'Education & training',
    location: 'Accra',
    market: 'Ghana',
    countryCode: 'GH',
    serves: 'Ghana, West Africa and online',
    summary: 'A demonstration profile for educators, trainers, learning designers and organisations developing people for the future.',
    description: [
      'Present courses, learning outcomes and the expertise behind them in a profile that works for individuals, schools, churches and employers.',
      'The page can hold a course trailer or tutor introduction before directing learners to registration on the provider’s website.',
    ],
    benefits: ['Build practical, relevant skills', 'Learn from experienced specialists', 'Develop with purpose and confidence'],
    services: ['Professional training', 'Leadership development', 'Education consulting', 'Online learning'],
    keywords: ['education', 'training', 'teacher', 'course', 'learning', 'professional development'],
    website: 'https://example.com',
    ctaLabel: 'Explore courses and programmes',
    verified: false,
    featured: false,
    isDemo: true,
    accent: 'teal',
    profileType: 'Courses',
    languages: ['English'],
    delivery: 'Online & in person',
    media: { kind: 'image', label: 'Author and editor developing learning content', src: '/directory/publishing-team.png' },
  },
  {
    slug: 'media-communications-showcase',
    name: 'Media & Communications Showcase',
    category: 'Media & communications',
    location: 'Dubai',
    market: 'United Arab Emirates',
    countryCode: 'AE',
    serves: 'International',
    summary: 'A demonstration profile for filmmakers, publishers, speakers, production companies and communications experts.',
    description: [
      'Give visual storytellers room to show their work while making their commercial offer easy to understand.',
      'A film reel, featured production or campaign image can lead the page, supported by benefits, services and a prominent outbound link.',
    ],
    benefits: ['Tell stories with greater clarity', 'Reach and engage the right audience', 'Work with values-aligned media specialists'],
    services: ['Video production', 'Public relations', 'Publishing', 'Strategic communications'],
    keywords: ['media', 'video', 'film', 'PR', 'publisher', 'communications'],
    website: 'https://example.com',
    ctaLabel: 'View the media company’s work',
    verified: false,
    featured: false,
    isDemo: true,
    accent: 'sky',
    profileType: 'Businesses',
    languages: ['English', 'Arabic'],
    delivery: 'Online & in person',
    media: { kind: 'image', label: 'International creative professionals', src: '/directory/young-diverse-leaders.png' },
  },
  {
    slug: 'kingdom-founders-community',
    name: 'Kingdom Founders Community',
    category: 'Strategy & consulting',
    profileType: 'Communities',
    location: 'London',
    market: 'United Kingdom',
    countryCode: 'GB',
    serves: 'United Kingdom and international members online',
    summary: 'A demonstration community for young Christian founders seeking trusted relationships, practical wisdom and global collaboration.',
    description: [
      'This community format combines a clear member promise, gathering formats, leadership information and a direct route to an external membership journey.',
      'Use it for founder networks, professional fellowships, marketplace ministries or specialist peer communities.',
    ],
    benefits: ['Meet values-aligned founders', 'Learn through honest peer exchange', 'Build trusted international relationships'],
    services: ['Founder roundtables', 'Peer mentoring', 'Networking events', 'Online community'],
    keywords: ['Christian founders', 'community', 'entrepreneurs', 'networking', 'young professionals'],
    website: 'https://example.com',
    ctaLabel: 'Explore the community',
    languages: ['English'],
    delivery: 'Online & in person',
    verified: false,
    featured: true,
    isDemo: true,
    accent: 'gold',
    media: { kind: 'image', label: 'Young founders networking globally', src: '/directory/young-diverse-leaders.png' },
  },
  {
    slug: 'purpose-profit-academy',
    name: 'Purpose & Profit Academy',
    category: 'Education & training',
    profileType: 'Courses',
    location: 'Valletta',
    market: 'Malta',
    countryCode: 'MT',
    serves: 'European Union and international learners online',
    summary: 'A demonstration learning profile for practical programmes connecting Christian purpose, commercial capability and responsible growth.',
    description: [
      'Course pages can explain outcomes, delivery, ideal participants and the expertise behind the programme without forcing visitors through a complicated catalogue.',
      'Each profile can carry a course trailer or faculty image before sending learners to the provider’s own enrolment journey.',
    ],
    benefits: ['Strengthen commercial confidence', 'Apply values to real decisions', 'Learn with an international cohort'],
    services: ['Online courses', 'Leadership intensives', 'Founder education', 'Team workshops'],
    keywords: ['Christian business course', 'training', 'academy', 'leadership', 'professional development'],
    website: 'https://example.com',
    ctaLabel: 'Explore the academy',
    languages: ['English'],
    delivery: 'Online',
    verified: false,
    featured: true,
    isDemo: true,
    accent: 'teal',
    media: { kind: 'image', label: 'Publishing and learning professionals', src: '/directory/publishing-team.png' },
  },
  {
    slug: 'covenant-capital-network',
    name: 'Covenant Capital Network',
    category: 'Finance & legal',
    profileType: 'Investors',
    location: 'Dubai',
    market: 'United Arab Emirates',
    countryCode: 'AE',
    serves: 'Middle East, Africa, Europe and international founders',
    summary: 'A demonstration profile for Christian angel investors, funders and commercially experienced leaders supporting responsible enterprise.',
    description: [
      'Investor profiles can set out sector interests, geographic focus, investment approach and the preparation expected from founders.',
      'The format supports investor networks and readiness programmes while keeping sensitive deal activity on the organisation’s own secure platform.',
    ],
    benefits: ['Understand investor priorities', 'Build investment readiness', 'Connect capital with purposeful enterprise'],
    services: ['Founder readiness', 'Angel network', 'Investment introductions', 'Commercial mentoring'],
    keywords: ['Christian investors', 'angel investors', 'funding', 'capital', 'business mentoring'],
    website: 'https://example.com',
    ctaLabel: 'Explore the investor network',
    languages: ['English', 'Arabic'],
    delivery: 'Online & in person',
    verified: false,
    featured: true,
    isDemo: true,
    accent: 'navy',
    media: { kind: 'image', label: 'Global finance professionals', src: '/directory/market-professionals.png' },
  },
];

export function getBusinessProfileType(business: Business): BusinessProfileType {
  return business.profileType ?? 'Businesses';
}

export function getBusiness(slug: string) {
  return businesses.find((business) => business.slug === slug);
}

export const businessLocations = [...new Set(businesses.map((business) => business.location))].sort();
export const businessMarkets = [...priorityMarkets];
