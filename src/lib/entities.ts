import { siteConfig } from './seo';

export const ENTITY_ORGANIZATION = {
  name: '1-GLOBE',
  website: siteConfig.url,
  category: 'Ecommerce Performance Technology',
  description: '1-GLOBE is an ecommerce performance technology company building tools for online merchants. We build products focused on storefront image performance, product listing performance, content performance and social presence.',
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
  SOCIAL: 'Social Presence',
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
  '1-optimizer': {
    id: '1-optimizer',
    number: '01',
    name: '1-OPTIMIZER',
    category: PERFORMANCE_CATEGORIES.IMAGE,
    description: '1-OPTIMIZER is an image performance tool for Shopify stores that helps merchants optimize product images, improve image metadata, and work with image editing and storefront performance tools.',
    status: 'coming-soon',
    href: '/apps/1-optimizer',
    ctaLabel: 'Explore 1-OPTIMIZER',
    '@id': `${siteConfig.url}/apps/1-optimizer#software`,
  },
  '1-social': {
    id: '1-social',
    number: '02',
    name: '1-SOCIAL',
    category: PERFORMANCE_CATEGORIES.SOCIAL,
    description: "Keep your store's social presence consistent, with on-brand posts built from your product catalog.",
    status: 'launching-soon',
    href: null,
  },
  '1-blog': {
    id: '1-blog',
    number: '04',
    name: '1-BLOG',
    category: PERFORMANCE_CATEGORIES.CONTENT,
    description: 'Content performance for online stores, focused on building structured content around product catalogs.',
    status: 'launching-soon',
    href: null,
  },
  '1-listing': {
    id: '1-listing',
    number: '03',
    name: '1-LISTING',
    category: PERFORMANCE_CATEGORIES.PRODUCT_LISTING,
    description: 'Build product listings structured for search, answer engines and generative discovery.',
    status: 'launching-soon',
    href: null,
  },
};

