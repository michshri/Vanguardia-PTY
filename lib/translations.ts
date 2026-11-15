import { getUi } from '@/lib/content';
import { defaultLocale, locales, type Locale } from '@/lib/locale-types';

export { defaultLocale, locales, type Locale };

export type TranslationSet = {
  nav: {
    home: string;
    services: string;
    segments: string;
    projects: string;
    about: string;
    contact: string;
    whatsapp: string;
    request: string;
    menu: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    meta1: string;
    meta2: string;
  };
  heritage: {
    kicker: string;
    heading: string;
    copy: string;
  };
  segments: {
    kicker: string;
    heading: string;
  };
};

export function getDictionary(locale: string): TranslationSet {
  const resolved = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
  const ui = getUi(resolved);
  return {
    nav: ui.nav,
    hero: ui.hero,
    heritage: ui.heritage,
    segments: {
      kicker: ui.customers.kicker,
      heading: ui.customers.heading,
    },
  };
}

export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.replace(/^\/+/, '').split('/')[0] as Locale;
  return locales.includes(firstSegment) ? firstSegment : defaultLocale;
}
