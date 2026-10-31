import Link from 'next/link';
import { resolveLocale, withLang } from '@/lib/locale';
import { getCustomerSegments, getHomeExtras, getServiceAreas } from '@/lib/localized-content';
import { getDictionary } from '@/lib/translations';

export default async function HomePage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const dict = getDictionary(locale);
  const extras = getHomeExtras(locale);
  const segments = getCustomerSegments(locale);
  const services = getServiceAreas(locale);

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="eyebrow">{dict.hero.eyebrow}</div>
          <h1>{dict.hero.title}</h1>
          <p>{dict.hero.subtitle}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href={withLang('/contacto', locale)}>
              {dict.hero.primary}
            </Link>
            <Link className="btn btn-secondary" href={withLang('/servicios', locale)}>
              {dict.hero.secondary}
            </Link>
          </div>
          <div className="hero-meta">
            <span>{dict.hero.meta1}</span>
            <span>{dict.hero.meta2}</span>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container two-column">
          <div>
            <p className="section-kicker">{dict.heritage.kicker}</p>
            <h2>{dict.heritage.heading}</h2>
          </div>
          <div>
            <p>{dict.heritage.copy}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">{extras.customers.kicker}</p>
            <h2>{extras.customers.heading}</h2>
          </div>

          <div className="segment-grid">
            {segments.map((segment) => (
              <article key={segment.slug} className="segment-card">
                <span className="mini-tag">{segment.title}</span>
                <h3>{segment.title}</h3>
                <p>{segment.blurb}</p>
                <Link href={withLang(segment.href, locale)}>{extras.customers.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">{extras.services.kicker}</p>
            <h2>{extras.services.heading}</h2>
          </div>

          <div className="service-grid">
            {services.map((area, index) => (
              <article key={area.slug} className="service-card">
                <div className="service-icon">0{index + 1}</div>
                <h3>{area.title}</h3>
                <p>{area.summary}</p>
                <Link href={withLang(area.href, locale)}>{extras.services.moreInfo}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">{extras.why.kicker}</p>
            <h2>{extras.why.heading}</h2>
          </div>

          <div className="points-grid">
            {extras.why.points.map((point) => (
              <div key={point} className="value-point">
                <span className="checkmark">✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="section-kicker">{extras.ctaBand.kicker}</p>
            <h2>{extras.ctaBand.heading}</h2>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary" href={withLang('/contacto', locale)}>
              {extras.ctaBand.primary}
            </Link>
            <Link className="btn btn-secondary" href={withLang('/contacto', locale)}>
              {extras.ctaBand.secondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
