import Link from 'next/link';
import { customerSegments, processSteps, projectPlaceholders, serviceAreas, valuePoints } from '@/lib/site-data';
import { defaultLocale, getDictionary, type Locale } from '@/lib/translations';

const resolveLocale = (lang?: string): Locale => {
  const value = (lang ?? '').toLowerCase();
  return value === 'en' || value === 'fr' ? value : defaultLocale;
};

export default async function HomePage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const dict = getDictionary(locale);

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="eyebrow">{dict.hero.eyebrow}</div>
          <h1>{dict.hero.title}</h1>
          <p>{dict.hero.subtitle}</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contacto">
              {dict.hero.primary}
            </Link>
            <Link className="btn btn-secondary" href="/servicios">
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
            <p className="section-kicker">Herencia • confianza • responsabilidad</p>
            <h2>Cinco décadas de experiencia panameña. Una nueva generación.</h2>
          </div>
          <div>
            <p>
              Vanguardia PTY es una nueva empresa construida sobre la experiencia acumulada por una familia panameña con profundas raíces en la comunidad y décadas de trabajo en construcción y mantenimiento de propiedades. La compañía combina ese conocimiento práctico con un enfoque moderno, una ejecución clara y una relación directa con cada cliente.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Nuestros clientes</p>
            <h2>La obra, la propiedad y la operación necesitan claridad.</h2>
          </div>

          <div className="segment-grid">
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
                <Link href={segment.href}>Explorar {segment.title}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">Áreas de negocio</p>
            <h2>Un sistema de soluciones para cada tipo de inmueble.</h2>
          </div>

          <div className="service-grid">
            {serviceAreas.map((area) => (
              <article key={area.slug} className="service-card">
                <div className="service-icon">0{serviceAreas.indexOf(area) + 1}</div>
                <h3>{area.title}</h3>
                <p>{area.summary}</p>
                <ul>
                  {area.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={area.href}>Más información</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">Por qué Vanguardia</p>
            <h2>Una sola referencia. Una responsabilidad clara.</h2>
          </div>

          <div className="points-grid">
            {valuePoints.map((point) => (
              <div key={point} className="value-point">
                <span className="checkmark">✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">Capacidad</p>
            <h2>Entendemos la realidad de cada tipo de propiedad.</h2>
          </div>

          <div className="capability-grid">
            <span>Propiedades residenciales</span>
            <span>Edificios PH</span>
            <span>Inmuebles comerciales</span>
            <span>Instalaciones industriales</span>
            <span>Envolturas y fachadas</span>
            <span>Cubiertas</span>
            <span>Recubrimientos</span>
            <span>Impermeabilización</span>
            <span>Techos verdes</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">Cómo trabajamos</p>
            <h2>Un proceso claro para que el cliente sepa quién responde.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((item) => (
              <div key={item.step} className="process-card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Proyectos</p>
            <h2>Trabajos que pueden ampliarse y organizarse según el tipo de propiedad.</h2>
          </div>

          <div className="project-grid">
            {projectPlaceholders.map((project) => (
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
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="section-kicker">Inicio de conversación</p>
            <h2>¿Tiene un proyecto, una necesidad de mantenimiento o una propiedad que requiere atención?</h2>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary" href="/contacto">
              Solicitar consulta
            </Link>
            <Link className="btn btn-secondary" href="/contacto">
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
