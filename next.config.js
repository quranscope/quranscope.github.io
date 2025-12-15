/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: false, // Disable strict mode to reduce HMR messages
}

module.exports = nextConfig
