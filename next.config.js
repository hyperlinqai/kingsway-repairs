/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out the 'output: export' line to enable API routes
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
