import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resolveLocale, withLang } from '@/lib/locale';
import { getHomeExtras, getServiceArea, serviceSlugs } from '@/lib/localized-content';

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ lang?: string }> | { lang?: string };
}) {
  const { slug } = await params;
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const area = getServiceArea(locale, slug);
  const extras = getHomeExtras(locale);

  if (!area) {
    notFound();
  }

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.7), rgba(16,19,22,0.35)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">{extras.serviceDetail.kicker}</p>
          <h1>{area.title}</h1>
          <p>{area.summary}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>{extras.serviceDetail.includes}</h2>
            <p>{area.description}</p>
            <ul>
              {area.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>{extras.serviceDetail.problems}</h2>
            <ul>
              {area.problems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>{extras.serviceDetail.why}</h2>
            <p>{extras.serviceDetail.whyCopy}</p>
          </article>

          <aside className="info-panel">
            <h3>{extras.serviceDetail.idealFor}</h3>
            <ul>
              {area.whoFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" href={withLang('/contacto', locale)}>
                {extras.serviceDetail.request}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
