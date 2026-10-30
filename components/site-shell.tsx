'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { resolveLocale, withLang } from '@/lib/locale';
import { getCustomerSegments, getHomeExtras, getServiceAreas } from '@/lib/localized-content';
import { getDictionary } from '@/lib/translations';

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

function SiteHeaderInner() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get('lang'));
  const dict = getDictionary(locale);

  const navItems = [
    { href: '/', label: dict.nav.home },
    { href: '/servicios', label: dict.nav.services },
    { href: '/quien-sirve', label: dict.nav.segments },
    { href: '/proyectos', label: dict.nav.projects },
    { href: '/nosotros', label: dict.nav.about },
    { href: '/contacto', label: dict.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={withLang('/', locale)} className="brand" aria-label="Vanguardia PTY home">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/vanguardia-logo.png" alt="Vanguardia PTY logo" width={220} height={60} priority />
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={withLang(item.href, locale)} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LocaleSwitcher />
          <a
            className="btn btn-secondary"
            href="https://wa.me/50700000000?text=Hola%20Vanguardia%20PTY%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta."
            target="_blank"
            rel="noreferrer"
          >
            {dict.nav.whatsapp}
          </a>
          <Link className="btn btn-primary" href={withLang('/contacto', locale)}>
            {dict.nav.request}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteHeader() {
  return (
    <Suspense
      fallback={
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="Vanguardia PTY home">
              <span className="brand-mark" aria-hidden="true">
                <Image src="/vanguardia-logo.png" alt="Vanguardia PTY logo" width={220} height={60} priority />
              </span>
            </Link>
            <div className="header-actions">
              <div className="language-switcher" aria-label="Language selector">
                <span className="lang-pill active">ES</span>
                <span className="lang-pill">EN</span>
                <span className="lang-pill">FR</span>
              </div>
            </div>
          </div>
        </header>
      }
    >
      <SiteHeaderInner />
    </Suspense>
  );
}

function SiteFooterInner() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get('lang'));
  const dict = getDictionary(locale);
  const extras = getHomeExtras(locale);
  const services = getServiceAreas(locale)
    .filter((area) => area.slug !== 'obras-especializadas')
    .map((area) => ({ href: area.href, label: area.title }));
  const segments = getCustomerSegments(locale).map((segment) => ({ href: segment.href, label: segment.title }));

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/vanguardia-logo.png" alt="Vanguardia PTY logo" width={200} height={50} />
            </span>
          </div>
          <p className="footer-copy">{extras.footer.copy}</p>
        </div>

        <div>
          <h3>{extras.footer.services}</h3>
          <ul>
            {services.map((item) => (
              <li key={item.href}>
                <Link href={withLang(item.href, locale)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{extras.footer.segments}</h3>
          <ul>
            {segments.map((item) => (
              <li key={item.href}>
                <Link href={withLang(item.href, locale)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{extras.footer.contact}</h3>
          <ul>
            <li>
              <Link href={withLang('/contacto', locale)}>{extras.footer.request}</Link>
            </li>
            <li>
              <a href="mailto:contacto@vanguardia-pty.com">contacto@vanguardia-pty.com</a>
            </li>
            <li>
              <a href="https://wa.me/50700000000?text=Hola%20Vanguardia%20PTY" target="_blank" rel="noreferrer">
                {dict.nav.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Vanguardia PTY</span>
        <span>{extras.footer.panama}</span>
      </div>
    </footer>
  );
}

export function SiteFooter() {
  return (
    <Suspense
      fallback={
        <footer className="site-footer">
          <div className="container footer-bottom">
            <span>© 2026 Vanguardia PTY</span>
          </div>
        </footer>
      }
    >
      <SiteFooterInner />
    </Suspense>
  );
}
