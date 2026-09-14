import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/LegalPages';

export const metadata: Metadata = {
  title: 'Privacy Policy | ALINA VIP Escort Service',
  description: 'Our privacy policy outlines how ALINA VIP protects client confidentiality, data handling practices, and zero-trace privacy guarantees.',
  alternates: { canonical: 'https://alinavip.com/privacy-policy' },
  robots: {
    index: false,
    follow: true,
  },
};


export default function Page() {
  return <PrivacyPolicyPage />;
}
