import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ArrowLeft, User, Eye, Tag, Share2, Phone, Star, Crown } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { getBlogPost, blogPosts } from '@/data/blogs';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center bg-white">
        <h1 className="section-title mb-4 text-[#1a1a2e]">Article Not Found</h1>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
          Back to Blog
        </Link>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://alinavip.com',
    },
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} | Escort Service Blog | ALINA VIP`}
        description={post.excerpt}
        keywords={`${post.category}, escort service Gurgaon, call girls Gurgaon, VIP escort service, Russian escorts, model escorts, luxury lifestyle Gurgaon`}
        canonical={`https://alinavip.com/blog/${post.slug}`}
        ogType="article"
        jsonLd={articleSchema}
        breadcrumbs={[
          { name: 'Home', url: 'https://alinavip.com' },
          { name: 'Blog', url: 'https://alinavip.com/blog' },
          { name: post.title, url: `https://alinavip.com/blog/${post.slug}` },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title },
        ]} 
      />

      {/* ===== ARTICLE HERO ===== */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container-luxury max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full font-semibold tracking-wider uppercase">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Eye className="w-3 h-3" /> {post.views || '1.2k'} views
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-5xl text-[#1a1a2e] font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold-600" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-600" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-gold-600" />
                {post.author || 'ALINA VIP'}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-10 bg-gradient-to-br from-gray-800 to-gray-900">
            <img 
              src={post.image || `/images/blog/${post.slug}.jpg`}
              alt={`${post.title} - Escort Service in Gurgaon | Call Girls Guide`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Article Content */}
          <div className="prose-luxury max-w-none">
            {post.content.map((para, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>

          {/* ===== CALL TO ACTION IN ARTICLE ===== */}
          <div className="my-12 p-8 bg-gradient-to-r from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-[#1a1a2e] flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold-600 fill-gold-600" />
                  Book Your Escort Service Today
                </h4>
                <p className="text-gray-700">
                  Browse our verified <Link to="/call-girls" className="text-gold-600 hover:underline font-semibold">call girls in Gurgaon</Link> 
                  and find the perfect <Link to="/services" className="text-gold-600 hover:underline font-semibold">VIP escort service</Link>.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" /> Book Now
                </Link>
                <a 
                  href="https://alinavip.com" 
                  target="_blank" 
                  className="flex items-center gap-2 border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap"
                >
                  Visit ALINAVIP.com
                </a>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            <Tag className="w-4 h-4 text-gold-600" />
            {post.tags?.map((tag) => (
              <Link 
                key={tag} 
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-4 py-2 rounded-full transition-colors"
              >
                #{tag}
              </Link>
            ))}
            <Link 
              to="/services"
              className="text-xs bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-4 py-2 rounded-full transition-colors"
            >
              #EscortService
            </Link>
            <Link 
              to="/call-girls"
              className="text-xs bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-4 py-2 rounded-full transition-colors"
            >
              #CallGirlsGurgaon
            </Link>
            <Link 
              to="/russian-escorts"
              className="text-xs bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-4 py-2 rounded-full transition-colors"
            >
              #RussianEscorts
            </Link>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link 
              to="/blog" 
              className="flex items-center gap-2 text-gold-600 hover:gap-3 transition-all text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Share:</span>
              <button className="p-2 bg-gray-100 hover:bg-gold-100 rounded-full transition-colors">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* ===== RELATED POSTS ===== */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#faf6f2]">
          <div className="container-luxury">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-[#1a1a2e] font-bold mb-3">
                Related <span className="text-gold-600">Articles</span>
              </h2>
              <p className="text-gray-600">
                More insights on <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
                and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-gold-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-800">
                    <img 
                      src={rp.image || `/images/blog/${rp.slug}.jpg`}
                      alt={`${rp.title} - Escort Service Gurgaon`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gold-600 font-semibold tracking-wider uppercase">{rp.category}</span>
                    <h3 className="font-serif text-lg text-[#1a1a2e] mt-2 mb-2 font-bold leading-tight group-hover:text-gold-600 transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{rp.excerpt}</p>
                    <span className="text-gold-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== BLOG CTA ===== */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="container-luxury text-center">
          <div className="max-w-3xl mx-auto">
            <Crown className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Looking for <span className="text-gold-400">VIP Escort Service</span> in Gurgaon?
            </h3>
            <p className="text-gray-300 mb-8">
              Browse our verified <Link to="/call-girls" className="text-gold-400 hover:underline">call girls</Link>, 
              <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, and 
              <Link to="/model-escorts" className="text-gold-400 hover:underline"> model escorts</Link>. 
              Book your premium <Link to="/services" className="text-gold-400 hover:underline">escort service in Gurgaon</Link> today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Book Now
              </Link>
              <a 
                href="https://alinavip.com" 
                target="_blank" 
                className="border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Visit ALINAVIP.com
              </a>
              <a 
                href={`tel:${siteConfig.phone}`} 
                className="border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
