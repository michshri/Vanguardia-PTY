'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { navigations } from '@/lib/site-data';

const localeLabels = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
] as const;

function LocaleSwitcher() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();

  const getLocaleHref = (locale: 'es' | 'en' | 'fr') => {
    const params = new URLSearchParams(searchParams.toString());

    if (locale === 'es') {
      params.delete('lang');
    } else {
      params.set('lang', locale);
    }

    const queryString = params.toString();
    return `${pathname}${queryString ? `?${queryString}` : ''}`;
  };

  const activeLang = searchParams.get('lang');

  return (
    <div className="language-switcher" aria-label="Language selector">
      {localeLabels.map((locale) => (
        <Link
          key={locale.code}
          href={getLocaleHref(locale.code)}
          className={`lang-pill ${activeLang === locale.code || (!activeLang && locale.code === 'es') ? 'active' : ''}`}
        >
          {locale.label}
        </Link>
      ))}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Vanguardia PTY home">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/vanguardia-logo.png" alt="Vanguardia PTY logo" width={220} height={60} priority />
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navigations.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Suspense fallback={<div className="language-switcher" aria-label="Language selector"><span className="lang-pill active">ES</span><span className="lang-pill">EN</span><span className="lang-pill">FR</span></div>}>
            <LocaleSwitcher />
          </Suspense>
          <a className="btn btn-secondary" href="https://wa.me/50700000000?text=Hola%20Vanguardia%20PTY%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta." target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <Link className="btn btn-primary" href="/contacto">
            Solicitar consulta
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/vanguardia-logo.png" alt="Vanguardia PTY logo" width={200} height={50} />
            </span>
          </div>
          <p className="footer-copy">
            Vanguardia PTY combina construcción, mantenimiento y gestión de propiedad con una visión clara de responsabilidad y ejecución.
          </p>
        </div>

        <div>
          <h3>Servicios</h3>
          <ul>
            <li><Link href="/servicios/construccion-renovacion">Construcción & Renovación</Link></li>
            <li><Link href="/servicios/mantenimiento-reparaciones">Mantenimiento & Reparaciones</Link></li>
            <li><Link href="/servicios/gestion-propiedad">Gestión de Propiedad</Link></li>
            <li><Link href="/servicios/gestion-proyectos">Gestión de Proyectos</Link></li>
          </ul>
        </div>

        <div>
          <h3>Segmentos</h3>
          <ul>
            <li><Link href="/quien-sirve/residencial">Residencial</Link></li>
            <li><Link href="/quien-sirve/comercial-industrial">Comercial & Industrial</Link></li>
            <li><Link href="/quien-sirve/ph">PH</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contacto</h3>
          <ul>
            <li><Link href="/contacto">Solicitar consulta</Link></li>
            <li><a href="mailto:contacto@vanguardia-pty.com">contacto@vanguardia-pty.com</a></li>
            <li><a href="https://wa.me/50700000000?text=Hola%20Vanguardia%20PTY" target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Vanguardia PTY</span>
        <span>Panamá</span>
      </div>
    </footer>
  );
}
