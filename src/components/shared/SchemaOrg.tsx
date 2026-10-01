import { siteConfig, socialLinks, company } from '@/lib/seo';
import { ENTITY_ORGANIZATION, ENTITY_WEBSITE } from '@/lib/entities';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ENTITY_ORGANIZATION['@id'],
    name: ENTITY_ORGANIZATION.name,
    url: ENTITY_ORGANIZATION.website,
    logo: `${siteConfig.url}/logo-square.png`,
    email: company.email.support,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: company.email.support,
      availableLanguage: ['English'],
    },
    legalName: company.legalName,
    description: ENTITY_ORGANIZATION.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      addressLocality: company.city,
      addressCountry: company.countryCode
    },
    taxID: company.trn,
    ...(socialLinks.some((s) => s.href) && { sameAs: socialLinks.filter((s) => s.href).map((s) => s.href) })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ENTITY_WEBSITE['@id'],
    name: ENTITY_WEBSITE.name,
    url: ENTITY_WEBSITE.url,
    publisher: {
      '@type': 'Organization',
      '@id': ENTITY_ORGANIZATION['@id']
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
