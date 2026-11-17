import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MediaCard } from '@/components/media-card';
import { isLocale, withLang, type Locale } from '@/lib/locale';
import { getHomeExtras, getServiceAreas } from '@/lib/localized-content';
import { buildPageMetadata, getStaticSeo, resolveParams } from '@/lib/site-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await resolveParams(params);
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const seo = getStaticSeo(locale, 'services');
  return buildPageMetadata({
    locale,
    path: '/servicios',
    title: seo.title,
    description: seo.description,
  });
}

export default async function ServiciosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await resolveParams(params);
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const text = getHomeExtras(locale).pages.services;
  const serviceAreas = getServiceAreas(locale);

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(180deg, rgba(16,19,22,0.72), rgba(16,19,22,0.45)), url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1500&q=80)' }}>
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container service-grid">
          {serviceAreas.map((area) => (
            <MediaCard
              key={area.slug}
              href={withLang(area.href, locale)}
              image={area.image}
              title={area.title}
              description={area.summary}
              cta={text.cta}
            />
          ))}
        </div>
      </section>
    </>
  );
}
