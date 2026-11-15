import Link from 'next/link';
import { resolveLocale, withLang } from '@/lib/locale';
import { getCustomerSegments, getServiceAreas } from '@/lib/localized-content';

export const metadata = {
  title: 'Proyectos',
  description: 'Portafolio de trabajos, proyectos y experiencias de Vanguardia en construcción, mantenimiento y gestión de propiedad en Panamá.',
};

const copy = {
  es: {
    kicker: 'Proyectos',
    title: 'Trabajos organizados por cliente y por servicio.',
    intro: 'Explore nuestros segmentos de clientes y servicios. Los casos de proyecto se irán añadiendo según el trabajo realizado.',
    customers: 'Por tipo de cliente',
    services: 'Por tipo de servicio',
  },
  en: {
    kicker: 'Projects',
    title: 'Work organized by customer and by service.',
    intro: 'Explore our customer segments and services. Project case studies will be added as completed work grows.',
    customers: 'By customer type',
    services: 'By service type',
  },
  fr: {
    kicker: 'Projets',
    title: 'Des travaux organisés par client et par service.',
    intro: 'Explorez nos segments clients et nos services. Les études de cas seront ajoutées au fil des travaux réalisés.',
    customers: 'Par type de client',
    services: 'Par type de service',
  },
} as const;

export default async function ProjectsPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const text = copy[locale];
  const segments = getCustomerSegments(locale);
  const services = getServiceAreas(locale);

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
              <article key={segment.slug} className="segment-card">
                <h3>{segment.title}</h3>
                <p>{segment.blurb}</p>
                <Link href={withLang(segment.href, locale)}>{segment.title}</Link>
              </article>
            ))}
          </div>

          <div className="section-heading" style={{ marginTop: 48 }}>
            <h2>{text.services}</h2>
          </div>
          <div className="service-grid">
            {services.map((area, index) => (
              <article key={area.slug} className="service-card">
                <div className="service-icon">0{index + 1}</div>
                <h3>{area.title}</h3>
                <p>{area.summary}</p>
                <Link href={withLang(area.href, locale)}>{area.title}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
