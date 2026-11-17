import { defaultLocale, locales, type Locale } from '@/lib/locale-types';

export type { Locale };
export { defaultLocale, locales };

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

/** Build a contact URL that can pre-select service and/or customer segment. */
export function withContactIntent(
  locale: Locale,
  intent: { service?: string; segment?: string } = {},
): string {
  const params = new URLSearchParams();
  if (intent.service) params.set('service', intent.service);
  if (intent.segment) params.set('segment', intent.segment);
  if (locale !== defaultLocale) params.set('lang', locale);
  const query = params.toString();
  return query ? `/contacto?${query}` : '/contacto';
}
