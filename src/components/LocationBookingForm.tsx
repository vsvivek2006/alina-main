'use client';

import { useState } from 'react';
import { Phone, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import {
  submitBookingRequest,
  type SubmissionStatus,
} from '@/lib/formSubmission';

interface LocationBookingFormProps {
  locationName: string;
  locationCity: string;
}

export default function LocationBookingForm({ locationName, locationCity }: LocationBookingFormProps) {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirements: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    const result = await submitBookingRequest({
      name: formData.name,
      phone: formData.phone,
      location: locationName,
      message: formData.requirements,
    });
    setSubmissionStatus(result.status);
    setStatusMessage(result.message);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {submissionStatus === 'not_configured' && (
        <div className="p-4 bg-charcoal-800/95 border border-amber-500/60 rounded-xl text-xs space-y-1 text-left">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-300">
                {statusMessage || 'Online booking is currently unavailable.'}
              </p>
              <p className="text-gray-300 mt-1">
                For prompt reservation in {locationName}, please call{' '}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-gold-400 underline font-bold"
                >
                  {siteConfig.phoneDisplay}
                </a>{' '}
                or contact our concierge directly via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-xs flex items-start gap-2 text-red-300">
          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="font-semibold">{statusMessage || 'An unexpected error occurred. Please try again.'}</p>
        </div>
      )}

      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">
          Your Name <span className="text-gold-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">
          Phone Number <span className="text-gold-500">*</span>
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
          placeholder="+91 Your Phone Number"
        />
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">
          Service Location
        </label>
        <input
          type="text"
          readOnly
          value={`${locationName}, ${locationCity}`}
          className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-gold-400 font-semibold focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">
          Special Requirements
        </label>
        <textarea
          rows={4}
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none"
          placeholder={`Tell us about your preferences for ${locationName} (hotel, category, timing)...`}
        />
      </div>

      <button
        type="submit"
        disabled={submissionStatus === 'submitting'}
        className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-600/30 hover:shadow-gold-600/50 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
      >
        <Phone className="w-5 h-5" />
        {submissionStatus === 'submitting' ? 'Processing...' : `Book Escort in ${locationName}`}
      </button>
    </form>
  );
}
