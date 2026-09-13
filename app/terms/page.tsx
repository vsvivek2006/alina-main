import type { Metadata } from 'next';
import { TermsPage } from '@/components/LegalPages';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ALINA VIP Escort Service',
  description: 'Terms and conditions governing the booking and provision of luxury escort services by ALINA VIP.',
  alternates: { canonical: 'https://escort.alinavip.com/terms' },
  robots: {
    index: false,
    follow: true,
  },
};


export default function Page() {
  return <TermsPage />;
}
