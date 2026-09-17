'use client';

import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

const allCategories = [
  {
    name: 'Russian Escorts in Gurgaon',
    slug: 'russian-call-girls',
    image: '/images/assets/Russian_Escorts_Girl_In_Delhi.jpg',
    desc: 'Meet Hot Russian Escorts in Gurgaon who will be happy to accompany you anywhere you want. Girlfriend experience or luxury hotel dates.',
  },
  {
    name: 'Independent Escorts in Gurgaon',
    slug: 'independent-girls',
    image: '/images/assets/Independent_Escorts_Delhi.jpg',
    desc: 'Self-managed independent companions offering genuine affection, unscripted romance, and non-commercial encounters.',
  },
  {
    name: 'Model Escorts in Gurgaon',
    slug: 'models',
    image: '/images/assets/High_Profile_Escorts_Girl_In_Delhi.jpg',
    desc: 'Fashion, commercial, and ramp models who possess statuesque height, charismatic elegance, and high-society charm.',
  },
  {
    name: 'Foreigner Call Girls Gurgaon',
    slug: 'russian-call-girls',
    image: '/images/assets/image_270x450_14.jpg',
    desc: 'International models visiting Gurgaon on luxury tour circuits. Open-minded, seductive, and cultured companions.',
  },
  {
    name: 'Young Call Girls Gurgaon',
    slug: 'college-girls',
    image: '/images/assets/image_270x450_15.jpg',
    desc: 'Fresh, enthusiastic, and passionate young call girls providing vibrant romance and energetic bedtime moments.',
  },
  {
    name: 'Indian Escorts in Gurgaon',
    slug: 'independent-girls',
    image: '/images/assets/Diverse_Portfolio.jpg',
    desc: 'Traditional desi beauties with warm Indian manners, affectionate touch, and caring bedroom intimacy.',
  },
  {
    name: 'Housewife Escorts in Gurgaon',
    slug: 'housewife-escorts',
    image: '/images/assets/Housewife_Escorts_Delhi.jpg',
    desc: 'Sensual, mature, and deeply passionate married housewives seeking discreet excitement and fulfilling intimacy.',
  },
  {
    name: 'Air Hostess Escorts in Gurgaon',
    slug: 'air-hostess',
    image: '/images/assets/Air_Hostess_Escorts_Delhi.jpg',
    desc: 'Polished, well-groomed cabin crew companions with worldly conversation, fluent English, and sophisticated style.',
  },
  {
    name: 'VIP Call Girls in Gurgaon',
    slug: 'vip-call-girls',
    image: '/images/assets/VIP_Call_Girls_Delhi.jpg',
    desc: 'Elite companions chosen specifically for corporate executives, high-net-worth individuals, and business delegates.',
  },
  {
    name: 'College Call Girls in Gurgaon',
    slug: 'college-girls',
    image: '/images/assets/College_Girl_Escorts_Delhi.jpg',
    desc: 'Young university students providing friendly, playful, and cheerful companionship without any commercial rush.',
  },
  {
    name: 'High Profile Escorts in Gurgaon',
    slug: 'high-profile-girls',
    image: '/images/assets/High_Profile_Escorts_Girl_In_Delhi.jpg',
    desc: 'Exclusive socialite companions who excel as formal dinner dates, luxury party escorts, and confidential partners.',
  },
  {
    name: 'Punjabi Call Girls in Gurgaon',
    slug: 'punjabi-girls',
    image: '/images/assets/image_270x450_16.jpg',
    desc: 'Bubbly, fair, and voluptuous Punjabi kudi companions known for their cheerful warmth and spirited intimacy.',
  },
  {
    name: 'Busty Escorts in Gurgaon',
    slug: 'vip-call-girls',
    image: '/images/assets/Busty_Escorts_Delhi.jpg',
    desc: 'Curvaceous bombshells with generous figures and full cleavage, delivering supreme tactile satisfaction.',
  },
  {
    name: 'Slim Escorts in Gurgaon',
    slug: 'college-girls',
    image: '/images/assets/Slim_Escorts_Delhi.jpg',
    desc: 'Petite, slender companions with dancer bodies and tight waists, offering agile and delicate erotic moments.',
  },
  {
    name: 'Affordable Escorts in Gurgaon',
    slug: 'independent-girls',
    image: '/images/assets/image_270x450_17.jpg',
    desc: 'High value without compromising hygiene or genuineness. Real girls at budget-friendly standard rates.',
  },
  {
    name: 'Celebrity Escorts in Gurgaon',
    slug: 'celebrity-escorts',
    image: '/images/assets/image_270x450_13.jpg',
    desc: 'Screen actresses, social media influencers, and pageant stars for those demanding the absolute zenith of luxury.',
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF6] text-[#333333]">
      {/* Page Title Bar */}
      <div className="bg-[#671725] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Categories' },
              ]}
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Now You Can Meet Different Categories of Escorts Call {siteConfig.phoneDisplay}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-rose-100 font-light max-w-3xl">
            Escorts from all over the world. Beautiful, independent, and professional escorts available 24/7 for your pleasure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Exact Roshni Categories Intro */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-sm space-y-4">
          <span className="text-xs font-bold text-[#671725] uppercase tracking-widest block">Diverse Companion Portfolio</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154]">
            Different Escorts in Gurgaon for Your Pleasure
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Escorts in Gurgaon are one of the best in the world. We cater to the demands and needs of our clients for all sorts of girls. We provide girls as well as accommodation for pleasure. As a lot of bachelors live in Gurgaon and nearby areas, they need girls to satisfy their need for intimacy and physical pleasure. Beautiful, independent, and professional escorts are available for their assistance.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            From statuesque Russian supermodels and playful college students to sophisticated air hostesses, {siteConfig.name} curates Gurgaon&apos;s most authentic and verified escort portfolio.
          </p>
        </div>

        {/* Categories Grid */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#671725] uppercase tracking-widest">Browse by Category</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154] mt-1">
              View Top Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allCategories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#671725] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                      Verified
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-extrabold text-[#0B2154] group-hover:text-[#671725] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-gray-600 text-xs mt-2 leading-relaxed line-clamp-3">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={"/category/" + cat.slug}
                    className="block w-full text-center py-2 bg-[#671725] hover:bg-[#52121d] text-white text-xs font-bold rounded-lg shadow transition-colors"
                  >
                    View Profiles &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
