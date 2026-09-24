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
        name: 'Apps',
        item: `${siteConfig.url}/apps` // the prompt said "DO NOT create fake visible breadcrumbs solely to satisfy schema. If the current UI does not have an Apps index page, do not invent `/apps` during this phase. Only represent actual URL hierarchy."
        // Wait, the prompt says "Only represent actual URL hierarchy."
        // Our URL is /apps/1-optimiser. So Apps is in the hierarchy.
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '1-Optimiser',
        item: `${siteConfig.url}/apps/1-optimiser`
      }
    ]
  };

  // Actually, wait, if /apps doesn't exist, I shouldn't link to it. But it's part of the path. Let me omit /apps if it doesn't exist.
  // Wait, the prompt says "If the current UI does not have an Apps index page, do not invent `/apps` during this phase. Only represent actual URL hierarchy."
  
  const schemaFixed = {
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFixed) }}
    />
  );
}
