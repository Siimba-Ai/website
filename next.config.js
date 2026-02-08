/** @type {import('next').NextConfig} */
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  reactStrictMode: true,
  output: isGithubPagesBuild ? 'export' : undefined,
  images: {
    unoptimized: isGithubPagesBuild,
  },
}

module.exports = nextConfig
