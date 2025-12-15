/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  basePath: process.env.NODE_ENV === 'production' ? '/quranscopycreatedcontents' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/quranscopycreatedcontents' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: false, // Disable strict mode to reduce HMR messages
}

module.exports = nextConfig
