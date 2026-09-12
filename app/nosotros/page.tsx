import { defaultLocale, type Locale } from '@/lib/translations';

export const metadata = {
  title: 'Nosotros',
  description: 'Vanguardia PTY es una nueva generación de una experiencia panameña de más de 50 años en construcción, propiedad y mantenimiento.',
};

const resolveLocale = (lang?: string): Locale => {
  const value = (lang ?? '').toLowerCase();
  return value === 'en' || value === 'fr' ? value : defaultLocale;
};

const copy = {
  es: {
    kicker: 'Nosotros',
    title: 'Más de 50 años de experiencia. Una nueva generación.',
    intro: 'Vanguardia PTY es una nueva empresa construida sobre conocimientos, relaciones y criterio acumulados por una familia panameña a lo largo de décadas en la construcción y la propiedad.',
    history: 'Una historia con raíces en Panamá',
    historyText: 'La experiencia de la familia se ha desarrollado en una variedad de contextos: PH, propiedades industriales, obras especializadas, impermeabilización, cubiertas verdes, mantenimiento y renovación. Esa trayectoria creó una comprensión práctica de los edificios, sus exigencias y la importancia de un trabajo bien ejecutado.',
    secondText: 'Vanguardia representa una nueva etapa: una compañía fresca, moderna y directa, pero con el mismo criterio de responsabilidad, cuidado y compromiso con la propiedad.',
    focus: 'Un enfoque basado en la responsabilidad',
    focusText: 'En Vanguardia no solo construimos ni reparan. También entendemos la propiedad como un activo que necesita atención constante. Por eso combinamos ejecución, seguimiento y criterio de propiedad para ayudar a los clientes a tomar decisiones inteligentes, planificar mejor y evitar problemas mayores.',
    values: 'Valores',
  },
  en: {
    kicker: 'About',
    title: 'More than 50 years of experience. A new generation.',
    intro: 'Vanguardia PTY is a new company built on knowledge, relationships and judgment accumulated by a Panamanian family over decades in construction and property care.',
    history: 'A story rooted in Panama',
    historyText: 'The family’s experience developed across a variety of contexts: condominium buildings, industrial properties, specialized works, waterproofing, green roofs, maintenance and renovation. That trajectory created a practical understanding of buildings, their demands and the importance of well-executed work.',
    secondText: 'Vanguardia represents a new chapter: a fresh, modern and direct company, yet guided by the same standards of responsibility, care and commitment to the property.',
    focus: 'A responsibility-led approach',
    focusText: 'At Vanguardia, we do more than build or repair. We also understand the property as an asset that requires constant attention. That is why we combine execution, oversight and property judgment to help clients make smart decisions, plan better and avoid larger problems.',
    values: 'Values',
  },
  fr: {
    kicker: 'À propos',
    title: 'Plus de 50 ans d’expérience. Une nouvelle génération.',
    intro: 'Vanguardia PTY est une nouvelle entreprise bâtie sur les connaissances, les relations et le jugement accumulés par une famille panaméenne au fil des décennies dans la construction et la gestion immobilière.',
    history: 'Une histoire enracinée au Panama',
    historyText: 'L’expérience de la famille s’est développée dans de nombreux contextes : copropriétés, biens industriels, travaux spécialisés, étanchéité, toitures vertes, maintenance et rénovation. Cette trajectoire a permis de développer une compréhension pratique des bâtiments, de leurs exigences et de l’importance d’un travail bien exécuté.',
    secondText: 'Vanguardia représente une nouvelle étape : une entreprise fraîche, moderne et directe, tout en gardant le même sens de la responsabilité, du soin et de l’engagement envers la propriété.',
    focus: 'Une approche fondée sur la responsabilité',
    focusText: 'Chez Vanguardia, nous ne construisons pas seulement ni ne réparons. Nous comprenons aussi la propriété comme un actif qui exige une attention constante. C’est pourquoi nous combinons exécution, suivi et jugement immobilier pour aider les clients à prendre de bonnes décisions, mieux planifier et éviter des problèmes plus graves.',
    values: 'Valeurs',
  },
} as const;

export default async function AboutPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const text = copy[locale];

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.32)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>{text.history}</h2>
            <p>{text.historyText}</p>
            <p>{text.secondText}</p>

            <h2>{text.focus}</h2>
            <p>{text.focusText}</p>
          </article>

          <aside className="info-panel">
            <h3>{text.values}</h3>
            <ul>
              <li>Panamá</li>
              <li>Familia</li>
              <li>Experiencia</li>
              <li>Responsabilidad</li>
              <li>Ejecuta con criterio</li>
              <li>Mirada a largo plazo</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
