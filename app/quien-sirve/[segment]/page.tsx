import Link from 'next/link';
import { notFound } from 'next/navigation';
import { customerSegments } from '@/lib/site-data';

export function generateStaticParams() {
  return customerSegments.map((segment) => ({ segment: segment.slug }));
}

export default function SegmentDetailPage({ params }: { params: { segment: string } }) {
  const segment = customerSegments.find((item) => item.slug === params.segment);

  if (!segment) {
    notFound();
  }

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">Segmento</p>
          <h1>{segment.title}</h1>
          <p>{segment.blurb}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Necesidades que resolvemos</h2>
            <ul>
              {segment.problems.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2>Cómo trabajamos</h2>
            <ul>
              {segment.solutions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <aside className="info-panel">
            <h3>Enfoque</h3>
            <p>Se prioriza la claridad del alcance, la coordinación entre trabajos y la ejecución responsable para minimizar complicaciones y proteger la propiedad.</p>
            <div style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" href="/contacto">Hablar con Vanguardia</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
