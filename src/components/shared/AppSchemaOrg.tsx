import React from 'react';
import { siteConfig } from '@/lib/seo';

export function SoftwareAppSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '1-Optimiser',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Shopify',
    description: 'Make every product image work harder. Compress, optimize and improve image discoverability across your Shopify catalog.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AppBreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '1-Optimiser',
        item: `${siteConfig.url}/apps/1-optimiser`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
