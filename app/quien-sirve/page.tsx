import Link from 'next/link';
import { resolveLocale, withLang } from '@/lib/locale';
import { getCustomerSegments } from '@/lib/localized-content';

export const metadata = {
  title: 'Clientes',
  description: 'Vanguardia atiende clientes residenciales, comerciales y de PH en Panamá con responsabilidad clara y transparencia.',
};

const copy = {
  es: {
    kicker: 'Clientes',
    title: 'Residencial. Comercial. PH.',
    intro: 'Tres tipos de cliente. El mismo estándar: un solo responsable, alcance claro y ejecución transparente.',
    cta: 'Ver',
  },
  en: {
    kicker: 'Customers',
    title: 'Residential. Commercial. PH.',
    intro: 'Three customer types. The same standard: one accountable partner, clear scope and transparent execution.',
    cta: 'View',
  },
  fr: {
    kicker: 'Clients',
    title: 'Résidentiel. Commercial. PH.',
    intro: 'Trois types de clients. Le même standard : un seul responsable, un périmètre clair et une exécution transparente.',
    cta: 'Voir',
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
