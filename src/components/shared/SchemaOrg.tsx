import React from 'react';
import { siteConfig } from '@/lib/seo';
import { ENTITY_ORGANIZATION, ENTITY_WEBSITE } from '@/lib/entities';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ENTITY_ORGANIZATION['@id'],
    name: ENTITY_ORGANIZATION.name,
    url: ENTITY_ORGANIZATION.website,
    logo: `${siteConfig.url}/logo.jpeg`,
    legalName: 'ONE GLOBE (F.Z.E)',
    description: ENTITY_ORGANIZATION.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ajman Free Zone C1 Building, Office C1 - 1F - SF3669',
      addressLocality: 'Ajman',
      addressCountry: 'UAE'
    },
    taxID: '104933863300003'
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
