import type { MetadataRoute } from 'next';
import { segmentSlugs, serviceSlugs } from '@/lib/localized-content';
import { locales, localizedPath, type Locale } from '@/lib/locale';
import { getSiteUrl, languageAlternates } from '@/lib/site-config';

function entry(path: string, locale: Locale, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) {
  const siteUrl = getSiteUrl();
  const localized = localizedPath(path, locale);
  return {
    url: `${siteUrl}${localized}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: languageAlternates(path),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/servicios', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/quien-sirve', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/proyectos', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/nosotros', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contacto', priority: 0.9, changeFrequency: 'monthly' },
  ];

  const servicePaths = serviceSlugs.map((slug) => `/servicios/${slug}`);
  const segmentPaths = segmentSlugs.map((slug) => `/quien-sirve/${slug}`);

  const allPaths = [
    ...staticPaths.map((item) => item.path),
    ...servicePaths,
    ...segmentPaths,
  ];

  const metaByPath = new Map(staticPaths.map((item) => [item.path, item]));

  return locales.flatMap((locale) =>
    allPaths.map((path) => {
      const meta = metaByPath.get(path);
      return entry(path, locale, meta?.priority ?? 0.7, meta?.changeFrequency ?? 'monthly');
    }),
  );
}
