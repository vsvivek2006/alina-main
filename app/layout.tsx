import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ALINA VIP | Premium Luxury Escort Service in Gurgaon',
    template: '%s | ALINA VIP',
  },
  description:
    'ALINA VIP offers premium luxury escort service in Gurgaon. Verified profiles, VIP escorts, Russian call girls, 100% discreet hotel & residence outcalls. Available 24/7.',
  applicationName: 'ALINA VIP',
  authors: [{ name: 'ALINA VIP' }],
  generator: 'Next.js',
  keywords: [
    'escort service in Gurgaon',
    'call girls Gurgaon',
    'VIP escorts Gurgaon',
    'Russian escorts Gurgaon',
    'luxury call girls',
    'escort agency Gurgaon',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: 'ALINA VIP',
    title: 'ALINA VIP | Premium Luxury Escort Service in Gurgaon',
    description:
      'ALINA VIP offers premium luxury escort service in Gurgaon. Verified profiles, VIP escorts, Russian call girls, 100% discreet hotel & residence outcalls.',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ALINA VIP Luxury Escort Service in Gurgaon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALINA VIP | Premium Luxury Escort Service in Gurgaon',
    description:
      'ALINA VIP offers premium luxury escort service in Gurgaon. Verified profiles, VIP escorts, Russian call girls, 100% discreet hotel & residence outcalls.',
    images: [`${siteConfig.url}/og-image.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-charcoal-900 text-charcoal-100 font-sans antialiased">
        <div className="min-h-screen flex flex-col bg-luxury-gradient">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
