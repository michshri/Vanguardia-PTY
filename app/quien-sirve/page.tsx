import type { Metadata } from 'next';
import { MediaCard } from '@/components/media-card';
import { resolveLocale, withLang } from '@/lib/locale';
import { getCustomerSegments, getHomeExtras } from '@/lib/localized-content';
import { buildPageMetadata, getStaticSeo, resolveSearchParams } from '@/lib/site-config';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }> | { lang?: string };
}): Promise<Metadata> {
  const resolvedParams = await resolveSearchParams(searchParams);
  const locale = resolveLocale(resolvedParams?.lang);
  const seo = getStaticSeo(locale, 'customers');
  return buildPageMetadata({
    locale,
    path: '/quien-sirve',
    title: seo.title,
    description: seo.description,
  });
}

export default async function SegmentsPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = await resolveSearchParams(searchParams);
  const locale = resolveLocale(resolvedParams?.lang);
  const text = getHomeExtras(locale).pages.customers;
  const customerSegments = getCustomerSegments(locale);

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(180deg, rgba(16,19,22,0.72), rgba(16,19,22,0.45)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=80)' }}>
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
