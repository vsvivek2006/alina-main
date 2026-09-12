'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Eye, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogs';

interface BlogFilterProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  return (
    <>
      {/* Category Filter Pills */}
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
        {categories.map((cat) => (
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

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-300 flex flex-col justify-between"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={post.image || `/images/blog/${post.slug}.webp`}
                  alt={`${post.title} - Escort Service in Gurgaon | Call Girls`}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 50vw, 390px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-gold-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {post.category}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold-600" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-gold-600" />
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
                    <span className="text-sm text-gray-700 font-medium">
                      {post.author || 'ALINA VIP'}
                    </span>
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
          <p className="text-gray-400 mt-2">
            Check back soon for more{' '}
            <Link href="/blog" className="text-gold-600 hover:underline">
              escort service articles
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
}
