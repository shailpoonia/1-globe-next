import React from 'react';
import { siteConfig } from '@/lib/seo';
import { ENTITY_ORGANIZATION } from '@/lib/entities';
import { ResourceItem } from '@/lib/resources';

interface ArticleSchemaProps {
  resource: ResourceItem;
}

export function ArticleSchema({ resource }: ArticleSchemaProps) {
  const url = `${siteConfig.url}/resources/${resource.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    description: resource.description,
    url: url,
    datePublished: resource.datePublished,
    dateModified: resource.dateModified,
    author: {
      '@type': 'Organization',
      '@id': ENTITY_ORGANIZATION['@id'],
      name: ENTITY_ORGANIZATION.name
    },
    publisher: {
      '@type': 'Organization',
      '@id': ENTITY_ORGANIZATION['@id'],
      name: ENTITY_ORGANIZATION.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.jpeg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ResourceBreadcrumbSchema({ resource }: ArticleSchemaProps) {
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
        name: 'Resources',
        item: `${siteConfig.url}/resources`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: resource.title,
        item: `${siteConfig.url}/resources/${resource.slug}`
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
