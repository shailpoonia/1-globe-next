import React from 'react';
import { siteConfig } from '@/lib/seo';

interface SoftwareAppProps {
  name: string;
  description: string;
  slug: string;
  offers?: any[];
}

export function SoftwareAppSchema({ name, description, slug, offers }: SoftwareAppProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory: 'BusinessApplication',
    description,
    url: `${siteConfig.url}/apps/${slug}`,
    provider: {
      '@type': 'Organization',
      name: '1-GLOBE',
      url: siteConfig.url
    },
    ...(offers && { offers }),
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
