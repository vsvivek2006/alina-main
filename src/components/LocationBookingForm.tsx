'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';

interface LocationBookingFormProps {
  locationName: string;
  locationCity: string;
}

export default function LocationBookingForm({ locationName, locationCity }: LocationBookingFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setFormSubmitted(true);
        alert(`Thank you for your inquiry for ${locationName}. Our concierge will contact you shortly.`);
      }}
    >
      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Your Name</label>
        <input
          type="text"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Phone Number</label>
        <input
          type="tel"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
          placeholder="+91 Your Phone Number"
        />
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Service Location</label>
        <input
          type="text"
          readOnly
          value={`${locationName}, ${locationCity}`}
          className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-gold-400 font-semibold focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Special Requirements</label>
        <textarea
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none"
          placeholder={`Tell us about your preferences for ${locationName} (hotel, companion category, timing)...`}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-600/30 hover:shadow-gold-600/50 flex items-center justify-center gap-2"
      >
        <Phone className="w-5 h-5" /> {formSubmitted ? 'Request Submitted' : `Book Escort in ${locationName}`}
      </button>
    </form>
  );
}
