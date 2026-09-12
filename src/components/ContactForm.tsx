'use client';

import { useState } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { locations } from '@/data/locations';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    location: '',
    serviceType: 'Hotel Outcall',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7 bg-[#faf6f2] p-8 md:p-10 rounded-3xl border border-gold-200/80 shadow-md">
      <div className="mb-8">
        <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
          Online Reservation
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] font-serif">
          Book Your Companion Experience
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Please provide your preferences below. Our coordinator will contact you privately within minutes.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 bg-white rounded-2xl border-2 border-gold-300 text-center shadow-sm">
          <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-gold-600" />
          </div>
          <h3 className="text-2xl font-bold text-[#1a1a2e] font-serif mb-2">
            Inquiry Received
          </h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Thank you for reaching out to ALINA VIP. Our concierge is reviewing your request and will connect with you shortly with complete discretion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md"
            >
              <Phone className="w-4 h-4" /> Call Directly for Urgent Request
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 border border-gray-300 text-gray-700 hover:border-gold-500 rounded-full text-sm font-semibold transition-all"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                Your Name / Alias <span className="text-gold-600">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                placeholder="e.g. Mr. Sharma"
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                Phone / WhatsApp <span className="text-gold-600">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                Preferred Companion Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:border-gold-500 focus:outline-none transition-colors"
              >
                <option value="">Any Premium Companion</option>
                <option value="Russian Escorts">Russian Escorts</option>
                <option value="Model Escorts">Model Escorts</option>
                <option value="VIP Escorts">VIP Escorts</option>
                <option value="College Girls">College Girls</option>
                <option value="Housewife Escorts">Housewife Escorts</option>
                <option value="Independent Escorts">Independent Escorts</option>
                <option value="Air Hostess Escorts">Air Hostess Escorts</option>
                <option value="Celebrity Escorts">Celebrity Escorts</option>
                <option value="Travel Escorts">Travel Escorts</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                Your Gurgaon / NCR Location <span className="text-gold-600">*</span>
              </label>
              <select
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:border-gold-500 focus:outline-none transition-colors"
              >
                <option value="">Select Destination Area</option>
                <optgroup label="Central Business Hubs">
                  <option value="cyber-city">Cyber City</option>
                  <option value="mg-road">MG Road</option>
                  <option value="golf-course-road">Golf Course Road</option>
                  <option value="golf-course-extension-road">Golf Course Extension Road</option>
                </optgroup>
                <optgroup label="DLF City Phases">
                  <option value="dlf-phase-1">DLF Phase 1</option>
                  <option value="dlf-phase-2">DLF Phase 2</option>
                  <option value="dlf-phase-3">DLF Phase 3</option>
                  <option value="dlf-phase-4">DLF Phase 4</option>
                  <option value="dlf-phase-5">DLF Phase 5</option>
                </optgroup>
                <optgroup label="Corridors & Sectors">
                  <option value="sohna-road">Sohna Road</option>
                  <option value="sector-29">Sector 29</option>
                  <option value="sushant-lok">Sushant Lok</option>
                  <option value="huda-city-centre">HUDA City Centre</option>
                  <option value="manesar">Manesar</option>
                </optgroup>
                <optgroup label="Delhi & Airport">
                  <option value="aerocity">Aerocity (IGI Airport)</option>
                  <option value="mahipalpur">Mahipalpur</option>
                  <option value="dwarka">Dwarka</option>
                </optgroup>
                <optgroup label="All Other 108 Locations">
                  {locations.slice(0, 30).map((loc) => (
                    <option key={loc.slug} value={loc.slug}>
                      {loc.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                Engagement Style
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:border-gold-500 focus:outline-none transition-colors"
              >
                <option value="Hotel Outcall">5-Star Hotel Outcall</option>
                <option value="Private Residence">Private Residence Outcall</option>
                <option value="Dinner Date">Fine Dining Date</option>
                <option value="Corporate Event">Corporate / Social Event</option>
                <option value="Travel Escort">Travel / Weekend Gateway</option>
                <option value="Overnight Stay">Overnight Companion</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                placeholder="private@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
              Special Requests / Notes
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-gray-300 rounded-xl p-4 text-sm text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors resize-none"
              placeholder="Please mention your preferred timing, specific qualities desired, or any private requests..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-900 font-bold rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Confirm Private Booking Request →
          </button>

          <p className="text-center text-xs text-gray-500 mt-2">
            🔒 All submissions are processed through encrypted, ephemeral channels. Your privacy is paramount.
          </p>
        </form>
      )}
    </div>
  );
}
