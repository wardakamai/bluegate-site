import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['yahoo-finance2'],

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // 301 redirects from legacy WordPress URLs (§10 of CLAUDE.md)
  async redirects() {
    return [
      // ── Legacy page URLs ──────────────────────────────────────────────
      { source: '/operations.html',          destination: '/services/oil-storage', permanent: true },
      { source: '/services.html',            destination: '/services',             permanent: true },
      { source: '/pipeline-transport.html',  destination: '/services/shipping',    permanent: true },
      { source: '/logistics-solutions.html', destination: '/services/shipping',    permanent: true },
      { source: '/terminal-operations.html', destination: '/terminal',             permanent: true },
      { source: '/about-us.html',            destination: '/about',                permanent: true },
      { source: '/sustainability.html',      destination: '/sustainability',        permanent: true },
      { source: '/contact-us.html',          destination: '/contact',              permanent: true },
      { source: '/products.html',            destination: '/products',             permanent: true },

      // ── Legacy root index files ───────────────────────────────────────
      { source: '/index.html',               destination: '/',                     permanent: true },
      { source: '/index.php',                destination: '/',                     permanent: true },

      // ── WordPress system paths (old site residue in Google index) ─────
      { source: '/wp-content/:path*',        destination: '/',                     permanent: true },
      { source: '/wp-admin/:path*',          destination: '/',                     permanent: true },
      { source: '/wp-includes/:path*',       destination: '/',                     permanent: true },
      { source: '/wp-json/:path*',           destination: '/',                     permanent: true },
      { source: '/wp-login.php',             destination: '/',                     permanent: true },
      { source: '/wp-cron.php',              destination: '/',                     permanent: true },
      { source: '/xmlrpc.php',               destination: '/',                     permanent: true },
      { source: '/feed',                     destination: '/',                     permanent: true },
      { source: '/feed/:path*',              destination: '/',                     permanent: true },
      // Catch-all for any remaining .php URLs from the old WordPress install
      { source: '/:path*.php',               destination: '/',                     permanent: true },
    ]
  },

  // Security and caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-Frame-Options',         value: 'DENY' },
          { key: 'X-XSS-Protection',        value: '1; mode=block' },
          { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',      value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/(.*)\\.jpg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.jpeg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.webp',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.avif',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.ico',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.pdf',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
    ]
  },
}

export default nextConfig
