import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, isLocale, stripLocalePrefix } from '@/lib/locale';

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Legacy ?lang=en|fr|es → path-prefix URLs
  const langParam = searchParams.get('lang');
  if (langParam) {
    const locale = isLocale(langParam.toLowerCase()) ? langParam.toLowerCase() : defaultLocale;
    const url = request.nextUrl.clone();
    url.searchParams.delete('lang');
    const barePath = stripLocalePrefix(pathname);
    url.pathname = locale === defaultLocale ? barePath : `/${locale}${barePath === '/' ? '' : barePath}`;
    return NextResponse.redirect(url, 308);
  }

  // /es/... should never be public — redirect to unprefixed Spanish URLs
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/es/, '') || '/';
    return NextResponse.redirect(url, 308);
  }

  // Prefixed English/French routes continue as-is
  if (pathname === '/en' || pathname.startsWith('/en/') || pathname === '/fr' || pathname.startsWith('/fr/')) {
    return NextResponse.next();
  }

  // Unprefixed routes are Spanish: rewrite internally to /es/...
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? '/es' : `/es${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - Next.js internals
     * - Vercel internals
     * - Common static assets
     * - robots.txt / sitemap.xml (handled at app root)
     */
    '/((?!_next/static|_next/image|_vercel|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
