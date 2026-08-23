import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag, Eye, Star, Crown, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { blogPosts, blogCategories } from '@/data/blogs';
import { useState } from 'react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts;

  return (
    <>
      <SEO
        title="Escort Service Blog | Call Girls Tips & Lifestyle | ALINA VIP"
        description="Read our blog for insights on escort service in Gurgaon, VIP call girls, Russian escorts, nightlife, dating tips, and luxury lifestyle. Expert guides and articles for discerning gentlemen."
        keywords="escort service Gurgaon blog, call girls Gurgaon tips, VIP escort blog, Russian escort guide, luxury lifestyle Gurgaon, dating tips Gurgaon, nightlife Gurgaon, premium escort service"
        canonical="https://alinavip.com/blog"
        breadcrumbs={[
          { name: 'Home', url: 'https://alinavip.com' },
          { name: 'Blog', url: 'https://alinavip.com/blog' },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: 'Blog' }
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
              ★ Insights & Resources
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Escort Service <span className="text-gradient-gold">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert insights on <strong className="text-gold-400">escort service in Gurgaon</strong>, 
              <strong className="text-gold-400"> VIP call girls</strong>, 
              <strong className="text-gold-400"> Russian escorts</strong>, 
              nightlife, dating tips, and luxury lifestyle.
            </p>
            <div className="gold-divider mx-auto mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="section-subtitle text-gold-600">Our Blog</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Insights on <span className="text-gradient-gold">Escort Service & Call Girls</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover articles about <Link to="/call-girls" className="text-gold-600 hover:underline">call girls in Gurgaon</Link>, 
              <Link to="/russian-escorts" className="text-gold-600 hover:underline"> Russian escorts</Link>, 
              <Link to="/services" className="text-gold-600 hover:underline"> VIP escort services</Link>, and more.
            </p>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          {/* ===== CATEGORY FILTER ===== */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-3 text-sm tracking-wider uppercase transition-all rounded-full font-semibold ${
                activeCategory === null
                  ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/30'
                  : 'border-2 border-gray-300 text-gray-600 hover:border-gold-500 hover:text-gold-600 hover:bg-gold-50'
              }`}
            >
              All Articles
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-sm tracking-wider uppercase transition-all rounded-full font-semibold ${
                  activeCategory === cat
                    ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/30'
                    : 'border-2 border-gray-300 text-gray-600 hover:border-gold-500 hover:text-gold-600 hover:bg-gold-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ===== BLOG GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-300"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* Image Section */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src={post.image || `/images/blog/${post.slug}.jpg`}
                      alt={`${post.title} - Escort Service in Gurgaon | Call Girls`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 bg-gold-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                      {post.category}
                    </span>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views || '1.2k'}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-[#1a1a2e] mb-2 font-bold leading-tight group-hover:text-gold-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center">
                          <User className="w-4 h-4 text-gold-600" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{post.author || 'ALINA VIP'}</span>
                      </div>
                      <span className="text-gold-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
              <p className="text-gray-400 mt-2">Check back soon for more <Link to="/blog" className="text-gold-600 hover:underline">escort service articles</Link>.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== FEATURED BLOG SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#faf6f2] to-white">
        <div className="container-luxury">
          <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-gold-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-gold-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
                  ★ Featured Article
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3">
                  Best Escort Service in Gurgaon: A Complete Guide
                </h3>
                <p className="text-gray-700 mb-4">
                  Discover the top <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service in Gurgaon</Link>. 
                  From <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escorts</Link> to 
                  <Link to="/model-escorts" className="text-gold-600 hover:underline"> model escorts</Link>, find the perfect 
                  <Link to="/services" className="text-gold-600 hover:underline"> VIP escort service</Link> for your needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    to="/blog/best-escort-service-gurgaon-guide" 
                    className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    Read Full Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href="https://alinavip.com" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all"
                  >
                    Visit ALINAVIP.com
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/featured-blog.jpg" 
                  alt="Best Escort Service in Gurgaon - VIP Call Girls Guide"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR CATEGORIES ===== */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Explore <span className="text-gold-400">Escort Service</span> Categories
            </h3>
            <p className="text-gray-400">Find articles about specific <Link to="/services" className="text-gold-400 hover:underline">escort services in Gurgaon</Link></p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="bg-white/5 hover:bg-gold-600/20 border border-white/10 hover:border-gold-500 rounded-xl p-4 text-center transition-all group"
              >
                <span className="block text-2xl mb-2">
                  {cat === 'Lifestyle' && '🌟'}
                  {cat === 'Nightlife' && '🌙'}
                  {cat === 'Travel' && '✈️'}
                  {cat === 'Dating' && '❤️'}
                  {cat === 'Escort Tips' && '💎'}
                  {cat === 'Gurgaon Guide' && '🏙️'}
                  {cat === 'Luxury Hotels' && '🏨'}
                  {cat === 'Premium Living' && '💼'}
                  {cat === 'Call Girls Guide' && '👩'}
                  {cat === 'VIP Escorts' && '👑'}
                </span>
                <span className="text-sm text-gray-300 group-hover:text-gold-400 transition-colors font-medium">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">
              Subscribe to Our <span className="text-gold-600">Escort Service</span> Blog
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest updates on <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service in Gurgaon</Link>, 
              new <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escorts</Link>, 
              and exclusive VIP offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 focus:border-gold-500 focus:outline-none transition-colors"
              />
              <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">100% privacy. No spam. Unsubscribe anytime.</p>
            <p className="text-xs text-gray-400 mt-2">Visit <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline font-semibold">ALINAVIP.com</a> for more</p>
          </div>
        </div>
      </section>

      {/* ===== SEO CONTENT SECTION ===== */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
              Escort Service Blog – Your Guide to Premium Call Girls in Gurgaon
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to the <strong>ALINA VIP</strong> blog – your ultimate resource for everything related to 
              <Link to="/services" className="text-gold-600 hover:underline"> escort service in Gurgaon</Link>. 
              Whether you are looking for tips on booking <Link to="/call-girls" className="text-gold-600 hover:underline">VIP call girls</Link>, 
              understanding the benefits of <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escorts</Link>, 
              or exploring the luxury lifestyle in Gurgaon, our blog has you covered.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our <strong>escort service</strong> blog features expert articles on a wide range of topics including 
              nightlife, dating tips, travel, luxury hotels, and premium living. We also provide comprehensive guides 
              on how to choose the best <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              for your needs, what to expect from <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>, 
              and how to make the most of your <strong>escort service</strong> experience in Gurgaon.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              For more information about our premium <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
              and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>, visit 
              <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline font-bold"> ALINAVIP.com</a> 
              or call us at <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold">{siteConfig.phoneDisplay}</a>.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
