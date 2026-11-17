import type { Metadata } from 'next';
import seoJson from '@/content/seo.json';
import { getSettings } from '@/lib/content';
import { defaultLocale, type Locale } from '@/lib/locale-types';

type SeoPageKey = 'home' | 'services' | 'customers' | 'projects' | 'about' | 'contact';

type SeoBundle = {
  home: { title: string; description: string };
  services: { title: string; description: string };
  customers: { title: string; description: string };
  projects: { title: string; description: string };
  about: { title: string; description: string };
  contact: { title: string; description: string };
  serviceFallback: { description: string };
  segmentFallback: { description: string };
  keywords: string[];
};

export function getCompanyName() {
  return getSettings().company.name;
}

export function getSiteUrl() {
  return String(getSettings().siteUrl || 'https://www.vanguardiapty.com').replace(/\/$/, '');
}

export function getSeo(locale: Locale): SeoBundle {
  const bundle = (seoJson as Record<Locale, SeoBundle>)[locale] || (seoJson as Record<Locale, SeoBundle>)[defaultLocale];
  return bundle;
}

export function ogLocaleFor(locale: Locale) {
  if (locale === 'en') return 'en_US';
  if (locale === 'fr') return 'fr_FR';
  return 'es_PA';
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const siteUrl = getSiteUrl();
  const company = getCompanyName();
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const seo = getSeo(locale);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${canonicalPath}`,
      siteName: company,
      locale: ogLocaleFor(locale),
      type: 'website',
    },
  };
}

export function getStaticSeo(locale: Locale, key: SeoPageKey) {
  return getSeo(locale)[key];
}

export async function resolveSearchParams<T extends Record<string, string | undefined>>(
  searchParams?: Promise<T> | T,
): Promise<T | undefined> {
  return searchParams instanceof Promise ? await searchParams : searchParams;
}
