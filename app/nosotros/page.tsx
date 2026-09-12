export const metadata = {
  title: 'Nosotros',
  description: 'Vanguardia PTY es una nueva generación de una experiencia panameña de más de 50 años en construcción, propiedad y mantenimiento.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.32)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">Nosotros</p>
          <h1>Más de 50 años de experiencia. Una nueva generación.</h1>
          <p>Vanguardia PTY es una nueva empresa construida sobre conocimientos, relaciones y criterio acumulados por una familia panameña a lo largo de décadas en la construcción y la propiedad.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Una historia con raíces en Panamá</h2>
            <p>La experiencia de la familia se ha desarrollado en una variedad de contextos: PH, propiedades industriales, obras especializadas, impermeabilización, cubiertas verdes, mantenimiento y renovación. Esa trayectoria creó una comprensión práctica de los edificios, sus exigencias y la importancia de un trabajo bien ejecutado.</p>
            <p>Vanguardia representa una nueva etapa: una compañía fresca, moderna y directa, pero con el mismo criterio de responsabilidad, cuidado y compromiso con la propiedad.</p>

            <h2>Un enfoque basado en la responsabilidad</h2>
            <p>En Vanguardia no solo construimos ni reparan. También entendemos la propiedad como un activo que necesita atención constante. Por eso combinamos ejecución, seguimiento y criterio de propiedad para ayudar a los clientes a tomar decisiones inteligentes, planificar mejor y evitar problemas mayores.</p>
          </article>

          <aside className="info-panel">
            <h3>Valores</h3>
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
