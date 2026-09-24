import React from 'react';
import { siteConfig } from '@/lib/seo';

interface SoftwareAppProps {
  name: string;
  description: string;
  price?: string;
}

export function SoftwareAppSchema({ name, description, price = '0' }: SoftwareAppProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Shopify',
    description,
    offers: {
      '@type': 'Offer',
      price,
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

interface AppBreadcrumbProps {
  appName: string;
  appSlug: string;
}

export function AppBreadcrumbSchema({ appName, appSlug }: AppBreadcrumbProps) {
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
        name: appName,
        item: `${siteConfig.url}/apps/${appSlug}`
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
