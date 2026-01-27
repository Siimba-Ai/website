/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages with custom domain
  basePath: '',
  trailingSlash: true,
}

module.exports = nextConfig
