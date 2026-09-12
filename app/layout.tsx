import './globals.css';
import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '@/components/site-shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vanguardia-pty.com'),
  title: {
    default: 'Vanguardia PTY | Construcción, mantenimiento y gestión de propiedad en Panamá',
    template: '%s | Vanguardia PTY',
  },
  description:
    'Vanguardia PTY ofrece construcción, renovación, mantenimiento, gestión de proyectos y servicios especializados para viviendas, PH, comercio e industria en Panamá.',
  keywords: [
    'construcción Panamá',
    'construcción empresa Panamá',
    'mantenimiento Panamá',
    'PH mantenimiento Panamá',
    'impermeabilización Panamá',
    'gestión de proyectos Panamá',
  ],
  openGraph: {
    title: 'Vanguardia PTY',
    description:
      'Un solo responsable para construcción, mantenimiento y gestión de propiedad en Panamá.',
    url: 'https://www.vanguardia-pty.com',
    siteName: 'Vanguardia PTY',
    locale: 'es_PA',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
