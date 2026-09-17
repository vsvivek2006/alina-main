'use client';

import Link from 'next/link';
import { Phone, MessageCircle, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function EditorialGuideSection() {
  return (
    <div className="space-y-0">

      {/* 1. Top Class Gurgaon Escorts Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-6">
              Top Class Gurgaon Escorts Service Available 24/7 to Accompany You
            </h2>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                Welcome to the world of fantasies and romance! At ALINA VIP{' '}
                <Link href="/" className="text-[#671725] font-semibold hover:underline">
                  Gurgaon Escorts service
                </Link>{' '}
                agency, we are dedicated to providing our clients with the ultimate intimate experiences. We have a selection of high profile – independent female escorts. These charismatic girls are here for 24/7 in-call and outcall service. Our carefully selected Gurgaon escorts include women from various backgrounds, each possessing their unique charm, personality, and special talents.
              </p>
              <p>
                These lovely and high class women are available for discreet and private escort service. From Russian girls to high profile and model girls, our diverse portfolio of independent female escorts in Gurugram allows you to select a partner who perfectly complements your taste and preferences. Whenever you hire our escorts, you will feel comfortable, cosy and warm. You must not look further than these exotic and hot models in town.{' '}
                <strong>Choose from over 100 top Gurgaon escorts on our website</strong>, or contact us by phone or WhatsApp for immediate reservation.
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4 text-sm font-semibold text-[#671725]">
              <a href={"tel:" + siteConfig.phone} className="inline-flex items-center gap-1.5 hover:underline">
                <Phone size={15} /> Call: {siteConfig.phoneDisplay}
              </a>
              <span className="text-gray-300">|</span>
              <a
                href={"https://wa.me/" + siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#25D366] hover:underline"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
              <span className="text-gray-300">|</span>
              <a href={"mailto:" + siteConfig.email} className="inline-flex items-center gap-1.5 hover:underline text-gray-700">
                <Mail size={15} /> {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sensual Getaway Wine Banner (matching Roshni Khanna row #671725) */}
      <section className="py-16 md:py-20 bg-[#671725] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#FFD700] text-xs font-semibold uppercase tracking-wider">
              Exclusive Companionship
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              A Sensual Getaway with Sexy Gurgaon Escorts
            </h2>
            <div className="w-16 h-1 bg-[#FFD700] mx-auto rounded-full" />
            <p className="text-gray-100 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Life can be hectic, and everyone deserves an escape. Our Gurgaon escorts provide a warm sanctuary where you can unwind, release daily stress, and immerse yourself in luxurious affection. Whether it is an evening dinner date at DLF CyberHub, an intimate hotel suite rendezvous, or a full overnight stay, our verified models provide complete devotion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="bg-white/10 p-5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-base mb-1.5 flex items-center gap-2">
                  <Sparkles size={16} className="text-[#FFD700]" /> Hourly Rendezvous
                </h4>
                <p className="text-xs text-gray-200">
                  Ideal for quick breaks, afternoon relaxation, or brief business transit dates.
                </p>
              </div>

              <div className="bg-white/10 p-5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-base mb-1.5 flex items-center gap-2">
                  <Sparkles size={16} className="text-[#FFD700]" /> Full-Night Stays
                </h4>
                <p className="text-xs text-gray-200">
                  Indulge in an uninterrupted overnight journey with passionate, sensual company.
                </p>
              </div>

              <div className="bg-white/10 p-5 rounded-xl border border-white/10">
                <h4 className="font-bold text-white text-base mb-1.5 flex items-center gap-2">
                  <Sparkles size={16} className="text-[#FFD700]" /> Social Travel Dates
                </h4>
                <p className="text-xs text-gray-200">
                  Cultured, educated models ready to accompany you to luxury resorts and corporate galas.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={"https://wa.me/" + siteConfig.whatsapp + "?text=Hi%20ALINA%20VIP,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20escort."}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#671725] font-bold text-sm rounded shadow hover:bg-gray-100 transition-colors"
              >
                <MessageCircle size={16} />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Agency & Limitless Fun Section */}
      <section className="py-16 md:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
                Why Choose ALINA VIP Gurgaon Escort Agency?
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Unlike unverified classified sites and scam listings, ALINA VIP operates on principles of genuine hospitality, strict health standards, verified identity screening, and zero advance payment demands. When you book with us, you enjoy guaranteed photo authenticity, prompt 20-30 min arrival, and total confidentiality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#671725] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#111827] text-sm mb-1">In-Call &amp; Out-Call Flexibility</h4>
                    <p className="text-xs text-gray-600">Discreet 5-star hotel visits or private sanitized in-call apartments in Gurgaon.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#671725] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#111827] text-sm mb-1">Intimate Girlfriend Experience (GFE)</h4>
                    <p className="text-xs text-gray-600">Deep emotional warmth, sweet cuddles, French kissing, and genuine companionship.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#671725] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#111827] text-sm mb-1">Sensual Body Massage</h4>
                    <p className="text-xs text-gray-600">Erotic soothing touch designed to eliminate stress and revitalize your energy.</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#671725] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#111827] text-sm mb-1">Double the Fun &amp; Duo Services</h4>
                    <p className="text-xs text-gray-600">Experience the ultimate fantasy with two gorgeous models for couple or duo encounters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
