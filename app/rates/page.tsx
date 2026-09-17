'use client';

import Link from 'next/link';
import { CheckCircle, Shield, Clock, Star, ArrowRight, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF6] text-[#333333]">
      {/* Page Title Bar */}
      <div className="bg-[#671725] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Rates & Pricing' },
              ]}
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Meet Gurgaon Escorts Girls in Affordable Prices Call {siteConfig.phoneDisplay}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-rose-100 font-light max-w-3xl">
            Up to 2 to 4 hours of fun with beautiful escort girls. In-call and outcall service across all 4-star and 5-star hotels in Gurgaon.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Exact 4 Pricing Packages from Roshni Khanna */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="text-center pb-5 border-b border-gray-100">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">1-2 Hour</span>
                <div className="text-3xl sm:text-4xl font-black text-[#671725] mt-2">₹ 15,000</div>
                <span className="inline-block mt-2 text-xs font-bold text-[#0B2154] bg-[#F9E1E5] px-2.5 py-0.5 rounded-full">
                  1 Shot
                </span>
              </div>
              <p className="text-gray-600 text-xs mt-4 leading-relaxed">
                Up to 2 hours of fun with beautiful escort girls. Call/Email for bookings or more information.
              </p>
              <ul className="space-y-2.5 my-5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Up to 2 hours of fun</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>In-Call &amp; Outcall Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Choose from up to 3 Categories of escorts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Confirm profile before booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Private and discreet service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Erotic Girlfriend Experience</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <a
                href={"tel:" + siteConfig.phone}
                className="block w-full text-center py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg shadow transition-colors"
              >
                Book Now &rarr;
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#671725] shadow-xl flex flex-col justify-between relative scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#671725] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
              Most Popular
            </div>
            <div>
              <div className="text-center pb-5 border-b border-gray-100">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">2-4 Hour</span>
                <div className="text-3xl sm:text-4xl font-black text-[#671725] mt-2">₹ 20,000</div>
                <span className="inline-block mt-2 text-xs font-bold text-[#0B2154] bg-[#F9E1E5] px-2.5 py-0.5 rounded-full">
                  2 Shots
                </span>
              </div>
              <p className="text-gray-600 text-xs mt-4 leading-relaxed">
                Up to 4 hours of fun with beautiful escort girls. Call/Email for bookings or more information.
              </p>
              <ul className="space-y-2.5 my-5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Up to 4 hours of fun</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>In-Call &amp; Outcall Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Choose from up to 5 Categories of escorts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Confirm profile before booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Private and discreet service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Sensual Body Massage &amp; GFE</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <a
                href={"https://wa.me/" + siteConfig.whatsapp + "?text=I%20want%20to%20book%20the%202-4%20Hours%20Package"}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 bg-[#671725] hover:bg-[#52121d] text-white text-xs font-bold rounded-lg shadow transition-colors"
              >
                Book Now &rarr;
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="text-center pb-5 border-b border-gray-100">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">5-6 Hour</span>
                <div className="text-3xl sm:text-4xl font-black text-[#671725] mt-2">₹ 25,000</div>
                <span className="inline-block mt-2 text-xs font-bold text-[#0B2154] bg-[#F9E1E5] px-2.5 py-0.5 rounded-full">
                  3 Shots / Evening
                </span>
              </div>
              <p className="text-gray-600 text-xs mt-4 leading-relaxed">
                Up to 6 hours of fun with beautiful escort girls. Dinner, clubbing, and passionate intimacy.
              </p>
              <ul className="space-y-2.5 my-5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Up to 6 hours of fun</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>In-Call &amp; Outcall Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Choose from all Categories of escorts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Confirm profile before booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Multiple rounds of intimacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Dinner date &amp; lounge companion</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <a
                href={"tel:" + siteConfig.phone}
                className="block w-full text-center py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg shadow transition-colors"
              >
                Book Now &rarr;
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="text-center pb-5 border-b border-gray-100">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Full Time</span>
                <div className="text-3xl sm:text-4xl font-black text-[#671725] mt-2">₹ 30,000+</div>
                <span className="inline-block mt-2 text-xs font-bold text-[#0B2154] bg-[#F9E1E5] px-2.5 py-0.5 rounded-full">
                  Overnight / Full Night
                </span>
              </div>
              <p className="text-gray-600 text-xs mt-4 leading-relaxed">
                Full night adult entertainment. Unlimited rounds of intimacy from 10 PM to 8 AM.
              </p>
              <ul className="space-y-2.5 my-5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Full night adult entertainment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>In-Call &amp; Outcall Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>All VIP and Model Categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Unlimited intimate sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Private and discreet service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#671725] shrink-0 mt-0.5" />
                  <span>Morning breakfast companion</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <a
                href={"https://wa.me/" + siteConfig.whatsapp + "?text=I%20want%20to%20book%20the%20Full%20Night%20Package"}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg shadow transition-colors"
              >
                Book Now &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* What You Get at Roshni Khanna / ALINA VIP */}
        <div className="mt-20 bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-[#671725] uppercase tracking-widest">Unrivaled Quality</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154] mt-1">
              What You Get at {siteConfig.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0B2154]">Gurgaon&apos;s Top Independent Escorts</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                At our agency, you will get the opportunity to spend time with top-rated independent escorts in Gurgaon. You can expect to have a good time with them as they are open to providing services as per your needs.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0B2154]">24X7 Availability</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                No matter what time you need an escort, our services are available 24X7. So, you can choose to book our services anytime and an escort will be sent to your location.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0B2154]">In-Call and Outcall Escort Service</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                You can get both in-call and outcall escort services when you hire us. For in-call, you will visit the escort at her location, and for outcall, she will come to your place or hotel.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
