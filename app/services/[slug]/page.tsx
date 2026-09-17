import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle, Shield, Clock, Star } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  image: string;
  description: string[];
  features: string[];
  faqs: { q: string; a: string }[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  '1-2-3-hours': {
    slug: '1-2-3-hours',
    title: 'Get the Most Exceptional Gurgaon Call Girls for 3 Hours',
    subtitle: 'Experience erotic fun and entertainment in your love life with the companionship of the most seductive women.',
    price: '₹ 15,000 / 1-2 Hours',
    duration: '1 to 3 Hours',
    image: '/images/assets/image_290x280_1.jpg',
    description: [
      "Dear gentleman, it's time for you to indulge in an exclusive experience with high-class escorts in the city of Gurgaon. The most entertaining and premium girls are here to bring you a wide variety of services.",
      "Whether you need short-term companionship for 1 hour or you want to spend 2 to 3 hours with a gorgeous model, our companions are at your doorstep within 20 to 30 minutes across DLF, Cyber City, and Golf Course Road.",
      "Impeccable Escort Services in Gurgaon for 1 Hour: If you are running short of time and you want some relaxation, our 1-hour package brings intense bedroom passion, oral sex, deep French kissing, and warm sensual touch.",
      "Wide Variety of Escort Services for 2 Hours to Feel Sensual Bliss: 2-hour bookings allow for unhurried intimacy, two passionate rounds, and relaxing conversation in your private hotel suite.",
      "Unlimited Fetishes are Assured with Premium Escort Service for 3 Hours: Indulge in extended roleplay, shower intimacy, body-to-body massage, and complete stress relief with zero advance payment."
    ],
    features: [
      'Upto 1, 2 or 3 hours of intense adult pleasure',
      'In-Call & Outcall Service across all Gurgaon hotels',
      'Choose from Russian, Model, and College companions',
      'Confirm real photo profile before booking',
      'Private, discreet, and cash on arrival service',
      'Erotic Girlfriend Experience included'
    ],
    faqs: [
      {
        q: 'How fast can an escort arrive for a 1-hour session?',
        a: 'Our escorts arrive within 20 to 30 minutes at any hotel or private residence across Gurgaon and Aerocity.'
      },
      {
        q: 'Do you charge any prepayment for 2 or 3-hour bookings?',
        a: 'Zero advance payment. You meet your companion in person first and hand over the cash directly to her.'
      }
    ]
  },
  'full-night': {
    slug: 'full-night',
    title: 'Gurgaon Escort Service for a Full Night – The Ultimate Source of Adult Fun!',
    subtitle: 'Full-night call girls to join you for orgasmic experiences in the bedroom from 10 PM to 8 AM.',
    price: '₹ 30,000+ / Full Night',
    duration: 'Overnight (10 PM - 8 AM)',
    image: '/images/assets/image_290x280_2.jpg',
    description: [
      "Do you need some source of entertainment and pleasure in your life? Is it your desire to get something that enhances your love life and gives you lots of romantic adventures? Are you in search of a girl who can meet you and greet you with amazing services?",
      "If you say yes to any of these questions, then our full-night escort service is the ultimate answer. We bring you the companionship of our full-night call girls who are available 24 by 7.",
      "Late-Night Escorts in Gurgaon are Easily Available with Us: No time barriers, no rushing. Enjoy dinner dates, clubbing at Sector 29, bathtub intimacy, and unlimited rounds of passionate lovemaking until morning.",
      "Wake up next to an enchanting companion for tender morning cuddles, breakfast, and affectionate farewell before 8:00 AM."
    ],
    features: [
      'Overnight companionship from 10:00 PM to 08:00 AM',
      'Unlimited intimate sessions throughout the night',
      'Accompaniment to luxury dinner dates and lounges',
      'Warm full body sensual massage and bathtub fun',
      'Morning cuddling and breakfast companionship',
      '100% genuine verified models with doorstep verification'
    ],
    faqs: [
      {
        q: 'Can she join me for dinner or clubbing before going to the hotel?',
        a: 'Yes, our full-night escorts are educated, charming, and stylishly dressed, making them the perfect date for any 5-star venue.'
      },
      {
        q: 'What if I want to extend the night into the next afternoon?',
        a: 'You can easily extend with our concierge at standard hourly or day rates with direct settlement.'
      }
    ]
  },
  'sensual-massage': {
    slug: 'sensual-massage',
    title: 'Get An Exclusive Erotic Massage Experience to Escape Exhaustion',
    subtitle: 'Sensual body-to-body massage, warm aromatic essential oils, and euphoric stress relief.',
    price: '₹ 15,000 / Session',
    duration: '60 to 90 Minutes',
    image: '/images/assets/Full_Body_Sensual_Massage.jpg',
    description: [
      "There is no doubt that we all feel exhausted after spending a long day at the workplace. Our hectic routine makes us feel tired. There are numerous men out there who do not have the right female partner who can make them feel satisfied at night.",
      "When you choose our erotic massage services in Gurgaon, you escape exhaustion and tiredness entirely. You will feel relaxed, comfortable, and cozy around the girl who will offer you the best massage services.",
      "Using warm essential oils that relax your muscles and give you a pain-free experience, she systematically unlocks tension from your shoulders, back, and legs, culminating in an intense, euphoric climax release.",
      "Eliminate Loneliness and Stress With Happy Ending Massage: Sensual Nuru gliding, skin-to-skin contact, shower intimacy, and complete physical and mental satisfaction guaranteed."
    ],
    features: [
      'Head-to-toe warm essential oil massage',
      'Sensual body-to-body (Nuru-style) gliding',
      'Genital stimulation and intense orgasmic release',
      'Relieves muscular exhaustion and mental stress',
      'Sanitized, hygienic, and complete privacy assured'
    ],
    faqs: [
      {
        q: 'Does the companion bring the massage oils?',
        a: 'Yes, our masseuses arrive equipped with aromatic natural oils, fresh towels, and scented essentials.'
      }
    ]
  },
  'girlfriend-experience': {
    slug: 'girlfriend-experience',
    title: 'Girlfriend Experience (GFE) Escorts in Gurgaon',
    subtitle: 'Genuine emotional connection, tender kisses, and unscripted romance that feels authentically real.',
    price: '₹ 20,000 / Session',
    duration: '2 to 6 Hours',
    image: '/images/assets/image_290x280_4.jpg',
    description: [
      "Escorts can provide you with an experience similar to a girlfriend. But the only difference is that she will be much better with you than your girlfriend! These hot girls can be used to show off in front of your friends and colleagues.",
      "When you go for girlfriend experience service with escorts who are young and confident, you just do not get erotic and physical pleasure but also emotional pleasure.",
      "GFE for Emotional Pleasure: Men don't just want fun; they also have emotional needs. Our companions go on dinner dates with you, hold your hand, laugh at your jokes, cuddle affectionately, and share deep French kisses with genuine warmth.",
      "No rush, no boundaries, no emotional drama—just pure, tender romance where both partners are completely immersed in each other."
    ],
    features: [
      'Passionate French kissing and eye contact',
      'Emotional chemistry and relaxed dinner conversations',
      'Hand holding, gentle caressing, and affectionate cuddles',
      'Unscripted, natural bedroom intimacy',
      'Zero commercial feeling – 100% genuine warmth'
    ],
    faqs: [
      {
        q: 'Can we go out in public together during GFE?',
        a: 'Yes! Our GFE companions are refined, impeccably groomed, and fluent in English, making them delightful company anywhere.'
      }
    ]
  },
  'in-out-call': {
    slug: 'in-out-call',
    title: 'Meet Hot In-Call and Out-Call Girls in Gurgaon',
    subtitle: 'Flexible meeting arrangements: visit our verified private apartments or book swift doorstep hotel outcalls.',
    price: 'From ₹ 15,000',
    duration: 'Flexible Hours',
    image: '/images/assets/image_290x280_5.jpg',
    description: [
      "Men having attraction towards women has been a common thing for years. Men at different age groups look out for girls and women with different preferences. There are college guys, unmarried men, married men, and businessmen who wish to find call girls for their needs.",
      "Erotic Entertainment with Incall Escorts in Gurgaon: Visit our luxurious, fully furnished private apartments in upscale gated societies with secure parking and absolute privacy.",
      "Gurgaon Outcall Escorts for Convenience and Ease: Your chosen companion arrives in an executive unmarked car directly at your hotel room or condominium within 20 to 30 minutes.",
      "Zero advance payment, cash on arrival, and 100% genuine verified profiles guaranteed."
    ],
    features: [
      'Discreet outcalls to all 4-star and 5-star hotels',
      'Luxury sanitized in-call apartments available',
      'Zero advance payment required',
      'Strict privacy protocol for public figures',
      '24/7 round-the-clock booking hotline'
    ],
    faqs: [
      {
        q: 'Which option is better: in-call or outcall?',
        a: 'If you are staying at a hotel, outcall is effortless and seamless. If you live with family, in-call apartments provide private luxury.'
      }
    ]
  }
};

