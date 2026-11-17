import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MediaCard } from '@/components/media-card';
import { isLocale, withLang, type Locale } from '@/lib/locale';
import { getCustomerSegments, getHomeExtras, getServiceAreas } from '@/lib/localized-content';
import { buildPageMetadata, getStaticSeo, resolveParams } from '@/lib/site-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await resolveParams(params);
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const seo = getStaticSeo(locale, 'projects');
  return buildPageMetadata({
    locale,
    path: '/proyectos',
    title: seo.title,
    description: seo.description,
  });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await resolveParams(params);
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const text = getHomeExtras(locale).pages.projects;
  const segments = getCustomerSegments(locale);
  const services = getServiceAreas(locale);

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(180deg, rgba(16,19,22,0.72), rgba(16,19,22,0.45)), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1500&q=80)' }}>
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="section-heading">
            <h2>{text.customers}</h2>
          </div>
          <div className="segment-grid">
            {segments.map((segment) => (
              <MediaCard
                key={segment.slug}
                href={withLang(segment.href, locale)}
                image={segment.image}
                title={segment.title}
                description={segment.blurb}
                cta={segment.title}
                imageHeight={220}
              />
            ))}
          </div>

          <div className="section-heading" style={{ marginTop: 56 }}>
            <h2>{text.services}</h2>
          </div>
          <div className="service-grid">
            {services.map((area) => (
              <MediaCard
                key={area.slug}
                href={withLang(area.href, locale)}
                image={area.image}
                title={area.title}
                description={area.summary}
                cta={area.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
