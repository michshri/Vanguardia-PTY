import Link from 'next/link';
import { resolveLocale, withLang } from '@/lib/locale';
import { getServiceAreas } from '@/lib/localized-content';

export const metadata = {
  title: 'Servicios',
  description: 'Servicios de construcción, mantenimiento, gestión de proyectos y obras especializadas para propiedades en Panamá.',
};

const copy = {
  es: {
    kicker: 'Servicios',
    title: 'Construir. Renovar. Mantener. Gestionar.',
    intro: 'Cinco servicios claros. Un solo responsable para planificar, ejecutar y proteger el valor de la propiedad.',
    cta: 'Ver servicio',
  },
  en: {
    kicker: 'Services',
    title: 'Build. Renovate. Maintain. Manage.',
    intro: 'Five clear services. One accountable partner to plan, execute and protect the value of the property.',
    cta: 'View service',
  },
  fr: {
    kicker: 'Services',
    title: 'Construire. Rénover. Entretenir. Gérer.',
    intro: 'Cinq services clairs. Un seul responsable pour planifier, exécuter et protéger la valeur du bien.',
    cta: 'Voir le service',
  },
} as const;

export default async function ServiciosPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const text = copy[locale];
  const serviceAreas = getServiceAreas(locale);

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
          {serviceAreas.map((area, index) => (
            <article key={area.slug} className="service-card">
              <div className="service-icon">0{index + 1}</div>
              <h3>{area.title}</h3>
              <p>{area.summary}</p>
              <ul>
                {area.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link href={withLang(area.href, locale)}>{text.cta}</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
