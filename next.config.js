/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
