import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceAreas } from '@/lib/site-data';

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.7), rgba(16,19,22,0.35)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">Servicio</p>
          <h1>{area.title}</h1>
          <p>{area.summary}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container content-grid">
          <article className="content-panel">
            <h2>Qué incluye</h2>
            <p>{area.description}</p>
            <ul>
              {area.bullets.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2>Problemas que resolvemos</h2>
            <ul>
              {area.problems.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2>Por qué Vanguardia</h2>
            <p>Porque cada intervención se gestiona con criterio, supervisión directa y responsabilidad clara. El cliente no tiene que coordinar a varios proveedores para saber quién responde.</p>
          </article>

          <aside className="info-panel">
            <h3>Ideal para</h3>
            <ul>
              {area.whoFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" href="/contacto">Solicitar consulta</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
