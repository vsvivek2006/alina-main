'use client';

import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

const topLocations = [
  {
    name: 'Escorts Service in MG Road',
    slug: 'mg-road',
    desc: 'Premier commercial hub with 20-min outcalls to luxury hotels, malls, and executive suites on MG Road.',
  },
  {
    name: 'Escorts Service in Mahipalpur',
    slug: 'mahipalpur',
    desc: 'Fast airport hotel outcalls near Indira Gandhi International Airport for travelers and business stopovers.',
  },
  {
    name: 'Escorts Service in Aerocity',
    slug: 'aerocity',
    desc: 'Elite 5-star hotel accompaniment to JW Marriott, Andaz, Pullman, and Roseate House in Aerocity Hospitality District.',
  },
  {
    name: 'Escorts Service in Dwarka',
    slug: 'dwarka',
    desc: 'Discreet residential and hotel outcalls across Dwarka Sectors with verified independent call girls.',
  },
  {
    name: 'Escorts Service in Cyber City',
    slug: 'cyber-city',
    desc: 'Corporate VIP models and dinner date companions for multinational business leaders in DLF Cyber City.',
  },
  {
    name: 'Escorts Service in Golf Course Road',
    slug: 'golf-course-road',
    desc: 'Ultra-luxury high-profile escort service serving DLF The Camellias, Magnolias, Aralias, and One Horizon Center.',
  },
  {
    name: 'Escorts Service in Sohna Road',
    slug: 'sohna-road',
    desc: 'Trusted female escorts for business suites, IT tech parks, and luxury resorts across Sohna Road corridor.',
  },
  {
    name: 'Escorts Service in DLF Phase 1-5',
    slug: 'dlf-phase-1',
    desc: 'Discreet outcall coverage across all premier DLF sectors, Galleria market, and exclusive residential clubs.',
  },
];

export default function LocationGridSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            Top Escorts Service Locations
          </h2>
          <div className="w-16 h-1 bg-[#671725] mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-gray-600 text-sm md:text-base">
            Prompt 20 to 30 minute dispatch to premier luxury hotels, serviced residences, and private suites across Gurgaon &amp; Delhi NCR
          </p>
        </div>

        {/* 8 Cards Grid matching Roshni Khanna location-section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topLocations.map((loc, idx) => (
            <Link
              key={idx}
              href={"/locations/" + loc.slug}
              className="location-section-card group block"
            >
              <div className="w-10 h-10 rounded-full bg-white mx-auto mb-3 flex items-center justify-center text-[#671725] shadow-xs group-hover:bg-[#671725] group-hover:text-white transition-colors duration-300">
                <MapPin size={18} />
              </div>
              <h3 className="font-bold text-[#671725] text-base mb-2 group-hover:underline">
                {loc.name}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">
                {loc.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#671725] group-hover:gap-2 transition-all">
                View Profiles <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>

        {/* Explore All Locations Button */}
        <div className="text-center mt-12">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#671725] hover:bg-[#52121d] text-white text-xs font-semibold rounded shadow transition-all duration-300"
          >
            <span>Explore All 108 Gurgaon &amp; NCR Locations</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
