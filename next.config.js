/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig