import { siteConfig } from './seo';

export const ENTITY_ORGANIZATION = {
  name: '1-GLOBE',
  website: siteConfig.url,
  category: 'Ecommerce Performance Technology',
  description: siteConfig.description,
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
  SOCIAL: 'Social Media',
} as const;

export type ProductStatus = 'live' | 'launching-soon';

// 1-OPTIMIZER launch state. Every page that mentions it reads these two lines.
export const OPTIMIZER_STATUS = {
  short: 'Live on Shopify',
  full: '1-OPTIMIZER is live on Shopify, with installation activation currently being finalized.',
} as const;

export interface EcosystemProduct {
  id: string;
  number: string;
  name: string;
  /** Short layer label shown on the homepage card ("Images", "Social" ...). */
  layer: string;
  category: string;
  description: string;
  status: ProductStatus;
  /** Badge text on the homepage card. */
  badge: string;
  href: string | null;
  ctaLabel?: string;
  '@id'?: string;
}

// The single list of 1-GLOBE apps, in launch order. The homepage cards, the footer and the
// app pages read from here. The app's logo mark is the id without "1-" (see BrandLogo.tsx).

export const ENTITY_PRODUCTS: Record<string, EcosystemProduct> = {
  '1-optimizer': {
    id: '1-optimizer',
    number: '01',
    name: '1-OPTIMIZER',
    layer: 'Images',
    category: PERFORMANCE_CATEGORIES.IMAGE,
    description: '1-OPTIMIZER is an image performance tool for Shopify stores that helps merchants optimize product images, improve image metadata, and work with image editing and storefront performance tools.',
    status: 'live',
    badge: OPTIMIZER_STATUS.short,
    href: '/apps/1-optimizer',
    ctaLabel: 'Explore 1-OPTIMIZER',
    '@id': `${siteConfig.url}/apps/1-optimizer#software`,
  },
  '1-listing': {
    id: '1-listing',
    number: '02',
    name: '1-LISTING',
    layer: 'Product listings',
    category: PERFORMANCE_CATEGORIES.PRODUCT_LISTING,
    description: 'Build product listings structured for search, answer engines and generative discovery.',
    status: 'launching-soon',
    badge: 'Launching next',
    href: null,
  },
  '1-blog': {
    id: '1-blog',
    number: '03',
    name: '1-BLOG',
    layer: 'Content',
    category: PERFORMANCE_CATEGORIES.CONTENT,
    description: 'Content performance for online stores, focused on building structured content around product catalogs.',
    status: 'launching-soon',
    badge: 'Launching soon',
    href: null,
  },
  '1-social': {
    id: '1-social',
    number: '04',
    name: '1-SOCIAL',
    layer: 'Social media',
    category: PERFORMANCE_CATEGORIES.SOCIAL,
    description: "Keep your store's social presence consistent, with on-brand posts built from your product catalog.",
    status: 'launching-soon',
    badge: 'Launching soon',
    href: null,
  },
};

export const PRODUCT_LIST = Object.values(ENTITY_PRODUCTS);
