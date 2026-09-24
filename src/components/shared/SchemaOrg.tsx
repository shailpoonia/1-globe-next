import React from 'react';
import { siteConfig } from '@/lib/seo';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/1-globe-brand.png`, // Update if needed
    legalName: 'ONE GLOBE (F.Z.E)',
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
    name: siteConfig.name,
    url: siteConfig.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
