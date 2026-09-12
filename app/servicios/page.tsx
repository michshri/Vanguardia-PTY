import Link from 'next/link';
import { serviceAreas } from '@/lib/site-data';
import { defaultLocale, type Locale } from '@/lib/translations';

export const metadata = {
  title: 'Servicios',
  description: 'Servicios de construcción, mantenimiento, gestión de proyectos y obras especializadas para propiedades en Panamá.',
};

const resolveLocale = (lang?: string): Locale => {
  const value = (lang ?? '').toLowerCase();
  return value === 'en' || value === 'fr' ? value : defaultLocale;
};

const copy = {
  es: {
    kicker: 'Servicios',
    title: 'Soluciones para la propiedad y la ejecución.',
    intro: 'Vanguardia responde a necesidades de construcción, mantenimiento, gestión y obras técnicas con una sola referencia clara y responsable.',
    cta: 'Ver servicio',
  },
  en: {
    kicker: 'Services',
    title: 'Solutions for property and execution.',
    intro: 'Vanguardia responds to construction, maintenance, management and technical work needs with one clear, accountable point of reference.',
    cta: 'View service',
  },
  fr: {
    kicker: 'Services',
    title: 'Des solutions pour la propriété et l’exécution.',
    intro: 'Vanguardia répond aux besoins de construction, maintenance, gestion et travaux techniques avec un seul interlocuteur clair et responsable.',
    cta: 'Voir le service',
  },
} as const;

export default async function ServiciosPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const text = copy[locale];

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container service-grid">
          {serviceAreas.map((area) => (
            <article key={area.slug} className="service-card">
              <div className="service-icon">0{serviceAreas.indexOf(area) + 1}</div>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
              <ul>
                {area.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <Link href={`${area.href}${resolvedParams?.lang ? `?lang=${locale}` : ''}`}>{text.cta}</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
