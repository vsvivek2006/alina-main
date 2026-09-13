import type { Metadata } from 'next';
import { DisclaimerPage } from '@/components/LegalPages';

export const metadata: Metadata = {
  title: 'Disclaimer | ALINA VIP Escort Service',
  description: 'Legal disclaimer and terms of engagement for ALINA VIP luxury escort and adult companionship services.',
  alternates: { canonical: 'https://escort.alinavip.com/disclaimer' },
  robots: {
    index: false,
    follow: true,
  },
};


export default function Page() {
  return <DisclaimerPage />;
}