export function generateStaticParams() {
  return [
    { slug: '1-2-3-hours' },
    { slug: 'full-night' },
    { slug: 'sensual-massage' },
    { slug: 'girlfriend-experience' },
    { slug: 'in-out-call' }
  ];
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const serviceSlug = resolvedParams.slug;
  const service = serviceDetails[serviceSlug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFFDF6] text-[#333333]">
      {/* Page Title Bar */}
      <div className="bg-[#671725] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: service.title },
              ]}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-rose-100 font-light max-w-3xl">
            {service.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#671725] text-white text-xs font-bold px-3 py-1.5 rounded shadow">
                  {service.price}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#0B2154]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded shadow">
                  Duration: {service.duration}
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-[#0B2154] mb-4">
                Service Overview &amp; Experience
              </h2>
              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                {service.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Package Inclusions */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-[#0B2154] mb-4">
                  What is Included in This Package
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-gray-700 bg-[#FFFDF6] p-3 rounded-lg border border-gray-100">
                      <CheckCircle size={15} className="text-[#671725] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#0B2154] mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-4">
                    <h4 className="font-bold text-[#671725] text-sm mb-1">{faq.q}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white p-6 rounded-xl border border-gray-100 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Book Package</span>
                <h3 className="text-xl font-black text-[#0B2154] mt-1">{service.title.split(' in ')[0]}</h3>
                <div className="mt-3 bg-[#F9E1E5]/50 p-3 rounded-lg border border-rose-200">
                  <span className="text-xs text-gray-500 block">Package Starting Price</span>
                  <span className="text-2xl font-black text-[#671725]">{service.price}</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={"https://wa.me/" + siteConfig.whatsapp + "?text=Hi%20ALINA%20VIP,%20I%20want%20to%20book%20" + encodeURIComponent(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#13bc18] hover:bg-[#0fa714] text-white text-xs font-bold rounded-lg shadow flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Book on WhatsApp Concierge</span>
                </a>
                <a
                  href={"tel:" + siteConfig.phone}
                  className="w-full py-3 bg-[#671725] hover:bg-[#52121d] text-white text-xs font-bold rounded-lg shadow flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={14} />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-2">
                <p className="flex items-center gap-2">
                  <Shield size={14} className="text-[#671725]" />
                  Zero Advance Payment Guaranteed
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={14} className="text-[#671725]" />
                  20-30 Min Outcall Across Gurgaon
                </p>
                <p className="flex items-center gap-2">
                  <Star size={14} className="text-[#671725]" />
                  100% Genuine Profile Commitment
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/rates"
                  className="block text-center text-xs font-bold text-[#671725] hover:underline"
                >
                  View Full Rates Matrix &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
