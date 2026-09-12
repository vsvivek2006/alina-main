import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import BlogFilter from '@/components/BlogFilter';
import NewsletterForm from '@/components/NewsletterForm';
import { siteConfig } from '@/data/siteConfig';
import { blogPosts, blogCategories } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Escort Service Blog | Call Girls Tips & Lifestyle | ALINA VIP',
  description:
    'Read our blog for insights on escort service in Gurgaon, VIP call girls, Russian escorts, nightlife, dating tips, and luxury lifestyle. Expert guides and articles for discerning gentlemen.',
  keywords:
    'escort service Gurgaon blog, call girls Gurgaon tips, VIP escort blog, Russian escort guide, luxury lifestyle Gurgaon, dating tips Gurgaon, nightlife Gurgaon, premium escort service',
  alternates: {
    canonical: 'https://escort.alinavip.com/blog',
  },
  openGraph: {
    title: 'Escort Service Blog | Call Girls Tips & Lifestyle | ALINA VIP',
    description:
      'Read our blog for insights on escort service in Gurgaon, VIP call girls, Russian escorts, nightlife, dating tips, and luxury lifestyle. Expert guides and articles for discerning gentlemen.',
    url: 'https://escort.alinavip.com/blog',
    type: 'website',
  },
};

const categoryEmojis: Record<string, string> = {
  Lifestyle: '🌟',
  Nightlife: '🌙',
  Travel: '✈️',
  Dating: '❤️',
  'Escort Tips': '💎',
  'Luxury Hotels': '🏨',
  'Premium Living': '💼',
  'VIP Escorts': '👑',
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Blog' }]} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
            ★ Insights &amp; Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-wide">
            Escort Service <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert insights on{' '}
            <strong className="text-gold-400 font-semibold">escort service in Gurgaon</strong>,{' '}
            <strong className="text-gold-400 font-semibold">VIP call girls</strong>,{' '}
            <strong className="text-gold-400 font-semibold">Russian escorts</strong>, nightlife, dating tips, and luxury lifestyle.
          </p>
          <div className="gold-divider mx-auto mt-8" />
        </div>
      </section>

      {/* Main Blog Articles Section */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="section-subtitle text-gold-600">Our Blog</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Insights on <span className="text-gradient-gold">Escort Service &amp; Call Girls</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed text-base">
              Discover articles about{' '}
              <Link href="/services" className="text-gold-600 hover:underline font-medium">
                call girls in Gurgaon
              </Link>
              ,{' '}
              <Link href="/category/russian-call-girls" className="text-gold-600 hover:underline font-medium">
                Russian escorts
              </Link>
              ,{' '}
              <Link href="/services" className="text-gold-600 hover:underline font-medium">
                VIP escort services
              </Link>
              , and more.
            </p>
          </div>

          {/* Interactive Category Filter & Post Grid */}
          <BlogFilter posts={blogPosts} categories={blogCategories} />
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 bg-gradient-to-br from-[#faf6f2] to-white">
        <div className="container-luxury">
          <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-gold-200 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-gold-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                  ★ Featured Article
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3 font-serif">
                  Best Escort Service in Gurgaon: A Complete Guide
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Discover the top{' '}
                  <Link href="/services" className="text-gold-600 hover:underline font-semibold">
                    call girls service in Gurgaon
                  </Link>
                  . From{' '}
                  <Link href="/category/russian-call-girls" className="text-gold-600 hover:underline font-semibold">
                    Russian escorts
                  </Link>{' '}
                  to{' '}
                  <Link href="/category/celebrity-escorts" className="text-gold-600 hover:underline font-semibold">
                    model escorts
                  </Link>
                  , find the perfect{' '}
                  <Link href="/services" className="text-gold-600 hover:underline font-semibold">
                    VIP escort service
                  </Link>{' '}
                  for your needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/blog/best-escort-service-gurgaon-guide"
                    className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-6 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Read Full Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={siteConfig.url}
                    className="inline-flex items-center gap-2 border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white px-6 py-3.5 rounded-full font-semibold transition-all"
                  >
                    Visit {siteConfig.domain}
                  </a>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl border border-gold-200/60 bg-neutral-900 group">
                <Image
                  src="/images/featured-blog.jpg"
                  alt="Best Escort Service in Gurgaon - VIP Call Girls Guide"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 584px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Escort Service Categories */}
      <section className="py-16 bg-[#1a1a2e] text-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-serif">
              Explore <span className="text-gold-400">Escort Service</span> Categories
            </h3>
            <p className="text-gray-300">
              Find articles about specific{' '}
              <Link href="/services" className="text-gold-400 hover:underline font-medium">
                escort services in Gurgaon
              </Link>
            </p>
            <div className="gold-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {blogCategories.map((cat) => (
              <div
                key={cat}
                className="bg-white/5 hover:bg-gold-600/20 border border-white/10 hover:border-gold-500 rounded-xl p-5 text-center transition-all group"
              >
                <span className="block text-2xl mb-2">
                  {categoryEmojis[cat] || '✨'}
                </span>
                <span className="text-sm text-gray-200 group-hover:text-gold-400 transition-colors font-medium">
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container-luxury">
          <NewsletterForm />
        </div>
      </section>

      {/* SEO Editorial Content */}
      <section className="py-16 bg-[#faf6f2] text-gray-800">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury bg-white p-8 md:p-12 rounded-2xl border border-gold-200/60 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6 font-serif">
              Escort Service Blog – Your Guide to Premium Call Girls in Gurgaon
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Welcome to the <strong>ALINA VIP</strong> blog – your ultimate resource for everything related to{' '}
                <Link href="/services" className="text-gold-600 hover:underline font-medium">
                  escort service in Gurgaon
                </Link>
                . Whether you are looking for tips on booking{' '}
                <Link href="/services" className="text-gold-600 hover:underline font-medium">
                  VIP call girls
                </Link>
                , understanding the benefits of{' '}
                <Link href="/category/russian-call-girls" className="text-gold-600 hover:underline font-medium">
                  Russian escorts
                </Link>
                , or exploring the luxury lifestyle in Gurgaon, our blog has you covered.
              </p>
              <p>
                Our <strong>escort service</strong> blog features expert articles on a wide range of topics including nightlife, dating tips, travel, luxury hotels, and premium living. We also provide comprehensive guides on how to choose the best{' '}
                <Link href="/services" className="text-gold-600 hover:underline font-medium">
                  call girls
                </Link>{' '}
                for your needs, what to expect from{' '}
                <Link href="/services" className="text-gold-600 hover:underline font-medium">
                  escorts
                </Link>
                , and how to make the most of your <strong>escort service</strong> experience in Gurgaon.
              </p>
              <p>
                For more information about our premium{' '}
                <Link href="/services" className="text-gold-600 hover:underline font-medium">
                  escort service
                </Link>{' '}
                and{' '}
                <Link href="/services" className="text-gold-600 hover:underline font-medium">
                  call girls
                </Link>
                , visit{' '}
                <a
                  href={siteConfig.url}
                  className="text-gold-600 hover:underline font-bold"
                >
                  {siteConfig.domain}
                </a>{' '}
                or call us at{' '}
                <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold">
                  {siteConfig.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
