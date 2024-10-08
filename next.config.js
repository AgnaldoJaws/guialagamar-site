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
      // Você pode adicionar outras configurações de domínios e subdomínios aqui, se necessário
    ],
  },
};

module.exports = nextConfig;
