import { defaultLocale, locales, type Locale } from '@/lib/translations';

export function resolveLocale(lang?: string | null): Locale {
  const value = (lang ?? '').toLowerCase();
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

/** Append ?lang= for non-default locales; leave Spanish URLs clean. */
export function withLang(href: string, locale: Locale): string {
  if (locale === defaultLocale) return href;

  const [pathAndQuery, hash] = href.split('#');
  const [path, existingQuery] = pathAndQuery.split('?');
  const params = new URLSearchParams(existingQuery || '');
  params.set('lang', locale);
  const query = params.toString();
  return `${path}?${query}${hash ? `#${hash}` : ''}`;
}
