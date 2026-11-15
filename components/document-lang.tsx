'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { resolveLocale } from '@/lib/locale';

export function DocumentLang() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get('lang'));

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
