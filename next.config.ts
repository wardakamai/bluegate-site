import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // 301 redirects from legacy WordPress URLs (§10 of CLAUDE.md)
  async redirects() {
    return [
      { source: '/operations.html',         destination: '/services/oil-storage', permanent: true },
      { source: '/services.html',           destination: '/services',             permanent: true },
      { source: '/pipeline-transport.html', destination: '/services/shipping',    permanent: true },
      { source: '/logistics-solutions.html',destination: '/services/shipping',    permanent: true },
      { source: '/terminal-operations.html',destination: '/terminal',             permanent: true },
      { source: '/about-us.html',           destination: '/about',                permanent: true },
      { source: '/sustainability.html',     destination: '/sustainability',        permanent: true },
      { source: '/contact-us.html',         destination: '/contact',              permanent: true },
      { source: '/products.html',           destination: '/products',             permanent: true },
    ]
  },
}

export default nextConfig
