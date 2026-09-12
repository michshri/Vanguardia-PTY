import Link from 'next/link';
import { customerSegments } from '@/lib/site-data';

export const metadata = {
  title: 'Quiénes servimos',
  description: 'Vanguardia atiende necesidades residenciales, comerciales, industriales y de PH en Panamá con un enfoque de propiedad y coordinación responsable.',
};

export default function SegmentsPage() {
  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.76), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">Quiénes servimos</p>
          <h1>Necesidades reales. Respuestas claras.</h1>
          <p>Vanguardia trabaja con clientes que necesitan planificación, ejecución y seguimiento bien gestionado para proteger sus propiedades y su operación.</p>
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
                {segment.problems.map((problem) => <li key={problem}>{problem}</li>)}
              </ul>
              <Link href={segment.href}>Explorar {segment.title}</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
