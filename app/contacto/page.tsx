import Link from 'next/link';
import { defaultLocale, type Locale } from '@/lib/translations';

export const metadata = {
  title: 'Contacto',
  description: 'Solicite una consulta con Vanguardia PTY para construir, mantener o gestionar su propiedad en Panamá.',
};

const resolveLocale = (lang?: string): Locale => {
  const value = (lang ?? '').toLowerCase();
  return value === 'en' || value === 'fr' ? value : defaultLocale;
};

const copy = {
  es: {
    kicker: 'Contacto',
    title: 'Hablar con Vanguardia.',
    intro: 'Una consulta breve y clara puede ayudarnos a entender la necesidad, el alcance y la mejor forma de intervenir.',
    formTitle: 'Solicitar consulta',
    name: 'Nombre',
    email: 'Email',
    company: 'Empresa / PH',
    phone: 'Teléfono / WhatsApp',
    clientType: 'Tipo de cliente',
    requiredService: 'Servicio requerido',
    description: 'Descripción',
    submit: 'Enviar consulta',
    direct: 'Contacto directo',
    whatsapp: 'Abrir WhatsApp',
  },
  en: {
    kicker: 'Contact',
    title: 'Talk to Vanguardia.',
    intro: 'A brief, clear conversation helps us understand the need, the scope and the best way to intervene.',
    formTitle: 'Request a consultation',
    name: 'Name',
    email: 'Email',
    company: 'Company / HOA',
    phone: 'Phone / WhatsApp',
    clientType: 'Client type',
    requiredService: 'Required service',
    description: 'Description',
    submit: 'Send inquiry',
    direct: 'Direct contact',
    whatsapp: 'Open WhatsApp',
  },
  fr: {
    kicker: 'Contact',
    title: 'Parler avec Vanguardia.',
    intro: 'Une consultation courte et claire nous aide à comprendre le besoin, la portée et la meilleure façon d’intervenir.',
    formTitle: 'Demander une consultation',
    name: 'Nom',
    email: 'Email',
    company: 'Entreprise / COP',
    phone: 'Téléphone / WhatsApp',
    clientType: 'Type de client',
    requiredService: 'Service requis',
    description: 'Description',
    submit: 'Envoyer la demande',
    direct: 'Contact direct',
    whatsapp: 'Ouvrir WhatsApp',
  },
} as const;

export default async function ContactPage({ searchParams }: { searchParams?: Promise<{ lang?: string }> | { lang?: string } }) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const locale = resolveLocale(resolvedParams?.lang);
  const text = copy[locale];

  return (
    <>
      <section className="page-header" style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,19,22,0.75), rgba(16,19,22,0.3)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container content-grid">
          <div className="form-panel">
            <h2>{text.formTitle}</h2>
            <form className="form-grid">
              <label className="field">
                {text.name}
                <input type="text" name="name" placeholder="Su nombre" />
              </label>
              <label className="field">
                {text.email}
                <input type="email" name="email" placeholder="correo@ejemplo.com" />
              </label>
              <label className="field">
                {text.company}
                <input type="text" name="company" placeholder="Empresa, PH o propiedad" />
              </label>
              <label className="field">
                {text.phone}
                <input type="tel" name="phone" placeholder="+507 ..." />
              </label>
              <label className="field">
                {text.clientType}
                <select name="segment">
                  <option>Residencial</option>
                  <option>Comercial & Industrial</option>
                  <option>PH</option>
                  <option>Otro</option>
                </select>
              </label>
              <label className="field">
                {text.requiredService}
                <select name="service">
                  <option>Construcción & Renovación</option>
                  <option>Mantenimiento & Reparaciones</option>
                  <option>Gestión de Propiedad</option>
                  <option>Gestión de Proyectos</option>
                  <option>Obras Especializadas</option>
                </select>
              </label>
              <label className="field full">
                {text.description}
                <textarea name="message" placeholder="Cuéntenos qué necesita, cuál es la propiedad o el requisito principal." />
              </label>
              <div className="field full">
                <button className="btn btn-primary" type="submit">{text.submit}</button>
              </div>
            </form>
          </div>

          <aside className="info-panel">
            <h3>{text.direct}</h3>
            <ul>
              <li>Email: contacto@vanguardia-pty.com</li>
              <li>WhatsApp: +507 0000-0000</li>
              <li>Panamá</li>
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link className="btn btn-secondary" href="https://wa.me/50700000000?text=Hola%20Vanguardia%20PTY%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta." target="_blank" rel="noreferrer">{text.whatsapp}</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
