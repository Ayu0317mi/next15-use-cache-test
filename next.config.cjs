const { withPayload } = require('@payloadcms/next/withPayload')
const redirects = require('./redirects.js')

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useCache: true,
  },
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL, 'https://lh3.googleusercontent.com'].map((item) => {
        const url = new URL(item)
        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
      {
        hostname: 'localhost',
        protocol: 'http',
      },
    ],
  },
  reactStrictMode: true,
  redirects,
}

module.exports = withPayload(nextConfig, { devBundleServerPackages: false })