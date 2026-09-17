'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Search } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header id="page-header" className="sticky top-0 z-50 bg-white border-b border-[#eaeaea] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Left Controls (Mobile Menu Toggle + Search) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#671725] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link
              href="/gallery"
              className="p-2 text-gray-600 hover:text-[#671725]"
              aria-label="Search Escorts"
            >
              <Search size={20} />
            </Link>
          </div>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 text-[14px] font-medium text-[#1A1A1A]">
            <Link
              href="/"
              className={pathname === '/' ? 'text-[#671725] font-semibold' : 'hover:text-[#671725] transition-colors'}
            >
              Home
            </Link>

            <Link
              href="/gallery"
              className={pathname === '/gallery' ? 'text-[#671725] font-semibold' : 'hover:text-[#671725] transition-colors'}
            >
              Escorts
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-6">
              <Link
                href="/services"
                className="flex items-center gap-1 hover:text-[#671725] transition-colors"
              >
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 hidden group-hover:block transition-all z-50">
                <Link href="/services" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  In-Call and Out-Call Services
                </Link>
                <Link href="/services" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Erotic Massage in Gurgaon
                </Link>
                <Link href="/services" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Girlfriend Experience (GFE)
                </Link>
                <Link href="/services" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Escort Service for 1/2/3 Hours
                </Link>
                <Link href="/services" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Escort Service Full Night
                </Link>
              </div>
            </div>

            {/* Hotels Dropdown */}
            <div className="relative group py-6">
              <Link
                href="/locations"
                className="flex items-center gap-1 hover:text-[#671725] transition-colors"
              >
                Hotels <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 hidden group-hover:block transition-all z-50">
                <Link href="/locations/cyber-city" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Near The Oberoi Gurgaon
                </Link>
                <Link href="/locations/dlf-phase-1" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Near The Leela Ambience
                </Link>
                <Link href="/locations/mg-road" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Near Crowne Plaza Gurgaon
                </Link>
                <Link href="/locations/huda-city-centre" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Near Taj City Centre
                </Link>
                <Link href="/locations/aerocity" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Near JW Marriott Aerocity
                </Link>
                <Link href="/locations" className="block px-4 py-2 text-xs text-[#671725] font-semibold border-t border-gray-100 hover:bg-gray-50">
                  View All 5-Star Hotels &rarr;
                </Link>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group py-6">
              <Link
                href="/locations"
                className="flex items-center gap-1 hover:text-[#671725] transition-colors"
              >
                Locations <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 hidden group-hover:block transition-all z-50">
                <Link href="/locations/cyber-city" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Cyber City Escorts
                </Link>
                <Link href="/locations/golf-course-road" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Golf Course Road Escorts
                </Link>
                <Link href="/locations/mg-road" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  MG Road Call Girls
                </Link>
                <Link href="/locations/aerocity" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Aerocity Escorts
                </Link>
                <Link href="/locations/dwarka" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Dwarka Escorts
                </Link>
                <Link href="/locations/mahipalpur" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Mahipalpur Escorts
                </Link>
                <Link href="/locations" className="block px-4 py-2 text-xs text-[#671725] font-semibold border-t border-gray-100 hover:bg-gray-50">
                  View All Locations &rarr;
                </Link>
              </div>
            </div>

            {/* Categories Dropdown */}
            <div className="relative group py-6">
              <Link
                href="/services"
                className="flex items-center gap-1 hover:text-[#671725] transition-colors"
              >
                Categories <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 hidden group-hover:block transition-all z-50">
                <Link href="/category/russian-call-girls" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Russian Call Girls
                </Link>
                <Link href="/category/vip-call-girls" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  VIP Call Girls
                </Link>
                <Link href="/category/high-profile-girls" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  High Profile Escorts
                </Link>
                <Link href="/category/college-girls" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  College Girls
                </Link>
                <Link href="/category/air-hostess" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Air Hostess Escorts
                </Link>
                <Link href="/category/celebrity-escorts" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#671725]">
                  Celebrity Call Girls
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className={pathname === '/blog' ? 'text-[#671725] font-semibold' : 'hover:text-[#671725] transition-colors'}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={pathname === '/contact' ? 'text-[#671725] font-semibold' : 'hover:text-[#671725] transition-colors'}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right: Branding Logo + Hotline Button */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-right">
              <span className="font-serif font-black text-2xl tracking-wide text-[#671725]">
                ALINA <span className="text-[#0B2154] font-light">VIP</span>
              </span>
            </Link>

            <a
              href={"tel:" + siteConfig.phone}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#671725] hover:bg-[#52121d] text-white text-xs font-semibold rounded shadow-md glint-effect transition-all duration-300"
            >
              <Phone size={13} className="text-white" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link href="/" className="block py-2 text-sm font-medium text-gray-800 hover:text-[#671725]">
            Home
          </Link>
          <Link href="/gallery" className="block py-2 text-sm font-medium text-gray-800 hover:text-[#671725]">
            Escort Profiles
          </Link>
          <Link href="/services" className="block py-2 text-sm font-medium text-gray-800 hover:text-[#671725]">
            Services Offered
          </Link>
          <Link href="/locations" className="block py-2 text-sm font-medium text-gray-800 hover:text-[#671725]">
            Service Locations
          </Link>
          <Link href="/category/russian-call-girls" className="block py-2 text-sm font-medium text-gray-800 hover:text-[#671725]">
            Russian Call Girls
          </Link>
          <Link href="/category/vip-call-girls" className="block py-2 text-sm font-medium text-gray-800 hover:text-[#671725]">
            VIP Escorts
          </Link>
          <Link href="/blog" className="block py-2 text-sm font-medium text-gray-800 hover:text-[#671725]">
            Latest Blog
          </Link>
          <Link href="/contact" className="block py-2 text-sm font-medium text-gray-800 hover:text-[#671725]">
            Contact Us
          </Link>

          <div className="pt-4 border-t border-gray-100 flex gap-2">
            <a
              href={"tel:" + siteConfig.phone}
              className="flex-1 text-center py-2.5 bg-[#671725] text-white text-xs font-bold rounded"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={"https://wa.me/" + siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 bg-[#25D366] text-white text-xs font-bold rounded"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
