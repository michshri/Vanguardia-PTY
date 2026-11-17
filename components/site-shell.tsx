'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getSettings } from '@/lib/content';
import { localeFromPathname, stripLocalePrefix, withLang } from '@/lib/locale';
import { getCustomerSegments, getHomeExtras, getServiceAreas } from '@/lib/localized-content';
import { getCompanyName } from '@/lib/site-config';
import { getDictionary } from '@/lib/translations';

const localeLabels = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
] as const;

function LocaleSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const activeLocale = localeFromPathname(pathname);

  const getLocaleHref = (locale: 'es' | 'en' | 'fr') => {
    const barePath = stripLocalePrefix(pathname);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('lang');
    const query = params.toString();
    return withLang(query ? `${barePath}?${query}` : barePath, locale);
  };

  return (
    <div className="language-switcher" aria-label="Language selector">
      {localeLabels.map((locale) => (
        <Link
          key={locale.code}
          href={getLocaleHref(locale.code)}
          className={`lang-pill ${activeLocale === locale.code ? 'active' : ''}`}
          onClick={onNavigate}
        >
          {locale.label}
        </Link>
      ))}
    </div>
  );
}

function SiteHeaderInner() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const company = getCompanyName();
  const settings = getSettings();
  const services = getServiceAreas(locale);
  const segments = getCustomerSegments(locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappHref = `${settings.company.whatsappUrlPlaceholder}?text=${encodeURIComponent(`Hola ${company}, me gustaría solicitar una consulta.`)}`;

  const navItems = [
    { href: '/', label: dict.nav.home },
    {
      href: '/servicios',
      label: dict.nav.services,
      children: services.map((service) => ({ href: service.href, label: service.title })),
    },
    {
      href: '/quien-sirve',
      label: dict.nav.segments,
      children: segments.map((segment) => ({ href: segment.href, label: segment.title })),
    },
    { href: '/proyectos', label: dict.nav.projects },
    { href: '/nosotros', label: dict.nav.about },
    { href: '/contacto', label: dict.nav.contact },
  ];

  const closeMenu = () => setMenuOpen(false);

  const routeKey = `${pathname}?${searchParams.toString()}`;
  const [lastRouteKey, setLastRouteKey] = useState(routeKey);

  if (routeKey !== lastRouteKey) {
    setLastRouteKey(routeKey);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header className={`site-header${menuOpen ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <Link href={withLang('/', locale)} className="brand" aria-label={`${company} home`} onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <Image src="/vanguardia-logo.png" alt={`${company} logo`} width={170} height={44} priority />
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="nav-item has-dropdown">
                <Link href={withLang(item.href, locale)} className="nav-link">
                  {item.label}
                </Link>
                <div className="nav-dropdown" role="group" aria-label={item.label}>
                  {item.children.map((child) => (
                    <Link key={child.href} href={withLang(child.href, locale)} className="nav-dropdown-link">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={withLang(item.href, locale)} className="nav-link">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="header-actions desktop-actions">
          <LocaleSwitcher />
          <a className="btn btn-secondary" href={whatsappHref} target="_blank" rel="noreferrer">
            {dict.nav.whatsapp}
          </a>
          <Link className="btn btn-primary" href={withLang('/contacto', locale)}>
            {dict.nav.request}
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? dict.nav.close : dict.nav.menu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-nav${menuOpen ? ' is-open' : ''}`} hidden={!menuOpen}>
        <div className="container mobile-nav-inner">
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.href} className={item.children ? 'mobile-nav-group' : undefined}>
                <Link href={withLang(item.href, locale)} className="mobile-nav-link" onClick={closeMenu}>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mobile-nav-sublinks">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={withLang(child.href, locale)}
                        className="mobile-nav-sublink"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="mobile-nav-actions">
            <LocaleSwitcher onNavigate={closeMenu} />
            <a className="btn btn-secondary" href={whatsappHref} target="_blank" rel="noreferrer" onClick={closeMenu}>
              {dict.nav.whatsapp}
            </a>
            <Link className="btn btn-primary" href={withLang('/contacto', locale)} onClick={closeMenu}>
              {dict.nav.request}
            </Link>
          </div>
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
            <Link href="/" className="brand" aria-label="Vanguardia Constructions Group home">
              <span className="brand-mark" aria-hidden="true">
                <Image src="/vanguardia-logo.png" alt="Vanguardia Constructions Group logo" width={170} height={44} priority />
              </span>
            </Link>
            <button type="button" className="menu-toggle" aria-label="Open menu" disabled>
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
            </button>
          </div>
        </header>
      }
    >
      <SiteHeaderInner />
    </Suspense>
  );
}

function SiteFooterInner() {
  const pathname = usePathname() || '/';
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const company = getCompanyName();
  const settings = getSettings();
  const extras = getHomeExtras(locale);
  const services = getServiceAreas(locale).map((area) => ({ href: area.href, label: area.title }));
  const segments = getCustomerSegments(locale).map((segment) => ({ href: segment.href, label: segment.title }));
  const whatsappHref = `${settings.company.whatsappUrlPlaceholder}?text=${encodeURIComponent(`Hola ${company}`)}`;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/vanguardia-logo.png" alt={`${company} logo`} width={160} height={42} />
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
              <a href={`mailto:${settings.company.emailPlaceholder}`}>{settings.company.emailPlaceholder}</a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                {dict.nav.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company}</span>
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
            <span>© {new Date().getFullYear()} Vanguardia Constructions Group</span>
          </div>
        </footer>
      }
    >
      <SiteFooterInner />
    </Suspense>
  );
}
