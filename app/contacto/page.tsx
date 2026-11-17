import type { Metadata } from 'next';
import Link from 'next/link';
import { getSettings } from '@/lib/content';
import { resolveLocale } from '@/lib/locale';
import { getCustomerSegments, getHomeExtras, getServiceAreas } from '@/lib/localized-content';
import { buildPageMetadata, getCompanyName, getStaticSeo, resolveSearchParams } from '@/lib/site-config';

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

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string; service?: string; segment?: string }> | { lang?: string; service?: string; segment?: string };
}): Promise<Metadata> {
  const resolvedParams = await resolveSearchParams(searchParams);
  const locale = resolveLocale(resolvedParams?.lang);
  const seo = getStaticSeo(locale, 'contact');
  return buildPageMetadata({
    locale,
    path: '/contacto',
    title: seo.title,
    description: seo.description,
  });
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string; service?: string; segment?: string }> | { lang?: string; service?: string; segment?: string };
}) {
  const resolvedParams = await resolveSearchParams(searchParams);
  const locale = resolveLocale(resolvedParams?.lang);
  const text = copy[locale];
  const form = getHomeExtras(locale).contactForm;
  const settings = getSettings();
  const company = getCompanyName();
  const services = getServiceAreas(locale);
  const segments = getCustomerSegments(locale);
  const otherOption = form.clientOptions[form.clientOptions.length - 1] ?? 'Otro';
  const selectedService = services.some((service) => service.slug === resolvedParams?.service)
    ? resolvedParams?.service
    : undefined;
  const selectedSegment = segments.some((segment) => segment.slug === resolvedParams?.segment)
    ? resolvedParams?.segment
    : undefined;

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
                <input type="text" name="name" placeholder={form.namePh} />
              </label>
              <label className="field">
                {text.email}
                <input type="email" name="email" placeholder={form.emailPh} />
              </label>
              <label className="field">
                {text.company}
                <input type="text" name="company" placeholder={form.companyPh} />
              </label>
              <label className="field">
                {text.phone}
                <input type="tel" name="phone" placeholder={form.phonePh} />
              </label>
              <label className="field">
                {text.clientType}
                <select name="segment" defaultValue={selectedSegment ?? ''}>
                  {segments.map((segment) => (
                    <option key={segment.slug} value={segment.slug}>
                      {segment.title}
                    </option>
                  ))}
                  <option value="other">{otherOption}</option>
                </select>
              </label>
              <label className="field">
                {text.requiredService}
                <select name="service" defaultValue={selectedService ?? ''}>
                  {services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field full">
                {text.description}
                <textarea name="message" placeholder={form.messagePh} />
              </label>
              <div className="field full">
                <button className="btn btn-primary" type="submit">
                  {text.submit}
                </button>
              </div>
            </form>
          </div>

          <aside className="info-panel">
            <h3>{text.direct}</h3>
            <ul>
              <li>Email: {settings.company.emailPlaceholder}</li>
              <li>WhatsApp: {settings.company.whatsappDisplayPlaceholder}</li>
              <li>{locale === 'en' || locale === 'fr' ? 'Panama' : 'Panamá'}</li>
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link
                className="btn btn-secondary"
                href={`${settings.company.whatsappUrlPlaceholder}?text=${encodeURIComponent(`Hola ${company}, me gustaría solicitar una consulta.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                {text.whatsapp}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
