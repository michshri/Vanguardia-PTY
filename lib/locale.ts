import { defaultLocale, locales, type Locale } from '@/lib/locale-types';

export type { Locale };
export { defaultLocale, locales };

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && locales.includes(value as Locale);
}

export function resolveLocale(lang?: string | null): Locale {
  const value = (lang ?? '').toLowerCase();
  return isLocale(value) ? value : defaultLocale;
}

/** Locales that appear as a URL prefix. Spanish stays unprefixed. */
export function hasLocalePrefix(locale: Locale) {
  return locale !== defaultLocale;
}

/** Strip /en or /fr from the start of a pathname. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/en' || pathname === '/fr') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/';
  if (pathname.startsWith('/fr/')) return pathname.slice(3) || '/';
  return pathname || '/';
}

export function localeFromPathname(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  return defaultLocale;
}

/**
 * Build a public href for a locale.
 * Spanish: /servicios
 * English/French: /en/servicios, /fr/servicios
 * Preserves query string and hash, except legacy ?lang=.
 */
export function withLang(href: string, locale: Locale): string {
  const [pathAndQuery, hash] = href.split('#');
  const [rawPath, existingQuery] = pathAndQuery.split('?');
  const path = stripLocalePrefix(rawPath || '/');
  const params = new URLSearchParams(existingQuery || '');
  params.delete('lang');

  const localizedPath =
    locale === defaultLocale ? path || '/' : `/${locale}${path === '/' ? '' : path}`;

  const query = params.toString();
  return `${localizedPath}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
}

/** Build a contact URL that can pre-select service and/or customer segment. */
export function withContactIntent(
  locale: Locale,
  intent: { service?: string; segment?: string } = {},
): string {
  const params = new URLSearchParams();
  if (intent.service) params.set('service', intent.service);
  if (intent.segment) params.set('segment', intent.segment);
  const query = params.toString();
  return withLang(query ? `/contacto?${query}` : '/contacto', locale);
}

export function localizedPath(path: string, locale: Locale): string {
  return withLang(path, locale);
}
