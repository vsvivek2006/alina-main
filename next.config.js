/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/call-girls', destination: '/services', permanent: true },
      { source: '/escorts', destination: '/services', permanent: true },
      { source: '/russian-escorts', destination: '/category/russian-call-girls', permanent: true },
      { source: '/vip-escorts', destination: '/category/vip-call-girls', permanent: true },
      { source: '/model-escorts', destination: '/category/model-escorts', permanent: true },
      { source: '/college-girls', destination: '/category/college-girls', permanent: true },
      { source: '/housewife-escorts', destination: '/category/housewife-escorts', permanent: true },
      { source: '/independent-escorts', destination: '/category/independent-girls', permanent: true },
      { source: '/air-hostess-escorts', destination: '/category/air-hostess', permanent: true },
      { source: '/celebrity-escorts', destination: '/category/celebrity-escorts', permanent: true },
      { source: '/category/celebrity-call-girls', destination: '/category/celebrity-escorts', permanent: true },
      { source: '/travel-escorts', destination: '/category/travel-escorts', permanent: true },
      { source: '/vip-call-girls', destination: '/category/vip-call-girls', permanent: true },
    ];
  },
};

export default nextConfig;
