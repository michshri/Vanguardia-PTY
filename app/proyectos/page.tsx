import { defaultLocale, type Locale } from '@/lib/translations';

export const metadata = {
  title: 'Proyectos',
  description: 'Portafolio de trabajos, proyectos y experiencias de Vanguardia en construcción, mantenimiento y obras especializadas en Panamá.',
};

const resolveLocale = (lang?: string): Locale => {
  const value = (lang ?? '').toLowerCase();
  return value === 'en' || value === 'fr' ? value : defaultLocale;
};

const copy = {
  es: {
    kicker: 'Proyectos',
    title: 'Trabajos en marcha y proyectos por venir.',
    intro: 'El portafolio está estructurado para mostrar proyectos por tipo y segmento, con la posibilidad de añadir caso a caso según el trabajo realizado.',
  },
  en: {
    kicker: 'Projects',
    title: 'Ongoing work and upcoming projects.',
    intro: 'The portfolio is structured to showcase work by type and segment, with room to add case-by-case examples as each project evolves.',
  },
  fr: {
    kicker: 'Projets',
    title: 'Travaux en cours et projets à venir.',
    intro: 'Le portfolio est structuré pour présenter les projets par type et segment, avec la possibilité d’ajouter des cas individuels selon les travaux réalisés.',
  },
} as const;

export default async function ProjectsPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const text = copy[locale];

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
        <div className="container project-grid">
          {[
            { title: 'Renovación residencial', category: 'Residencial', type: 'Renovación' },
            { title: 'Mejora de propiedad comercial', category: 'Comercial & Industrial', type: 'Construcción' },
            { title: 'Mantenimiento general de PH', category: 'PH', type: 'Mantenimiento' },
            { title: 'Impermeabilización y recubrimientos', category: 'Obras Especializadas', type: 'Especializado' },
          ].map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image" aria-hidden="true" />
              <div className="project-content">
                <span className="mini-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
