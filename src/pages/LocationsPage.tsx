import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Star, Crown, Sparkles, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { locations } from '@/data/locations';

export default function LocationsPage() {
  return (
    <>
      <SEO
        title="Escort Service in Gurgaon | Call Girls Locations | ALINA VIP"
        description="ALINA VIP provides premium escort service in all major areas of Gurgaon including DLF Phases, Cyber City, MG Road, Golf Course Road, and more. Book verified call girls near you. Call +91-9996265679."
        keywords="escort service Gurgaon locations, call girls Gurgaon areas, VIP escorts DLF, escorts Cyber City, escorts MG Road"
        canonical="https://alinavip.com/locations"
        breadcrumbs={[
          { name: 'Home', url: 'https://alinavip.com' },
          { name: 'Locations', url: 'https://alinavip.com/locations' },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: 'Locations' }
        ]} 
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gold-pattern.png')] bg-repeat" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
            ★ Escort Service Locations
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Escort Service in <span className="text-gradient-gold">Gurgaon</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-gold-400">ALINA VIP</strong> provides premium 
            <Link to="/services" className="text-gold-400 hover:underline"> escort service in Gurgaon</Link> 
            with verified <Link to="/call-girls" className="text-gold-400 hover:underline">call girls</Link>, 
            <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, and 
            <Link to="/model-escorts" className="text-gold-400 hover:underline"> model escorts</Link> across all 
            major areas. Find <Link to="/call-girls" className="text-gold-400 hover:underline">call girls</Link> 
            near you today.
          </p>
          <div className="gold-divider mx-auto mt-8" />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={`tel:${siteConfig.phone}`} className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <Phone className="w-5 h-5" /> Book Now
            </a>
            <Link to="/contact" className="border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Contact Us
            </Link>
            <a href="https://alinavip.com" target="_blank" className="border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Visit ALINAVIP.com
            </a>
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="py-8 bg-[#1a1a2e] border-y border-gold-500/20">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-gold-500">27+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Areas in Gurgaon</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold-500">500+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Verified Call Girls</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold-500">24/7</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Escort Service</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold-500">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Discreet Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS GRID ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Our Locations</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Call Girls & <span className="text-gradient-gold">Escort Service Areas</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
              <strong>ALINA VIP</strong> provides premium <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
              across all major areas. Select your location below to find 
              <Link to="/call-girls" className="text-gold-600 hover:underline"> call girls</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escorts</Link> near you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1a1a2e] group-hover:text-gold-600 transition-colors">
                      {loc.name}
                    </h3>
                    <span className="text-xs text-gray-400">{loc.area}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  {loc.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gold-600 font-semibold tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Call Girls <ArrowRight size={14} />
                  </span>
                  <span className="text-xs bg-gold-50 text-gold-700 px-3 py-1 rounded-full font-semibold">
                    Available
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR AREAS ===== */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <p className="section-subtitle text-gold-600">Popular Areas</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Most Requested <span className="text-gradient-gold">Escort Locations</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.slice(0, 8).map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bg-white p-5 rounded-2xl text-center border border-gray-100 hover:border-gold-300 hover:shadow-lg transition-all group"
              >
                <MapPin className="w-6 h-6 text-gold-500 mx-auto mb-3" />
                <h4 className="font-bold text-[#1a1a2e] text-sm group-hover:text-gold-600 transition-colors">
                  {loc.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">Call Girls Available</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-gold-600" />
              </div>
              <h4 className="font-bold text-[#1a1a2e] mb-2">Verified Call Girls</h4>
              <p className="text-sm text-gray-600">Every call girl and escort is verified through our rigorous authentication process.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-gold-600" />
              </div>
              <h4 className="font-bold text-[#1a1a2e] mb-2">100% Discreet Service</h4>
              <p className="text-sm text-gray-600">Your privacy is our priority. All bookings are strictly confidential.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-gold-600" />
              </div>
              <h4 className="font-bold text-[#1a1a2e] mb-2">24/7 Availability</h4>
              <p className="text-sm text-gray-600">Our escort service operates round the clock to accommodate your schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEO CONTENT ===== */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
              Escort Service in Gurgaon - All Locations
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>ALINA VIP</strong> is the leading <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>, 
              providing premium <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> across all major areas of 
              the city. Whether you are in <Link to="/locations/cyber-city" className="text-gold-600 hover:underline">Cyber City</Link>, 
              <Link to="/locations/mg-road" className="text-gold-600 hover:underline">MG Road</Link>, 
              <Link to="/locations/golf-course-road" className="text-gold-600 hover:underline">Golf Course Road</Link>, 
              <Link to="/locations/dlf-phase-1" className="text-gold-600 hover:underline">DLF City</Link>, or any other 
              area, our verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              are available to provide you with an unforgettable <strong>escort service</strong> experience.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escorts</Link>, 
              <Link to="/model-escorts" className="text-gold-600 hover:underline"> model escorts</Link>, and 
              <Link to="/vip-escorts" className="text-gold-600 hover:underline">VIP escorts</Link> are available 
              for incall and outcall services across Gurgaon. We understand that our clients value convenience 
              and discretion, which is why we have a presence in every major locality of the city.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              To book <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> in your area, 
              simply select your location from the list above or call us at 
              <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold"> {siteConfig.phoneDisplay}</a>. 
              Our booking team is available 24/7 to assist you with your <strong>escort service</strong> needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Visit <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline font-bold">ALINAVIP.com</a> 
              for more information about our premium <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
              and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> in Gurgaon.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-gold-200 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">
              Book Your <span className="text-gold-600">Escort Service</span> Today
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Find verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escorts</Link> in your area. 
              Call us 24/7 for premium <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.phone}`} className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <Link to="/contact" className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
                Contact Us
              </Link>
              <a href="https://alinavip.com" target="_blank" className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
                Visit ALINAVIP.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
