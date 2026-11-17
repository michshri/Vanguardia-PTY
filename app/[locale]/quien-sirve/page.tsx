import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MediaCard } from '@/components/media-card';
import { isLocale, withLang, type Locale } from '@/lib/locale';
import { getCustomerSegments, getHomeExtras, getPageHeaderImage } from '@/lib/localized-content';
import { buildPageMetadata, getStaticSeo, resolveParams } from '@/lib/site-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await resolveParams(params);
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const seo = getStaticSeo(locale, 'customers');
  return buildPageMetadata({
    locale,
    path: '/quien-sirve',
    title: seo.title,
    description: seo.description,
  });
}

export default async function SegmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await resolveParams(params);
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const text = getHomeExtras(locale).pages.customers;
  const customerSegments = getCustomerSegments(locale);
  const headerImage = getPageHeaderImage('customers');

  return (
    <>
      <section className="page-header" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,19,22,0.72), rgba(16,19,22,0.45)), url(${headerImage})` }}>
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container segment-grid">
          {customerSegments.map((segment) => (
            <MediaCard
              key={segment.slug}
              href={withLang(segment.href, locale)}
              image={segment.image}
              title={segment.title}
              description={segment.blurb}
              cta={`${text.cta} ${segment.title}`}
              imageHeight={260}
            />
          ))}
        </div>
      </section>
    </>
  );
}
