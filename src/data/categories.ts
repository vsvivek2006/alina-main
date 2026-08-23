export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: 'russian-escorts',
    name: 'Russian Escorts',
    shortDescription: 'Exotic European call girls with elegance and charm.',
    description: 'Our Russian escorts represent the pinnacle of European elegance and exotic beauty. These call girls are carefully selected for their sophistication, conversational fluency, and refined social grace, making them ideal for escort service engagements including luxury events, fine dining, and private meetings.',
    icon: 'Crown',
  },
  {
    slug: 'vip-escorts',
    name: 'VIP Escorts',
    shortDescription: 'Elite call girls for the most discerning clientele.',
    description: 'Our VIP escorts cater to clients who expect nothing but the absolute finest. These call girls are handpicked for their exceptional beauty, intelligence, and ability to navigate high-society environments with poise and discretion. Book them for premium escort service in Gurgaon.',
    icon: 'Star',
  },
  {
    slug: 'model-escorts',
    name: 'Model Escorts',
    shortDescription: 'Stunning call girls with professional modelling backgrounds.',
    description: 'Our model escorts are call girls with professional modelling experience. They possess striking features, confident presence, and an understanding of aesthetics that elevates any escort service engagement. Available for corporate events, social functions, and private occasions.',
    icon: 'Camera',
  },
  {
    slug: 'college-girls',
    name: 'College Girls',
    shortDescription: 'Young, vibrant call girls full of energy and enthusiasm.',
    description: 'Our college girl call girls bring youthful energy, fresh perspectives, and a vibrant spirit to every escort service encounter. These well-educated call girls are ideal for casual outings, city tours, and relaxed social engagements in Gurgaon.',
    icon: 'GraduationCap',
  },
  {
    slug: 'housewife-escorts',
    name: 'Housewife Escorts',
    shortDescription: 'Mature, experienced call girls offering a relaxed experience.',
    description: 'Our housewife escorts are mature, experienced call girls who offer a more relaxed and genuine escort service experience. Ideal for clients seeking meaningful conversation and connection in a comfortable setting.',
    icon: 'User',
  },
  {
    slug: 'independent-escorts',
    name: 'Independent Escorts',
    shortDescription: 'Self-assured call girls who operate with complete autonomy.',
    description: 'Our independent escorts manage their own schedules and engagements, ensuring a personalised and authentic escort service experience. These call girls value discretion and professionalism above all else.',
    icon: 'User',
  },
  {
    slug: 'vip-call-girls',
    name: 'VIP Call Girls',
    shortDescription: 'Premium call girls for elite escort service experiences.',
    description: 'Our VIP call girls represent the highest standard of escort service in Gurgaon. These premium call girls are handpicked for their exceptional beauty, intelligence, and social sophistication. Available for exclusive engagements and high-profile events.',
    icon: 'Gem',
  },
  {
    slug: 'air-hostess-escorts',
    name: 'Air Hostess Escorts',
    shortDescription: 'Groomed, elegant call girls with a cosmopolitan flair.',
    description: 'Our air hostess escorts are call girls known for their impeccable grooming, polished manners, and cosmopolitan outlook. They are well-travelled, cultured, and comfortable in diverse social settings. Perfect for escort service engagements that require sophistication.',
    icon: 'Plane',
  },
  {
    slug: 'celebrity-escorts',
    name: 'Celebrity Escorts',
    shortDescription: 'Exclusive call girls from the entertainment industry.',
    description: 'Our celebrity escorts are call girls associated with the entertainment and fashion industries. These exclusive escort service engagements are arranged with the highest level of discretion and exclusivity in Gurgaon.',
    icon: 'Award',
  },
  {
    slug: 'travel-escorts',
    name: 'Travel Escorts',
    shortDescription: 'Cultured call girls for luxury travel and getaways.',
    description: 'Our travel escorts are call girls ideal for luxury getaways, business trips, and international travel. They are well-travelled, adaptable, and skilled at making any journey more enjoyable. Book them for outstation escort service in Gurgaon.',
    icon: 'Luggage',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
