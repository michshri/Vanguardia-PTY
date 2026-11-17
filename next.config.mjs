/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/servicios/construccion', destination: '/servicios/construccion-renovacion', permanent: true },
      { source: '/servicios/renovacion', destination: '/servicios/construccion-renovacion', permanent: true },
      { source: '/servicios/mantenimiento', destination: '/servicios/mantenimiento-reparaciones', permanent: true },
      { source: '/quien-sirve/comercial-industrial', destination: '/quien-sirve/comercial', permanent: true },
      { source: '/:locale(en|fr)/servicios/construccion', destination: '/:locale/servicios/construccion-renovacion', permanent: true },
      { source: '/:locale(en|fr)/servicios/renovacion', destination: '/:locale/servicios/construccion-renovacion', permanent: true },
      { source: '/:locale(en|fr)/servicios/mantenimiento', destination: '/:locale/servicios/mantenimiento-reparaciones', permanent: true },
      { source: '/:locale(en|fr)/quien-sirve/comercial-industrial', destination: '/:locale/quien-sirve/comercial', permanent: true },
    ];
  },
};

export default nextConfig;
