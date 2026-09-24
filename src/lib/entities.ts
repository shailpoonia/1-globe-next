import { siteConfig } from './seo';

export const ENTITY_ORGANIZATION = {
  name: '1-GLOBE',
  website: siteConfig.url,
  category: 'Ecommerce Performance Technology',
  description: '1-GLOBE is an ecommerce performance technology company building tools for online merchants. We build products focused on storefront image performance, content performance, and product listing performance.',
  '@id': `${siteConfig.url}/#organization`,
};

export const ENTITY_WEBSITE = {
  name: '1-GLOBE',
  url: siteConfig.url,
  '@id': `${siteConfig.url}/#website`,
};

export const PERFORMANCE_CATEGORIES = {
  IMAGE: 'Image Performance',
  CONTENT: 'Content Performance',
  PRODUCT_LISTING: 'Product Listing Performance',
} as const;

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
    category: PERFORMANCE_CATEGORIES.IMAGE,
    description: '1-OPTIMISER is an image performance tool for Shopify stores that helps merchants optimize product images, improve image metadata, and work with image editing and storefront performance tools.',
    status: 'coming-soon',
    href: '/apps/1-optimiser',
    ctaLabel: 'EXPLORE 1-OPTIMISER',
    '@id': `${siteConfig.url}/apps/1-optimiser#software`,
  },
  '1-blog': {
    id: '1-blog',
    number: '02',
    name: '1-BLOG',
    category: PERFORMANCE_CATEGORIES.CONTENT,
    description: 'Content performance for the modern store.',
    status: 'launching-soon',
    href: null,
  },
  '1-list': {
    id: '1-list',
    number: '03',
    name: '1-LIST',
    category: PERFORMANCE_CATEGORIES.PRODUCT_LISTING,
    description: 'Product listing performance for the modern store.',
    status: 'launching-soon',
    href: null,
  },
};
