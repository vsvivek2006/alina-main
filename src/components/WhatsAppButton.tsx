'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function WhatsAppButton() {
  // fixed bottom contact bar

  

  return (
    <>
      {/* 1. Desktop Side Floating Icons (Right edge, vertically centered) */}
      <aside
        aria-label="Quick Contact Options"
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 p-1.5 bg-black/40 backdrop-blur-md rounded-l-2xl border-l-2 border-y-2 border-primary-wine/40 shadow-2xl transition-all duration-300"
      >
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
            'Hello ALINA VIP, I want to book an escort in Gurgaon.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#13bc18] hover:bg-[#0fa814] text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 group"
          aria-label="Chat on WhatsApp"
          title="WhatsApp Concierge"
        >
          <MessageCircle size={24} className="fill-white/20 group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={`tel:${siteConfig.phone}`}
          className="w-12 h-12 bg-[#0b2154] hover:bg-[#07173b] text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 group"
          aria-label="Direct Phone Hotline"
          title="Direct Phone Hotline"
        >
          <Phone size={22} className="group-hover:scale-110 transition-transform text-luxury-gold" />
        </a>
      </aside>

      {/* 2. Mobile Sticky Bottom Bar (Exact Roshni Khanna fix-icon2 layout: 50% WhatsApp + 50% Call Now) */}
      <nav
        id="callButton"
        aria-label="Mobile Contact Actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-stretch h-14 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-transform duration-300"
      >
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
            'Hello ALINA VIP, I need Escort Service in Gurgaon.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-[#13bc18] hover:bg-[#0fa814] active:bg-[#0e9612] text-white flex items-center justify-center gap-2 text-[15px] font-semibold tracking-wide border-r border-white/20 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} className="fill-white/20" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${siteConfig.phone}`}
          className="w-1/2 bg-[#0b2154] hover:bg-[#07173b] active:bg-[#05112c] text-white flex items-center justify-center gap-2 text-[15px] font-semibold tracking-wide transition-colors"
          aria-label="Call Hotline Now"
        >
          <Phone size={19} className="text-luxury-gold" />
          <span>Call Now</span>
        </a>
      </nav>
    </>
  );
}
