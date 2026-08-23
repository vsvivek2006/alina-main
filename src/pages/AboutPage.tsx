import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Lock, BadgeCheck, Star, Award, Users, Target, Eye, Crown, Gem, Sparkles, CheckCircle, Clock, MapPin, Heart, Coffee, Sunset, Music, Film, Compass, Gift, DollarSign } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About ALINA VIP | Premium Escort Service in Gurgaon | Call Girls"
        description="Learn about ALINA VIP, Gurgaon's premier escort service. Discover our mission, values, and commitment to discretion, quality, and client satisfaction. Verified call girls available 24/7."
        keywords="about ALINA VIP, escort service Gurgaon, premium call girls Gurgaon, VIP escort service, Russian escorts Gurgaon, model escorts"
        canonical="https://alinavip.com/about"
        breadcrumbs={[
          { name: 'Home', url: 'https://alinavip.com' },
          { name: 'About', url: 'https://alinavip.com/about' },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: 'About Us' }
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
              ★ About ALINA VIP
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Story of <span className="text-gradient-gold">ALINA VIP</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gurgaon's most trusted <strong className="text-gold-400">escort service</strong> offering verified 
              <Link to="/call-girls" className="text-gold-400 hover:underline"> call girls</Link>, 
              <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, 
              and <Link to="/model-escorts" className="text-gold-400 hover:underline"> model escorts</Link> 
              with 100% discretion and professionalism.
            </p>
            <div className="gold-divider mx-auto mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="max-w-4xl prose-luxury">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                Welcome to ALINA VIP – <span className="text-gold-600">Gurgaon's Premier Escort Service</span>
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>ALINA VIP</strong> is Gurgaon's leading <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>, 
                offering premium <Link to="/call-girls" className="text-gold-600 hover:underline">VIP call girls</Link>, 
                <Link to="/russian-escorts" className="text-gold-600 hover:underline"> Russian escorts</Link>, 
                and <Link to="/model-escorts" className="text-gold-600 hover:underline"> elite models</Link>. 
                Our <strong>escort service in Gurgaon</strong> is designed for discerning gentlemen who value 
                discretion, quality, and professionalism.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Founded with a vision to redefine the <strong>escort service in Gurgaon</strong>, we have established 
                ourselves as the city's most trusted name in luxury <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link>. 
                Our verified profiles, rigorous screening process, and unwavering commitment to privacy set us apart 
                from other <Link to="/services" className="text-gold-600 hover:underline">escort services in Gurgaon</Link>.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Story – The Birth of Gurgaon's Best Escort Service
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>ALINA VIP</strong> was founded with a singular vision: to redefine the 
                <Link to="/services" className="text-gold-600 hover:underline"> escort service</Link> experience 
                in Gurgaon by providing a service that is sophisticated, professional, and uncompromising in its 
                commitment to quality and discretion. In an industry often characterised by inconsistency and a lack 
                of professionalism, we saw an opportunity to create something different — a service that operates 
                with the standards of a luxury hospitality brand.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our journey began with a simple observation: discerning gentlemen in Gurgaon deserved an 
                <Link to="/services" className="text-gold-600 hover:underline"> escort service</Link> that matched 
                their lifestyle and expectations. The city had become one of India's most cosmopolitan centres, home 
                to business leaders, entrepreneurs, and professionals from around the world. Yet the options for 
                quality <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> were 
                limited. <strong>ALINA VIP</strong> was created to fill this gap.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From the outset, we made several key decisions that would shape our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>. 
                We decided that every <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> 
                in our portfolio would undergo a thorough verification process, ensuring that profiles were genuine 
                and accurate. We committed to complete discretion in all client interactions, recognising that privacy 
                is a fundamental need for our clientele. And we chose to focus on quality over quantity, maintaining 
                a curated selection of <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> 
                rather than an exhaustive but inconsistent roster.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Why Choose ALINA VIP for Escort Service in Gurgaon?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <BadgeCheck className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">Verified Call Girls & Escorts</h4>
                    <p className="text-gray-600">Every <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escort</Link> profile is verified through ID checks, photo authentication, and background screening for your safety and peace of mind.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <ShieldCheck className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">100% Discreet Escort Service</h4>
                    <p className="text-gray-600">Your privacy is our priority. All client information and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> bookings are strictly confidential. Our <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> are trained in the art of discretion.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Crown className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">VIP & Premium Call Girls</h4>
                    <p className="text-gray-600">Our curated selection includes <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escorts</Link>, 
                    <Link to="/model-escorts" className="text-gold-600 hover:underline"> model escorts</Link>, 
                    <Link to="/housewife-escorts" className="text-gold-600 hover:underline"> housewife escorts</Link>, and 
                    <Link to="/college-girls" className="text-gold-600 hover:underline"> college call girls</Link> – all verified and elite.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Gem className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">Premium Escort Experience</h4>
                    <p className="text-gray-600">From <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> at luxury hotels to outcall service at your location, we ensure a seamless, high-end <strong>escort service</strong> experience every time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Clock className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">24/7 Call Girls Service</h4>
                    <p className="text-gray-600">Our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> operates 24/7. Book <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> anytime – day or night.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <MapPin className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">All Gurgaon Locations</h4>
                    <p className="text-gray-600">We provide <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> in <Link to="/locations/cyber-city" className="text-gold-600 hover:underline">Cyber City</Link>, <Link to="/locations/mg-road" className="text-gold-600 hover:underline">MG Road</Link>, <Link to="/locations/golf-course-road" className="text-gold-600 hover:underline">Golf Course Road</Link>, <Link to="/locations/dlf-phase-1" className="text-gold-600 hover:underline">DLF</Link>, and all major areas.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Mission – Excellence in Escort Service
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to provide the finest <strong>escort service in Gurgaon</strong>, characterised 
                by verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>, 
                exceptional <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>, and 
                unwavering discretion. We strive to create experiences that are memorable, sophisticated, and 
                tailored to the unique preferences of each client booking our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe that a great <strong>escort service</strong> is about more than just physical beauty. 
                It is about the complete experience of spending time with someone who is cultured, articulate, and 
                genuinely engaging. It is about the comfort of knowing that your privacy is protected, your preferences 
                are respected, and your <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
                experience will be of the highest quality.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Core Values in Escort Service
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mt-4">
                <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                  <Lock className="w-8 h-8 text-gold-600 mb-3" />
                  <h4 className="font-bold text-[#1a1a2e]">Discretion</h4>
                  <p className="text-gray-600 text-sm">Complete confidentiality for all <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> bookings.</p>
                </div>
                <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                  <Star className="w-8 h-8 text-gold-600 mb-3" />
                  <h4 className="font-bold text-[#1a1a2e]">Quality</h4>
                  <p className="text-gray-600 text-sm">Exacting standards in <Link to="/escorts" className="text-gold-600 hover:underline">escort</Link> selection and <strong>escort service</strong> delivery.</p>
                </div>
                <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                  <Eye className="w-8 h-8 text-gold-600 mb-3" />
                  <h4 className="font-bold text-[#1a1a2e]">Authenticity</h4>
                  <p className="text-gray-600 text-sm">Verified profiles with genuine <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>. No fake profiles.</p>
                </div>
                <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                  <Users className="w-8 h-8 text-gold-600 mb-3" />
                  <h4 className="font-bold text-[#1a1a2e]">Professionalism</h4>
                  <p className="text-gray-600 text-sm">Luxury hospitality standards in every <strong>escort service</strong> interaction.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Areas We Serve – Escort Service in Gurgaon
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our <Link to="/locations" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
                covers all major areas with verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li><Link to="/locations/cyber-city" className="text-gold-600 hover:underline">Cyber City Escorts</Link> – Premium <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> for corporate events and business meetings</li>
                <li><Link to="/locations/mg-road" className="text-gold-600 hover:underline">MG Road Call Girls</Link> – Luxury <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> near the heart of Gurgaon's shopping and dining hub</li>
                <li><Link to="/locations/golf-course-road" className="text-gold-600 hover:underline">Golf Course Road Escorts</Link> – Elite <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> for the city's most exclusive neighbourhoods</li>
                <li><Link to="/locations/dlf-phase-1" className="text-gold-600 hover:underline">DLF City Escorts</Link> – Discreet <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> in DLF Phases 1-5</li>
                <li><Link to="/locations/sohna-road" className="text-gold-600 hover:underline">Sohna Road Call Girls</Link> – Premium <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> along the rapidly developing corridor</li>
                <li><Link to="/locations/sushant-lok" className="text-gold-600 hover:underline">Sushant Lok Escorts</Link> – Refined <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> in the established residential area</li>
                <li><Link to="/locations/sector-29" className="text-gold-600 hover:underline">Sector 29 Call Girls</Link> – Vibrant <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> near Gurgaon's nightlife hub</li>
                <li><Link to="/locations/huda-city-centre" className="text-gold-600 hover:underline">HUDA City Centre Escorts</Link> – Convenient <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> near the metro</li>
                <li><Link to="/locations/manesar" className="text-gold-600 hover:underline">Manesar Call Girls</Link> – Premium <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> in the industrial hub</li>
                <li><Link to="/locations/dwarka" className="text-gold-600 hover:underline">Dwarka Escorts</Link> – <Link to="/call-girls" className="text-gold-600 hover:underline">Call girls</Link> service in New Delhi</li>
                <li><Link to="/locations/mahipalpur" className="text-gold-600 hover:underline">Mahipalpur Call Girls</Link> – <Link to="/escorts" className="text-gold-600 hover:underline">Escorts</Link> near IGI Airport</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Call Girls & Escort Categories
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <Link to="/russian-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Russian Escorts</span>
                  <span className="text-sm text-gray-600">Exclusive European <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link></span>
                </Link>
                <Link to="/model-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Model Escorts</span>
                  <span className="text-sm text-gray-600">Professional fashion models</span>
                </Link>
                <Link to="/housewife-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Housewife Escorts</span>
                  <span className="text-sm text-gray-600">Mature, experienced <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link></span>
                </Link>
                <Link to="/college-girls" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">College Girls</span>
                  <span className="text-sm text-gray-600">Young, vibrant <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link></span>
                </Link>
                <Link to="/independent-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Independent Escorts</span>
                  <span className="text-sm text-gray-600">Self-employed professional <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link></span>
                </Link>
                <Link to="/vip-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">VIP Escorts</span>
                  <span className="text-sm text-gray-600">High-profile premium <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link></span>
                </Link>
                <Link to="/air-hostess-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Air Hostess Escorts</span>
                  <span className="text-sm text-gray-600">Groomed, elegant <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link></span>
                </Link>
                <Link to="/celebrity-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Celebrity Escorts</span>
                  <span className="text-sm text-gray-600">Exclusive <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> from entertainment</span>
                </Link>
                <Link to="/travel-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Travel Escorts</span>
                  <span className="text-sm text-gray-600">Cultured <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> for luxury travel</span>
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                What Makes ALINA VIP Different from Other Escort Services
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                In a competitive <strong>escort service</strong> industry, <strong>ALINA VIP</strong> stands apart 
                through a combination of factors that together create a service experience unlike any other in Gurgaon. 
                Our rigorous verification process ensures that every <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> 
                profile is genuine, giving our clients confidence in their choices.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our commitment to discretion is comprehensive and multi-layered. We protect client information at 
                every stage of the <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
                booking process, train our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
                and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> in the art of 
                discretion, and design our digital presence with privacy in mind. Our 24/7 availability means that 
                we are always there when you need us, whether it is for a planned engagement or a last-minute 
                <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> booking.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Commitment to Safety & Discretion
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Safety is a priority at <strong>ALINA VIP</strong>, both for our clients and our 
                <Link to="/call-girls" className="text-gold-600 hover:underline"> call girls</Link> and 
                <Link to="/escorts" className="text-gold-600 hover:underline"> escorts</Link>. Our verification 
                process is designed not only to ensure authenticity but also to create a safe environment for all 
                parties. We screen our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
                thoroughly and provide them with guidelines on safety practices for <strong>escort service</strong> 
                engagements.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                For our clients, we provide a safe and reliable way to arrange <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
                and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>. Our verified 
                profiles give you confidence in your choices, and our professional booking process ensures that your 
                <strong>escort service</strong> engagement is arranged properly.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Why Gurgaon is the Perfect City for Escort Service
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Gurgaon, now officially known as Gurugram, has transformed from a quiet suburb into one of India's 
                most dynamic and cosmopolitan cities. It is home to numerous Fortune 500 companies, luxury hotels, 
                premium residential complexes, and world-class entertainment venues. The city attracts business 
                professionals, entrepreneurs, and visitors from across India and around the world, creating a vibrant 
                and diverse community that demands premium <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This cosmopolitan character makes Gurgaon the perfect setting for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
                and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> service. The city's 
                residents and visitors are accustomed to a high standard of living and expect quality in every aspect 
                of their lives. <strong>ALINA VIP</strong> was created to meet this expectation, providing an 
                <strong>escort service</strong> that matches the sophistication and luxury of the city itself.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Book Your Escort Service in Gurgaon Today
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Experience the finest <strong>escort service in Gurgaon</strong> with <strong>ALINA VIP</strong>. 
                Whether you're looking for a <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> 
                for a night out, a <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escort</Link> 
                for a corporate event, or a <Link to="/vip-escorts" className="text-gold-600 hover:underline">VIP escort</Link> 
                for a weekend getaway, we have the perfect match for you. Our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
                is available 24/7 across all Gurgaon locations.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/book-now" className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                  Book Call Girls Now
                </Link>
                <Link to="/contact" className="bg-[#1a1a2e] hover:bg-[#2d2d44] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                  Contact Us
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                  Call Now
                </a>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-200">
                <p className="text-center text-lg font-semibold text-[#1a1a2e]">
                  📞 Call us 24/7: <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold">{siteConfig.phoneDisplay}</a>
                </p>
                <p className="text-center text-gray-600 mt-2">
                  Available for <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> across all Gurgaon locations with verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>
                </p>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Visit us at <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline font-semibold">ALINAVIP.com</a>
                </p>
              </div>
            </div>

            {/* Right Column - Image Section */}
            <div className="space-y-6 sticky top-24">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-hero.jpg" 
                  alt="ALINA VIP - Premium Escort Service in Gurgaon | Call Girls" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/about-1.jpg" 
                    alt="VIP Call Girls Gurgaon | Russian Escorts" 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/about-2.jpg" 
                    alt="Escort Service Cyber City Gurgaon | Model Escorts" 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-gold-50 p-6 rounded-2xl border border-gold-200 text-center">
                <Star className="w-8 h-8 text-gold-600 mx-auto mb-2" />
                <p className="font-bold text-[#1a1a2e]">4.9/5 Star Rating</p>
                <p className="text-gray-600 text-sm">Based on 500+ verified client reviews for our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link></p>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">Visit <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline font-semibold">ALINAVIP.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
