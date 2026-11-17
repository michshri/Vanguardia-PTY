import { getCompanyName, getSiteUrl } from '@/lib/site-config';
import { getSettings } from '@/lib/content';

export function OrganizationJsonLd() {
  const settings = getSettings();
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: getCompanyName(),
    url: getSiteUrl(),
    logo: `${getSiteUrl()}/vanguardia-logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PA',
      addressLocality: settings.company.location,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
