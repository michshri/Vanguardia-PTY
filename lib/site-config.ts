import type { Metadata } from 'next';
import seoJson from '@/content/seo.json';
import { getSettings } from '@/lib/content';
import { defaultLocale, locales, localizedPath, type Locale } from '@/lib/locale';

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

export function languageAlternates(path: string) {
  const siteUrl = getSiteUrl();
  const barePath = path.startsWith('/') ? path : `/${path}`;
  const languages: Record<string, string> = {
    'x-default': `${siteUrl}${localizedPath(barePath, defaultLocale)}`,
    'es-PA': `${siteUrl}${localizedPath(barePath, 'es')}`,
    en: `${siteUrl}${localizedPath(barePath, 'en')}`,
    fr: `${siteUrl}${localizedPath(barePath, 'fr')}`,
  };
  return languages;
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
  const barePath = path.startsWith('/') ? path : `/${path}`;
  const canonicalPath = localizedPath(barePath, locale);
  const seo = getSeo(locale);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates(barePath),
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

export async function resolveParams<T extends Record<string, string>>(
  params: Promise<T> | T,
): Promise<T> {
  return params instanceof Promise ? await params : params;
}

export async function resolveSearchParams<T extends Record<string, string | undefined>>(
  searchParams?: Promise<T> | T,
): Promise<T | undefined> {
  return searchParams instanceof Promise ? await searchParams : searchParams;
}

export { locales };
