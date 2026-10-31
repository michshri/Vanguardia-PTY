/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/servicios/construccion-renovacion', destination: '/servicios/construccion', permanent: true },
      { source: '/servicios/mantenimiento-reparaciones', destination: '/servicios/mantenimiento', permanent: true },
      { source: '/servicios/obras-especializadas', destination: '/servicios/mantenimiento', permanent: true },
      { source: '/quien-sirve/comercial-industrial', destination: '/quien-sirve/comercial', permanent: true },
    ];
  },
};

export default nextConfig;
