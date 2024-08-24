/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_API_PROTOCOL || 'http',
        hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || 'admin.guialagamar.com.br',
        port: process.env.NEXT_PUBLIC_API_PORT || '',
        pathname: process.env.NEXT_PUBLIC_API_PATHNAME || '/storage/**',
      },
      {
        protocol: 'http',
        hostname: 'admin.guialagamar.com.br',
        port: '',
        pathname: '/storage/**',
      },
      // Você pode adicionar outras configurações de domínios e subdomínios aqui, se necessário
    ],
  },
};

module.exports = nextConfig;
