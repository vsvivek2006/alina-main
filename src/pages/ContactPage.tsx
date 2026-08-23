import { Phone, MapPin, Mail, MessageCircle, Clock, Star, Shield, Crown, ArrowRight, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import { siteConfig } from '@/data/siteConfig';
import { locations } from '@/data/locations';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Escort Service in Gurgaon | VIP Call Girls Booking"
        description="Contact ALINA VIP for premium escort service in Gurgaon. Book VIP call girls, Russian escorts, and model escorts. Call +91-9996265679 or fill out our contact form. Available 24/7 with 100% discreet service."
        keywords="contact escort service Gurgaon, book call girls Gurgaon, VIP escort booking, Russian escorts contact, model escorts Gurgaon, escort service phone number Gurgaon"
        canonical="https://alinavip.com/contact"
        breadcrumbs={[
          { name: 'Home', url: 'https://alinavip.com' },
          { name: 'Contact', url: 'https://alinavip.com/contact' },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: 'Contact' }
        ]} 
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gold-pattern.png')] bg-repeat" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="text-center">
            <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
              ★ Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Book Your <span className="text-gradient-gold">Escort Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact <strong className="text-gold-400">ALINA VIP</strong> for premium 
              <Link to="/services" className="text-gold-400 hover:underline"> escort service in Gurgaon</Link>. 
              Book <Link to="/call-girls" className="text-gold-400 hover:underline">VIP call girls</Link>, 
              <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, and 
              <Link to="/model-escorts" className="text-gold-400 hover:underline"> model escorts</Link> with 100% discretion.
            </p>
            <div className="gold-divider mx-auto mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ===== LEFT COLUMN - CONTACT INFO ===== */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-gradient-to-r from-gold-50 to-amber-50 p-8 rounded-2xl border-2 border-gold-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-600/30">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-wider uppercase text-gold-600 font-bold mb-1">Call Us 24/7</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-2xl text-[#1a1a2e] hover:text-gold-600 transition-colors font-bold">
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available anytime for <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> bookings</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#25D366]/30">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-wider uppercase text-gray-500 font-bold mb-1">WhatsApp</h3>
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-2xl text-[#1a1a2e] hover:text-[#25D366] transition-colors font-bold">
                      Chat Now
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Quick and discreet messaging for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> booking</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1a1a2e] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#1a1a2e]/30">
                    <MapPin size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-wider uppercase text-gray-500 font-bold mb-1">Location</h3>
                    <p className="text-lg text-[#1a1a2e] font-semibold leading-relaxed">{siteConfig.address}</p>
                    <p className="text-sm text-gray-500 mt-1">Serving all areas of Gurgaon for <Link to="/services" className="text-gold-600 hover:underline">escort service</Link></p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Link to="/locations/cyber-city" className="text-xs bg-gold-100 text-gold-700 px-3 py-1 rounded-full hover:bg-gold-200 transition-colors">
                        Cyber City Call Girls
                      </Link>
                      <Link to="/locations/mg-road" className="text-xs bg-gold-100 text-gold-700 px-3 py-1 rounded-full hover:bg-gold-200 transition-colors">
                        MG Road Escorts
                      </Link>
                      <Link to="/locations/golf-course-road" className="text-xs bg-gold-100 text-gold-700 px-3 py-1 rounded-full hover:bg-gold-200 transition-colors">
                        Golf Course Road Escorts
                      </Link>
                      <Link to="/locations/dlf-phase-1" className="text-xs bg-gold-100 text-gold-700 px-3 py-1 rounded-full hover:bg-gold-200 transition-colors">
                        DLF City Call Girls
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-600/30">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-wider uppercase text-gold-600 font-bold mb-1">Operating Hours</h3>
                    <p className="text-2xl text-[#1a1a2e] font-bold">24 Hours, 7 Days</p>
                    <p className="text-sm text-gray-500 mt-1">Always available for <Link to="/services" className="text-gold-600 hover:underline">VIP escort service</Link> bookings</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <Shield className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-[#1a1a2e]">100% Discreet</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <CheckCircle className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-[#1a1a2e]">Verified Call Girls</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <Star className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-[#1a1a2e]">4.9/5 Rating</p>
                </div>
              </div>

              {/* External Link */}
              <div className="text-center">
                <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:text-gold-700 font-semibold flex items-center justify-center gap-2">
                  Visit ALINAVIP.com <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* ===== RIGHT COLUMN - CONTACT FORM ===== */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d1b0e] p-8 md:p-10 rounded-3xl shadow-2xl border border-gold-500/20">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-3">
                  Book Your <span className="text-gold-400">Escort Service</span>
                </h2>
                <p className="text-gray-400 text-sm">
                  Fill out the form and we'll connect you with the best 
                  <Link to="/call-girls" className="text-gold-400 hover:underline"> call girls in Gurgaon</Link>
                </p>
                <div className="gold-divider mx-auto mt-4" />
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your booking request. We will contact you shortly with available call girls.'); }}>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors" 
                    placeholder="Enter your name" 
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors" 
                    placeholder="Enter your phone number" 
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Email (Optional)</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors" 
                    placeholder="Enter your email" 
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Service Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-gold-500 focus:outline-none transition-colors" defaultValue="">
                    <option value="" disabled className="text-gray-500">Select Service</option>
                    <option value="vip-escorts" className="text-[#1a1a2e]">VIP Escorts</option>
                    <option value="russian-escorts" className="text-[#1a1a2e]">Russian Escorts</option>
                    <option value="model-escorts" className="text-[#1a1a2e]">Model Escorts</option>
                    <option value="housewife-escorts" className="text-[#1a1a2e]">Housewife Escorts</option>
                    <option value="college-girls" className="text-[#1a1a2e]">College Girls</option>
                    <option value="independent-escorts" className="text-[#1a1a2e]">Independent Escorts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Location in Gurgaon</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-gold-500 focus:outline-none transition-colors" defaultValue="">
                    <option value="" disabled className="text-gray-500">Select Location</option>
                    {locations.map((loc) => (
                      <option key={loc.slug} value={loc.slug} className="text-[#1a1a2e]">{loc.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none" 
                    placeholder="Tell us about your requirements..." 
                  />
                </div>

                <button type="submit" className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-600/30 hover:shadow-gold-600/50 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Book Now
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  🔒 Your information is 100% confidential and secure
                </p>
                <p className="text-center text-xs text-gray-500">
                  Visit <a href="https://alinavip.com" target="_blank" className="text-gold-400 hover:underline font-semibold">ALINAVIP.com</a>
                </p>
              </form>
            </div>
          </div>

          {/* ===== MAP WITH LOCATIONS ===== */}
          <div className="mt-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="aspect-[21/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={64} className="text-gold-500/50 mx-auto mb-4" />
                  <h4 className="text-2xl text-white font-bold">Gurgaon, Haryana</h4>
                  <p className="text-gray-400 text-sm mt-2">Serving all major areas for <Link to="/services" className="text-gold-400 hover:underline">escort service</Link></p>
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    <Link to="/locations/cyber-city" className="bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 px-4 py-2 rounded-full text-sm transition-colors border border-gold-500/20">
                      Cyber City Call Girls
                    </Link>
                    <Link to="/locations/mg-road" className="bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 px-4 py-2 rounded-full text-sm transition-colors border border-gold-500/20">
                      MG Road Escorts
                    </Link>
                    <Link to="/locations/golf-course-road" className="bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 px-4 py-2 rounded-full text-sm transition-colors border border-gold-500/20">
                      Golf Course Road Escorts
                    </Link>
                    <Link to="/locations/dlf-phase-1" className="bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 px-4 py-2 rounded-full text-sm transition-colors border border-gold-500/20">
                      DLF City Call Girls
                    </Link>
                    <Link to="/locations/sohna-road" className="bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 px-4 py-2 rounded-full text-sm transition-colors border border-gold-500/20">
                      Sohna Road Escorts
                    </Link>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Visit <a href="https://alinavip.com" target="_blank" className="text-gold-400 hover:underline font-semibold">ALINAVIP.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div className="mt-12 bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-center text-xl font-bold text-[#1a1a2e] mb-6">
              Quick Links to <span className="text-gold-600">Escort Services</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <Link to="/russian-escorts" className="text-center p-3 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-200 hover:border-gold-300 group">
                <Crown className="w-6 h-6 text-gold-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-gold-600">Russian Escorts</span>
              </Link>
              <Link to="/model-escorts" className="text-center p-3 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-200 hover:border-gold-300 group">
                <Sparkles className="w-6 h-6 text-gold-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-gold-600">Model Escorts</span>
              </Link>
              <Link to="/housewife-escorts" className="text-center p-3 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-200 hover:border-gold-300 group">
                <Users className="w-6 h-6 text-gold-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-gold-600">Housewife Escorts</span>
              </Link>
              <Link to="/college-girls" className="text-center p-3 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-200 hover:border-gold-300 group">
                <Users className="w-6 h-6 text-gold-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-gold-600">College Girls</span>
              </Link>
              <Link to="/independent-escorts" className="text-center p-3 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-200 hover:border-gold-300 group">
                <Star className="w-6 h-6 text-gold-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-gold-600">Independent Escorts</span>
              </Link>
              <Link to="/vip-escorts" className="text-center p-3 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-200 hover:border-gold-300 group">
                <Crown className="w-6 h-6 text-gold-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700 group-hover:text-gold-600">VIP Escorts</span>
              </Link>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">Visit <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline font-semibold">ALINAVIP.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
