import { siteConfig } from './seo';

export const ENTITY_ORGANIZATION = {
  name: '1-GLOBE',
  website: siteConfig.url,
  category: 'Ecommerce Performance Technology',
  description: '1-GLOBE builds ecommerce performance technology. Our products help online merchants improve image payloads, content structure, and storefront performance.',
  '@id': `${siteConfig.url}/#organization`,
};

export const ENTITY_WEBSITE = {
  name: '1-GLOBE',
  url: siteConfig.url,
  '@id': `${siteConfig.url}/#website`,
};

export type ProductStatus = 'available' | 'launching-soon' | 'coming-soon';

export interface EcosystemProduct {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  status: ProductStatus;
  href: string | null;
  ctaLabel?: string;
  '@id'?: string;
}

export const ENTITY_PRODUCTS: Record<string, EcosystemProduct> = {
  '1-optimiser': {
    id: '1-optimiser',
    number: '01',
    name: '1-OPTIMISER',
    category: 'Image Performance',
    description: 'Make every product image work harder. Compress, optimize and improve image discoverability across your Shopify catalog.',
    status: 'coming-soon',
    href: '/apps/1-optimiser',
    ctaLabel: 'EXPLORE 1-OPTIMISER',
    '@id': `${siteConfig.url}/apps/1-optimiser#software`,
  },
  '1-blog': {
    id: '1-blog',
    number: '02',
    name: '1-BLOG',
    category: 'Content Performance',
    description: 'Content performance for the modern store.',
    status: 'launching-soon',
    href: null,
  },
  '1-list': {
    id: '1-list',
    number: '03',
    name: '1-LIST',
    category: 'Product Listing Performance',
    description: 'Build product listings structured for search, answer engines and generative discovery.',
    status: 'launching-soon',
    href: null,
  },
};
