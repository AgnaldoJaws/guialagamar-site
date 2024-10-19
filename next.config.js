/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_API_PROTOCOL || 'https',
        hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || 'admin.guialagamar.com.br',
        port: process.env.NEXT_PUBLIC_API_PORT || '',
        pathname: process.env.NEXT_PUBLIC_API_PATHNAME || '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.guialagamar.com.br',
        pathname: '/storage/**',
        port: '',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: process.env.NEXT_PUBLIC_API_PORT || '8084', // Add this for local development
        pathname: '/storage/**',
      },
      // Add more configurations if necessary
    ],
  },
};

module.exports = nextConfig;
