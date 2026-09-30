/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  async redirects() {
    return [
      // The product was renamed from 1-OPTIMISER to 1-OPTIMIZER; keep old links working.
      { source: '/apps/1-optimiser', destination: '/apps/1-optimizer', permanent: true },
      { source: '/apps/1-optimiser/:path*', destination: '/apps/1-optimizer/:path*', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // Versioned file name: change the name (hero-v3.mp4) when the video changes.
        source: '/hero-v2.mp4',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        // Other files in /public keep their names when replaced, so cache for a day
        // and refresh in the background for up to a week.
        source: '/:file((?!_next/).+\\.(?:jpg|jpeg|png|webp|avif|svg|txt))',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
    ];
  },
};

export default nextConfig;
