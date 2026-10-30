import Link from 'next/link';
import { resolveLocale, withLang } from '@/lib/locale';
import { getCustomerSegments } from '@/lib/localized-content';

export const metadata = {
  title: 'Quiénes servimos',
  description: 'Vanguardia atiende necesidades residenciales, comerciales, industriales y de PH en Panamá con un enfoque de propiedad y coordinación responsable.',
};

const copy = {
  es: {
    kicker: 'Quiénes servimos',
    title: 'Necesidades reales. Respuestas claras.',
    intro: 'Vanguardia trabaja con clientes que necesitan planificación, ejecución y seguimiento bien gestionado para proteger sus propiedades y su operación.',
    cta: 'Explorar',
  },
  en: {
    kicker: 'Who we serve',
    title: 'Real needs. Clear answers.',
    intro: 'Vanguardia works with clients who need planning, execution and well-managed follow-through to protect their properties and operations.',
    cta: 'Explore',
  },
  fr: {
    kicker: 'Qui nous servons',
    title: 'Des besoins réels. Des réponses claires.',
    intro: 'Vanguardia accompagne des clients qui ont besoin d’une planification, d’une exécution et d’un suivi bien géré pour protéger leurs biens et leur activité.',
    cta: 'Explorer',
  },
} as const;

export default async function SegmentsPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const text = copy[locale];
  const customerSegments = getCustomerSegments(locale);

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.76), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container segment-grid">
          {customerSegments.map((segment) => (
            <article key={segment.slug} className="segment-card">
              <span className="mini-tag">{segment.title}</span>
              <h3>{segment.title}</h3>
              <p>{segment.blurb}</p>
              <ul>
                {segment.problems.map((problem) => (
                  <li key={problem}>{problem}</li>
                ))}
              </ul>
              <Link href={withLang(segment.href, locale)}>
                {text.cta} {segment.title}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
