import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resolveLocale, withLang } from '@/lib/locale';
import { getCustomerSegment, getHomeExtras, segmentSlugs } from '@/lib/localized-content';

export function generateStaticParams() {
  return segmentSlugs.map((segment) => ({ segment }));
}

export default async function SegmentDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ segment: string }>;
  searchParams?: Promise<{ lang?: string }> | { lang?: string };
}) {
  const { segment: segmentSlug } = await params;
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const segment = getCustomerSegment(locale, segmentSlug);
  const extras = getHomeExtras(locale);

  if (!segment) {
    notFound();
  }

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
          </article>

          <aside className="info-panel">
            <h3>{extras.segmentDetail.focus}</h3>
            <p>{extras.segmentDetail.focusCopy}</p>
            <div style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" href={withLang('/contacto', locale)}>
                {extras.segmentDetail.talk}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
