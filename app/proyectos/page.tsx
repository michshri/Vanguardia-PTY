export const metadata = {
  title: 'Proyectos',
  description: 'Portafolio de trabajos, proyectos y experiencias de Vanguardia en construcción, mantenimiento y obras especializadas en Panamá.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">Proyectos</p>
          <h1>Trabajos en marcha y proyectos por venir.</h1>
          <p>El portafolio está estructurado para mostrar proyectos por tipo y segmento, con la posibilidad de añadir caso a caso según el trabajo realizado.</p>
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
