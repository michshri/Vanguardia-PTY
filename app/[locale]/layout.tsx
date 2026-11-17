import '../globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@/components/google-analytics';
import { OrganizationJsonLd } from '@/components/organization-json-ld';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { isLocale, locales, type Locale } from '@/lib/locale';
import { getCompanyName, getSeo, getSiteUrl, resolveParams } from '@/lib/site-config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await resolveParams(params);
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const company = getCompanyName();
  const siteUrl = getSiteUrl();
  const homeSeo = getSeo(locale).home;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: homeSeo.title,
      template: `%s | ${company}`,
    },
    description: homeSeo.description,
    keywords: getSeo(locale).keywords,
    openGraph: {
      title: company,
      description: homeSeo.description,
      url: siteUrl,
      siteName: company,
      locale: locale === 'en' ? 'en_US' : locale === 'fr' ? 'fr_FR' : 'es_PA',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await resolveParams(params);
  if (!isLocale(rawLocale)) notFound();

  return (
    <html lang={rawLocale}>
      <body>
        <OrganizationJsonLd />
        <GoogleAnalytics />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
