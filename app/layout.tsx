import './globals.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { DocumentLang } from '@/components/document-lang';
import { GoogleAnalytics } from '@/components/google-analytics';
import { OrganizationJsonLd } from '@/components/organization-json-ld';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { getCompanyName, getSeo, getSiteUrl } from '@/lib/site-config';

const company = getCompanyName();
const siteUrl = getSiteUrl();
const homeSeo = getSeo('es').home;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeSeo.title,
    template: `%s | ${company}`,
  },
  description: homeSeo.description,
  keywords: getSeo('es').keywords,
  openGraph: {
    title: company,
    description: homeSeo.description,
    url: siteUrl,
    siteName: company,
    locale: 'es_PA',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <OrganizationJsonLd />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <DocumentLang />
        </Suspense>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
