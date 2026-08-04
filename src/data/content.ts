export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh K.',
    location: 'DLF Phase 3, Gurgaon',
    rating: 5,
    text: 'ALINA VIP provided an exceptional experience from start to finish. The companion was elegant, well-spoken, and perfectly suited to the occasion. The booking process was smooth and entirely discreet. I will definitely use their services again.',
  },
  {
    name: 'Vikram S.',
    location: 'Cyber City, Gurgaon',
    rating: 5,
    text: 'I have used several companion services in the NCR, but ALINA VIP stands apart. The level of professionalism, the quality of companions, and the discretion they maintain is unmatched. Highly recommended for discerning gentlemen.',
  },
  {
    name: 'Arjun M.',
    location: 'Golf Course Road, Gurgaon',
    rating: 5,
    text: 'The companion I booked was exactly as described on the profile — beautiful, intelligent, and sophisticated. She accompanied me to a business dinner and was the perfect conversationalist. Thank you, ALINA VIP, for a memorable evening.',
  },
  {
    name: 'Sanjay R.',
    location: 'MG Road, Gurgaon',
    rating: 5,
    text: 'What impressed me most about ALINA VIP was their attention to detail. From the initial phone call to the end of the evening, everything was handled with professionalism and class. The companion was punctual, well-groomed, and delightful company.',
  },
  {
    name: 'Karan B.',
    location: 'Sohna Road, Gurgaon',
    rating: 5,
    text: 'I was initially hesitant about using a companion service, but ALINA VIP put all my concerns to rest. Their verification process and commitment to discretion made me feel completely comfortable. The experience exceeded my expectations.',
  },
  {
    name: 'Aditya G.',
    location: 'Sushant Lok, Gurgaon',
    rating: 5,
    text: 'I booked a travel companion through ALINA VIP for a weekend getaway, and it was one of the best decisions I have made. The companion was well-travelled, cultured, and made the trip truly memorable. Five stars without hesitation.',
  },
];

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'dinner-companion',
    title: 'Dinner Companion',
    shortDescription: 'Elegant companions for fine dining experiences.',
    description: 'Our dinner companion service provides you with a sophisticated partner for fine dining experiences. Whether it is a romantic dinner for two, a business dinner, or a celebration, our companions are well-versed in dining etiquette and social grace.',
    icon: 'UtensilsCrossed',
  },
  {
    slug: 'event-companion',
    title: 'Event Companion',
    shortDescription: 'Refined companions for social and corporate events.',
    description: 'Our event companion service is designed for clients who need a polished partner for social gatherings, corporate events, and high-society functions. Our companions are socially adept and present themselves with elegance.',
    icon: 'Calendar',
  },
  {
    slug: 'travel-companion-service',
    title: 'Travel Companion',
    shortDescription: 'Cultured companions for luxury travel.',
    description: 'Our travel companion service offers you a cultured and adaptable partner for domestic and international travel. Our companions are well-travelled and skilled at making any journey more enjoyable and memorable.',
    icon: 'Plane',
  },
  {
    slug: 'party-companion',
    title: 'Party Companion',
    shortDescription: 'Vibrant companions for exclusive parties.',
    description: 'Our party companion service provides you with a vibrant and engaging partner for exclusive parties, nightclub visits, and social gatherings. Our companions know how to have fun while maintaining elegance.',
    icon: 'PartyPopper',
  },
  {
    slug: 'business-companion',
    title: 'Business Companion',
    shortDescription: 'Professional companions for corporate engagements.',
    description: 'Our business companion service is tailored for corporate clients who need a sophisticated partner for business dinners, client meetings, and professional networking events. Our companions are educated and professional.',
    icon: 'Briefcase',
  },
  {
    slug: 'private-companion',
    title: 'Private Companion',
    shortDescription: 'Discreet companions for private engagements.',
    description: 'Our private companion service offers you a discreet and engaging partner for private engagements. Whether it is a quiet evening at home or a private celebration, our companions provide delightful company.',
    icon: 'Lock',
  },
];
