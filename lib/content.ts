import segmentsJson from '@/content/segments.json';
import servicesJson from '@/content/services.json';
import settingsJson from '@/content/settings.json';
import uiJson from '@/content/ui.json';
import { defaultLocale, type Locale } from '@/lib/locale-types';

type LocalizedFields = Record<string, unknown>;

type ServiceJson = {
  slug: string;
  href: string;
  order: number;
  active: boolean;
  image: string;
  es: LocalizedFields;
  en: LocalizedFields;
  fr: LocalizedFields;
};

type SegmentJson = {
  slug: string;
  href: string;
  order: number;
  active: boolean;
  image: string;
  es: LocalizedFields;
  en: LocalizedFields;
  fr: LocalizedFields;
};

export type ServiceAreaContent = {
  slug: string;
  href: string;
  image: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  whoFor: string[];
  problems: string[];
  bullets: string[];
};

export type SegmentContent = {
  slug: string;
  href: string;
  image: string;
  title: string;
  blurb: string;
  problems: string[];
  solutions: string[];
};

function pickLocale<T extends Record<string, unknown>>(item: Record<Locale, T>, locale: Locale): T {
  return item[locale] || item[defaultLocale];
}

export function getUi(locale: Locale) {
  return (uiJson as Record<Locale, (typeof uiJson)['es']>)[locale] || uiJson.es;
}

export function getSettings() {
  return settingsJson;
}

export function getServiceAreas(locale: Locale): ServiceAreaContent[] {
  return (servicesJson as ServiceJson[])
    .filter((item) => item.active !== false)
    .sort((a, b) => a.order - b.order)
    .map((item) => {
      const text = pickLocale(item, locale) as {
        title: string;
        shortTitle: string;
        summary: string;
        description: string;
        whoFor: string[];
        problems: string[];
        bullets: string[];
      };
      return {
        slug: item.slug,
        href: item.href,
        image: item.image,
        title: text.title,
        shortTitle: text.shortTitle,
        summary: text.summary,
        description: text.description,
        whoFor: text.whoFor,
        problems: text.problems,
        bullets: text.bullets,
      };
    });
}

export function getCustomerSegments(locale: Locale): SegmentContent[] {
  return (segmentsJson as SegmentJson[])
    .filter((item) => item.active !== false)
    .sort((a, b) => a.order - b.order)
    .map((item) => {
      const text = pickLocale(item, locale) as {
        title: string;
        blurb: string;
        problems: string[];
        solutions: string[];
      };
      return {
        slug: item.slug,
        href: item.href,
        image: item.image,
        title: text.title,
        blurb: text.blurb,
        problems: text.problems,
        solutions: text.solutions,
      };
    });
}

export function getServiceArea(locale: Locale, slug: string) {
  return getServiceAreas(locale).find((item) => item.slug === slug);
}

export function getCustomerSegment(locale: Locale, slug: string) {
  return getCustomerSegments(locale).find((item) => item.slug === slug);
}

export const serviceSlugs = (servicesJson as ServiceJson[]).map((item) => item.slug);
export const segmentSlugs = (segmentsJson as SegmentJson[]).map((item) => item.slug);

/** Back-compat aliases used across the app. */
export function getHomeExtras(locale: Locale) {
  const ui = getUi(locale);
  return {
    customers: ui.customers,
    services: ui.services,
    why: ui.why,
    ctaBand: ui.ctaBand,
    explore: ui.explore,
    footer: ui.footer,
    serviceDetail: ui.serviceDetail,
    segmentDetail: ui.segmentDetail,
    aboutValues: ui.aboutValues,
    contactForm: ui.contactForm,
    pages: ui.pages,
  };
}
