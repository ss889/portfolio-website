/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add any remote image domains you might use
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },
  // Disable experimental features that might cause issues in production
  experimental: {
    // Disable optimizeCss to prevent critters-related issues
    optimizeCss: false,
    scrollRestoration: true,
  },
};

export default nextConfig;