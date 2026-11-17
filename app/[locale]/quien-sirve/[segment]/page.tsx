import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLocale, withContactIntent, withLang, type Locale } from '@/lib/locale';
import {
  getCustomerSegment,
  getHomeExtras,
  getServiceArea,
  segmentSlugs,
} from '@/lib/localized-content';
import { buildPageMetadata, getSeo, resolveParams } from '@/lib/site-config';

export function generateStaticParams() {
  return segmentSlugs.map((segment) => ({ segment }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; segment: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, segment: segmentSlug } = await resolveParams(params);
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const segment = getCustomerSegment(locale, segmentSlug);
  const seo = getSeo(locale);

  if (!segment) {
    return {};
  }

  return buildPageMetadata({
    locale,
    path: segment.href,
    title: segment.title,
    description: segment.blurb || seo.segmentFallback.description,
  });
}

export default async function SegmentDetailPage({
  params,
}: {
  params: Promise<{ locale: string; segment: string }>;
}) {
  const { locale: rawLocale, segment: segmentSlug } = await resolveParams(params);
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const segment = getCustomerSegment(locale, segmentSlug);
  const extras = getHomeExtras(locale);

  if (!segment) {
    notFound();
  }

  const relatedServices = segment.services
    .map((serviceSlug) => getServiceArea(locale, serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <>
      <section
        className="page-header"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(16,19,22,0.72), rgba(16,19,22,0.45)), url(${segment.image})`,
        }}
      >
        <div className="container">
          <p className="section-kicker">{extras.segmentDetail.kicker}</p>
          <h1>{segment.title}</h1>
          <p>{segment.blurb}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>{extras.segmentDetail.needs}</h2>
            <ul>
              {segment.problems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>{extras.segmentDetail.how}</h2>
            <ul>
              {segment.solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {relatedServices.length > 0 ? (
              <>
                <h2>{extras.segmentDetail.relatedServices}</h2>
                <ul className="related-links">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link href={withLang(service.href, locale)}>
                        {service.title}
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </article>

          <aside className="info-panel">
            <h3>{extras.segmentDetail.focus}</h3>
            <p>{extras.segmentDetail.focusCopy}</p>
            <div style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" href={withContactIntent(locale, { segment: segment.slug })}>
                {extras.segmentDetail.talk}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
