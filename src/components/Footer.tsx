'use client';

import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1: About ALINA VIP */}
          <div className="space-y-4">
            <h3 className="font-sans font-black text-2xl tracking-wide text-white">
              ALINA <span className="text-[#FFD700] font-light">VIP</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              ALINA VIP is Gurgaon’s top-rated luxury escort agency. We offer in-person verified Indian, Russian, and independent models for 5-star hotel and suite rendezvous across Cyber City, Golf Course Road, and Delhi NCR.
            </p>
            <div className="pt-2">
              <a
                href={"tel:" + siteConfig.phone}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD700] hover:underline"
              >
                <Phone size={15} />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 border-b border-gray-800 pb-2">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <Link href="/category/russian-call-girls" className="text-gray-400 hover:text-white transition-colors">
                  Russian Call Girls
                </Link>
              </li>
              <li>
                <Link href="/category/vip-call-girls" className="text-gray-400 hover:text-white transition-colors">
                  VIP Call Girls
                </Link>
              </li>
              <li>
                <Link href="/category/high-profile-girls" className="text-gray-400 hover:text-white transition-colors">
                  High Profile Call Girls
                </Link>
              </li>
              <li>
                <Link href="/category/college-girls" className="text-gray-400 hover:text-white transition-colors">
                  College Girls
                </Link>
              </li>
              <li>
                <Link href="/category/air-hostess" className="text-gray-400 hover:text-white transition-colors">
                  Air Hostess Escorts
                </Link>
              </li>
              <li>
                <Link href="/category/celebrity-escorts" className="text-gray-400 hover:text-white transition-colors">
                  Celebrity Call Girls
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#FFD700] font-semibold hover:underline">
                  View All Categories &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 border-b border-gray-800 pb-2">
              Locations
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <Link href="/locations/aerocity" className="text-gray-400 hover:text-white transition-colors">
                  Aerocity Escorts
                </Link>
              </li>
              <li>
                <Link href="/locations/cyber-city" className="text-gray-400 hover:text-white transition-colors">
                  Cyber City Escorts
                </Link>
              </li>
              <li>
                <Link href="/locations/golf-course-road" className="text-gray-400 hover:text-white transition-colors">
                  Golf Course Road Escorts
                </Link>
              </li>
              <li>
                <Link href="/locations/mg-road" className="text-gray-400 hover:text-white transition-colors">
                  MG Road Call Girls
                </Link>
              </li>
              <li>
                <Link href="/locations/dwarka" className="text-gray-400 hover:text-white transition-colors">
                  Dwarka Escorts
                </Link>
              </li>
              <li>
                <Link href="/locations/mahipalpur" className="text-gray-400 hover:text-white transition-colors">
                  Mahipalpur Escorts
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-[#FFD700] font-semibold hover:underline">
                  View All Locations &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-base mb-5 border-b border-gray-800 pb-2">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2.5 text-gray-400">
                <MapPin size={16} className="text-[#FFD700] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <Phone size={16} className="text-[#FFD700] flex-shrink-0" />
                <a href={"tel:" + siteConfig.phone} className="hover:text-white transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <MessageCircle size={16} className="text-[#25D366] flex-shrink-0" />
                <a
                  href={"https://wa.me/" + siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Concierge
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <Mail size={16} className="text-[#FFD700] flex-shrink-0" />
                <a href={"mailto:" + siteConfig.email} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <Clock size={16} className="text-[#FFD700] flex-shrink-0" />
                <span>24/7 Available Everyday</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Age Verification Required Banner matching Roshni Khanna */}
        <div className="border-t border-gray-800 pt-6 pb-6 text-center text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
          <p className="font-bold text-gray-300 mb-1">Age Verification Required (18+ Only)</p>
          <p>
            This website is intended strictly for consenting adults aged 18 and older. By accessing this platform, you certify that you are of legal age in your jurisdiction and agree to our terms and privacy policy. All models featured on this site are independent consenting adults aged 21 or older.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
