'use client';

import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

const topHotels = [
  {
    name: 'Pllazio Hotel',
    area: 'Sector 29, City Centre',
    stars: '4 Star Luxury',
    desc: 'Here you will discover proficient escort benefits in Gurgaon close to The Pllazio Hotel with gorgeous independent companions.',
    image: '/images/assets/High_Profile_Escorts_Girl_In_Delhi.jpg',
  },
  {
    name: 'Bristol Hotel',
    area: 'MG Road / Sikanderpur',
    stars: '5 Star Deluxe',
    desc: 'Spice up your night with these gorgeous escorts available near Bristol Hotel in Gurgaon. 24/7 doorstep arrival.',
    image: '/images/assets/Russian_Escorts_Girl_In_Delhi.jpg',
  },
  {
    name: 'The Oberoi Hotel',
    area: 'DLF Phase 2, Udyog Vihar',
    stars: '5 Star Luxury',
    desc: 'Our escort service offers attractive call girl escorts near The Oberoi Hotel and you can choose the girl of your choice.',
    image: '/images/assets/Diverse_Portfolio.jpg',
  },
  {
    name: 'Leela Ambience Hotel',
    area: 'Ambience Island, NH-8',
    stars: '5 Star Deluxe',
    desc: 'Sexy call girl escorts near Leela Ambience Hotel are available 24/7 to entertain their clients with utmost discretion.',
    image: '/images/assets/Escort_Service_In_Mg_Road.jpg',
  },
  {
    name: 'Taj City Centre Hotel',
    area: 'Sector 44, HUDA City Centre',
    stars: '5 Star Luxury',
    desc: 'Indulge in upscale luxury companionship at Taj City Centre with educated, multilingual VIP model companions.',
    image: '/images/assets/Independent_Escorts_Delhi.jpg',
  },
  {
    name: 'Courtyard by Marriott Hotel',
    area: 'Sector 27, Sushant Lok',
    stars: '4 Star Deluxe',
    desc: 'Discreet outcall escort service near Courtyard by Marriott. Fast 20-30 min hotel room delivery with zero advance.',
    image: '/images/assets/VIP_Call_Girls_Delhi.jpg',
  },
  {
    name: 'Hyatt Regency Hotel',
    area: 'Sector 83, NH-8',
    stars: '5 Star Luxury',
    desc: 'Stunning hotel suite companionship near Hyatt Regency Gurgaon. Choose your favourite Russian or Indian escort.',
    image: '/images/assets/Female_Escorts_Delhi.jpg',
  },
  {
    name: 'Hilton Garden Inn Hotel',
    area: 'Baani Square, Sector 50',
    stars: '4 Star Deluxe',
    desc: 'Romantic girlfriend experience and sensual massage companions near Hilton Garden Inn Baani Square.',
    image: '/images/assets/College_Girl_Escorts_Delhi.jpg',
  },
  {
    name: 'Trident Hotel',
    area: 'DLF Phase 2, Udyog Vihar',
    stars: '5 Star Luxury',
    desc: 'Executive business companions and VIP dinner dates for delegates staying at Trident Gurgaon.',
    image: '/images/assets/Air_Hostess_Escorts_Delhi.jpg',
  },
  {
    name: 'ITC Grand Bharat Hotel',
    area: 'Tauru / Hasanpur, Manesar',
    stars: '5 Star Luxury Resort',
    desc: 'Weekend luxury getaway companions for private golf villa stays at ITC Grand Bharat Retreat.',
    image: '/images/assets/Busty_Escorts_Delhi.jpg',
  },
  {
    name: 'Le Meridien Hotel',
    area: 'MG Road, Delhi-Gurgaon Border',
    stars: '5 Star Deluxe',
    desc: 'Sensational international and air hostess escorts delivered directly to your room at Le Meridien.',
    image: '/images/assets/Slim_Escorts_Delhi.jpg',
  },
  {
    name: 'Crowne Plaza Hotel',
    area: 'Sector 29, City Centre',
    stars: '5 Star Business',
    desc: 'First-class companionship for business travellers and tourists staying at Crowne Plaza Today Gurgaon.',
    image: '/images/assets/Housewife_Escorts_Delhi.jpg',
  },
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF6] text-[#333333]">
      {/* Page Title Bar */}
      <div className="bg-[#671725] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Hotels' },
              ]}
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Escorts Services Near 4-5 Stars Hotels in Gurgaon Call {siteConfig.phoneDisplay}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-rose-100 font-light max-w-3xl">
            Relax with your partner in world-class hotels. Safe, couple-friendly accommodation with guaranteed privacy and zero advance fees.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Exact Roshni Hotels Intro */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-sm space-y-4">
          <span className="text-xs font-bold text-[#671725] uppercase tracking-widest block">World-Class Hospitality</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154]">
            Relax With Your Partner in World-Class Hotels
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Gurgaon has some of the best hotels in the country. With world-class infrastructure and best-in-class facilities, hotels in Gurgaon offer a leisureful stay for you. All sorts of hotels are available as per your budget. All the hotels are couple friendly and offer safe accommodation. You do not have to worry about your security and privacy.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            These beautiful companions are ready to join you at your hotel room anytime. Whether you want an intimate night, erotic massage, or girlfriend experience, our escorts arrive within 20 to 30 minutes at your door.
          </p>
        </div>

        {/* Hotels Grid */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#671725] uppercase tracking-widest">Selected Luxury Venues</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154] mt-1">
              View Gurgaon Top Hotels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topHotels.map((hotel) => (
              <div
                key={hotel.name}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#671725] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                      {hotel.stars}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-[#0B2154]/90 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded shadow flex items-center gap-1">
                      <MapPin size={12} className="text-rose-300" />
                      <span>{hotel.area}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-[#0B2154] group-hover:text-[#671725] transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                      {hotel.desc}
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <Clock size={12} /> 20-30 Min Arrival
                      </span>
                      <span>Zero Advance</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={"https://wa.me/" + siteConfig.whatsapp + "?text=Hi,%20I%20am%20at%20" + encodeURIComponent(hotel.name) + "%20and%20want%20to%20book%20an%20escort"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 bg-[#671725] hover:bg-[#52121d] text-white text-xs font-bold rounded-lg shadow transition-colors"
                  >
                    Book Escort to This Hotel &rarr;
                  </a>
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
