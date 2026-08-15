import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['yahoo-finance2'],
  // Shared hosting (LVE) restricts process spawning — cap build workers to 1
  // to avoid EAGAIN when Next.js tries to fork its static-generation pool.
  experimental: {
    cpus: 1,
    workerThreads: false,
  },

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 85],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  // 301 redirects from legacy WordPress URLs (§10 of CLAUDE.md)
  async redirects() {
    return [
      // ── Legacy page URLs ──────────────────────────────────────────────
      { source: '/operations.html', destination: '/services/oil-storage', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/pipeline-transport.html', destination: '/services/shipping', permanent: true },
      { source: '/logistics-solutions.html', destination: '/services/shipping', permanent: true },
      { source: '/terminal-operations.html', destination: '/terminal', permanent: true },
      { source: '/about-us.html', destination: '/about', permanent: true },
      { source: '/sustainability.html', destination: '/sustainability', permanent: true },
      { source: '/contact-us.html', destination: '/contact', permanent: true },
      { source: '/products.html', destination: '/products', permanent: true },

      // ── Content consolidation (2026) ──────────────────────────────────
      { source: '/storage-facility', destination: '/services/oil-storage', permanent: true },
      { source: '/petroleum-storage-terminal', destination: '/terminal', permanent: true },

      // ── Legacy root index files ───────────────────────────────────────
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },

      // ── WordPress system paths (old site residue in Google index) ─────
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-includes/:path*', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-cron.php', destination: '/', permanent: true },
      { source: '/xmlrpc.php', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/feed/:path*', destination: '/', permanent: true },
      // Catch-all for any remaining .php URLs from the old WordPress install
      { source: '/:path*.php', destination: '/', permanent: true },
    ];
  },

  // Security and caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      // Next.js's own content-hashed build output (/_next/static/*) already gets
      // immutable caching automatically. The rules below cover files in /public,
      // which are served at a fixed URL that is NOT content-hashed — the same
      // filename can later point to different bytes (e.g. a replaced photo), so
      // "immutable" is unsafe here. Use a short max-age plus revalidation instead.
      {
        source: '/(.*)\\.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(.*)\\.jpeg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(.*)\\.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(.*)\\.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(.*)\\.avif',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(.*)\\.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(.*)\\.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/(.*)\\.pdf',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
    ];
  },
};

export default nextConfig;
