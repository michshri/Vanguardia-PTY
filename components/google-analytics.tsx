import Script from 'next/script';
import { getSettings } from '@/lib/content';

export function GoogleAnalytics() {
  const { analyticsId } = getSettings();
  if (!analyticsId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
