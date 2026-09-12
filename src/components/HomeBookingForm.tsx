'use client';

import { Phone } from 'lucide-react';
import { locations } from '@/data/locations';

const primeLocations = locations.slice(0, 25);

export default function HomeBookingForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you for your booking request. We will contact you shortly.');
      }}
    >
      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Name</label>
        <input
          type="text"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Phone</label>
        <input
          type="tel"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
          placeholder="Your Phone Number"
        />
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Location</label>
        <select
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-gold-500 focus:outline-none transition-colors"
          defaultValue=""
          required
        >
          <option value="" disabled className="text-gray-500">
            Select Location
          </option>
          {primeLocations.map((loc) => (
            <option key={loc.slug} value={loc.slug} className="text-[#1a1a2e]">
              {loc.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Message</label>
        <textarea
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-600/30 hover:shadow-gold-600/50 flex items-center justify-center gap-2"
      >
        <Phone className="w-5 h-5" /> Book Escort Service
      </button>
    </form>
  );
}
