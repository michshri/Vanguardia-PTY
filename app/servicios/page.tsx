import Link from 'next/link';
import { serviceAreas } from '@/lib/site-data';

export const metadata = {
  title: 'Servicios',
  description: 'Servicios de construcción, mantenimiento, gestión de proyectos y obras especializadas para propiedades en Panamá.',
};

export default function ServiciosPage() {
  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">Servicios</p>
          <h1>Soluciones para la propiedad y la ejecución.</h1>
          <p>Vanguardia responde a necesidades de construcción, mantenimiento, gestión y obras técnicas con una sola referencia clara y responsable.</p>
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
              <Link href={area.href}>Ver servicio</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
