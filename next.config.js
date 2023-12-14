/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/sebiten/Blog/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig