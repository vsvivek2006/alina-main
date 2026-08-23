import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/siteConfig';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#1a1a2e]">
      <div className="absolute inset-0 bg-gold-gradient opacity-5" />
      <div className="container-luxury relative text-center">
        <p className="section-subtitle text-gold-400">Ready to Book?</p>
        <h2 className="section-title mb-6 text-white">
          Book Your <span className="text-gradient-gold">Escort Service</span> Today
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Contact <strong className="text-gold-400">ALINA VIP</strong> now to arrange a discreet and premium 
          <Link to="/services" className="text-gold-400 hover:underline"> escort service in Gurgaon</Link>. 
          Book verified <Link to="/call-girls" className="text-gold-400 hover:underline">call girls</Link>, 
          <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, and 
          <Link to="/model-escorts" className="text-gold-400 hover:underline"> model escorts</Link>. 
          Our team is available 24/7 to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${siteConfig.phone}`} className="btn-gold">
            <Phone size={16} /> Call Now
          </a>
          <Link to="/contact" className="btn-outline-gold">Book Online</Link>
          <a href="https://alinavip.com" target="_blank" className="btn-outline-gold">Visit ALINAVIP.com</a>
        </div>
        <p className="text-xs text-gray-500 mt-6">100% Discreet Service | Verified Call Girls | 24/7 Availability</p>
      </div>
    </section>
  );
}
