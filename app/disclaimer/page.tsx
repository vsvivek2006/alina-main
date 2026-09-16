import type { Metadata } from 'next';
import { DisclaimerPage } from '@/components/LegalPages';
import { getAlternateLanguages } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Disclaimer | ALINA VIP Escort Service',
  description: 'Legal disclaimer and terms of engagement for ALINA VIP luxury escort services.',
  alternates: {
    canonical: 'https://alinavip.com/disclaimer',
    languages: getAlternateLanguages('/disclaimer'),
  },
  robots: {
    index: false,
    follow: true,
  },
};


export default function Page() {
  return <DisclaimerPage />;
}
