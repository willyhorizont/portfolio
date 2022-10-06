/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio'
}

module.exports = nextConfig
