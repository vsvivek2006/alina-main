'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Shield, Star, Clock, Heart, Award, ArrowRight, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF6] text-[#333333]">
      {/* Page Title Bar */}
      <div className="bg-[#671725] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'About Us' },
              ]}
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {siteConfig.name} Gurgaon Escort Agency – Your Place To Seek 100% Satisfaction
          </h1>
          <p className="mt-3 text-sm sm:text-base text-rose-100 font-light max-w-3xl">
            Our Gurgaon escort agency is the leading destination for exotic fun and pleasure. It is the one stop destination for men seeking women for love making and adult entertainment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
            <span className="text-xs font-bold text-[#671725] uppercase tracking-widest block">Years of Industry Experience</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154]">
              A Long-Standing Escort Agency You Can Trust
            </h2>
            <p>
              Our escort agency has years of experience in the adult entertainment industry. We have been dealing with clients for many years and have always satisfied them. That is the reason clients love to return to our services again and again. So you are in safe hands with us.
            </p>
            <p>
              You don&apos;t have to worry about anything when you book our female escorts. They are very friendly and will make sure you have the best experience of your life. Whether you are looking for a girlfriend experience, a dinner date companion, or someone to accompany you to a high-end corporate party in DLF Cyber City or Golf Course Road, we have the perfect partner for you.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/images/assets/High_Profile_Escorts_Girl_In_Delhi.jpg"
                alt="About ALINA VIP Gurgaon Escorts"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Why Choose Our Escort Agency */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-[#671725] uppercase tracking-widest">Client Satisfaction Guarantee</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154] mt-1">
              Why Choose Our Gurgaon Escort Agency For Love Making?
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Before you book an escort, it is important to know about the agency and why they are the best choice. Here are the core values that make our agency number one in Gurgaon:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
            <div className="bg-[#FFFDF6] p-6 rounded-xl border border-rose-100/70 space-y-2">
              <h3 className="text-lg font-bold text-[#0B2154] flex items-center gap-2">
                <Star className="text-[#671725]" size={18} />
                24/7 Availability and Customer Support
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our clients never face time barriers when hiring our escort services. We bring our ultimate range of services to you 24 by seven. Our female escorts in Gurgaon are there to accompany you at any hour of the day. You get round the clock customer support and instant response to your every query.
              </p>
            </div>

            <div className="bg-[#FFFDF6] p-6 rounded-xl border border-rose-100/70 space-y-2">
              <h3 className="text-lg font-bold text-[#0B2154] flex items-center gap-2">
                <Shield className="text-[#671725]" size={18} />
                Easy Hiring and Payments
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Hiring our Gurgaon escort service is the easiest thing because we have made our services available to you with a simple process. All you need to do is to contact our team via WhatsApp or a phone call to book your appointment. Different payment methods are available, including cash on delivery, card payments, and online bank transfers with UPI.
              </p>
            </div>

            <div className="bg-[#FFFDF6] p-6 rounded-xl border border-rose-100/70 space-y-2">
              <h3 className="text-lg font-bold text-[#0B2154] flex items-center gap-2">
                <Award className="text-[#671725]" size={18} />
                Variety of Escort Services and Premium Fun
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We have hand-selected high profile escorts available to accompany you. These high profile escorts in Gurgaon are 100 percent verified. Their background is verified, and they belong to high society families. Moreover, they are educated and bring every service with utmost sophistication and professionalism.
              </p>
            </div>

            <div className="bg-[#FFFDF6] p-6 rounded-xl border border-rose-100/70 space-y-2">
              <h3 className="text-lg font-bold text-[#0B2154] flex items-center gap-2">
                <Heart className="text-[#671725]" size={18} />
                100% Private Experience Assured
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our escort agency in Gurgaon always prioritises the privacy and security of clients. We give 100 percent confidential experience to all. Your information remains safe with us. We never reveal it to anybody else. Our girls are also professionally trained. Therefore, you can trust us for a reliable experience. Everything is secure and 100 percent confidentiality is guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* 1000+ Profiles & Fair Pricing */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-[#671725] uppercase tracking-widest">Transparent Pricing</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154] mt-1">
              1000+ Gurgaon Escort Profiles for the Best Experience at Fair Pricing
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed">
              Never hesitate reaching out to our ultimate escort agency if you want to Make Love with the finest independent escorts in Gurgaon. We have more than 1000 profiles of different escorts who are 100% genuine and reliable. Their real photos are also available on our platform. See their pictures and choose your girl for adult dating and excitement.
            </p>
            <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
              Every experience you have with our girls is secure. Moreover, all our prices are fair and transparent. We do not charge any hidden costs from you. The rates are reasonable and competitive. You get a budget friendly experience every time you reach out to us. So indulge in the best experience with our Gurgaon independent escorts. Schedule your appointment today!
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
            <Link
              href="/rates"
              className="px-6 py-3 bg-[#671725] hover:bg-[#52121d] text-white text-xs font-bold rounded-lg shadow transition-colors"
            >
              Check Rates &amp; Pricing &rarr;
            </Link>
            <Link
              href="/gallery"
              className="px-6 py-3 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg shadow transition-colors"
            >
              Browse Escort Profiles &rarr;
            </Link>
          </div>
        </div>

        {/* How to Book FAQ (Exact Roshni Khanna questions) */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold text-[#671725] uppercase tracking-widest">Booking Protocol</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2154] mt-1">
              How to Book – Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5 text-sm text-gray-700 divide-y divide-gray-100">
            <div className="pt-4">
              <h3 className="font-bold text-[#0B2154] text-base mb-1.5">
                How long in advance should you book an escort model in Delhi / Gurgaon?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Our Escorts service is available 24×7 in Delhi NCR. Our agency is famous for one of its many features where we make last-minute bookings. So, no matter whether you want to book an escort in advance or at the last minute, we are here for you. All you need to make sure is that you give us a call or drop us a message and leave the rest to us! For bookings with VIP models and High Profile escorts, we recommend booking in advance.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-[#0B2154] text-base mb-1.5">
                Do we offer both in-call and outcall services?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Our aim is to cater to all your needs. That is why we offer both in-call and outcall escorts in Gurgaon and Delhi NCR. Our in-call service is where you visit the escort at the venue she decides. Whereas, outcall service is where the escort visits you at the location of your choice. So, whether you want us to pick a place for you or pick a place yourself, you have both options available 24×7.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-[#0B2154] text-base mb-1.5">
                Can I book an escort service for a tour and/or an outing?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Yes, you absolutely can! You can choose to go for an outing with one or more of our escorts as long as you have discussed this before. Rest assured, no matter where you go, these girls will give you the girlfriend experience exactly the way you want, where you want, and when you want it.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-[#0B2154] text-base mb-1.5">
                If the girl is not the same as in the picture, then?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                We believe in showing only what we can deliver. We share original profiles and photos before you book. There is less than a 1% chance that someone other than the one you selected will show up. However, if this happens, you can call us immediately and we will replace her with zero hassle or cancel your booking with zero fees.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-[#0B2154] text-base mb-1.5">
                How many escort models can I book for a single session?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                You can book a meeting with as many escorts as you wish! The same applies to our special Russian Escorts and high profile model Escorts. For more than 2 companions, we recommend booking a few hours in advance to guarantee coordinated arrival.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
