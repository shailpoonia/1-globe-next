import { PERFORMANCE_CATEGORIES } from './entities';

export type ResourceCategory =
  | 'Ecommerce Performance'
  | 'Image Performance'
  | 'Content Performance'
  | 'Product Listing Performance'
  | 'Search & Discovery';

export interface ResourceItem {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  datePublished: string;
  dateModified: string;
}

export const RESOURCES: Record<string, ResourceItem> = {
  'ecommerce-performance': {
    slug: 'ecommerce-performance',
    title: 'Ecommerce Performance: A Practical Guide for Online Stores',
    description: 'Understand how storefront performance, image payloads, and structured content impact usability and discovery.',
    category: 'Ecommerce Performance',
    datePublished: '2026-09-24T12:00:00Z',
    dateModified: '2026-09-24T12:00:00Z',
  },
  'ecommerce-image-optimization': {
    slug: 'ecommerce-image-optimization',
    title: 'Ecommerce Image Optimization: A Practical Guide',
    description: 'How product images affect storefront performance, usability, accessibility and discoverability.',
    category: PERFORMANCE_CATEGORIES.IMAGE,
    datePublished: '2026-09-24T12:00:00Z',
    dateModified: '2026-09-24T12:00:00Z',
  },
  'shopify-image-optimization': {
    slug: 'shopify-image-optimization',
    title: 'Shopify Image Optimization: A Practical Guide',
    description: 'A practical guide to preparing product and storefront images for Shopify stores, balancing visual quality with file size and performance.',
    category: PERFORMANCE_CATEGORIES.IMAGE,
    datePublished: '2026-09-26T12:00:00Z',
    dateModified: '2026-09-26T12:00:00Z',
  },
  'product-image-alt-text': {
    slug: 'product-image-alt-text',
    title: 'Product Image Alt Text: A Practical Guide for Ecommerce',
    description: 'A practical guide to writing useful ecommerce product image alt text for accessibility, image context and search discovery without keyword stuffing.',
    category: PERFORMANCE_CATEGORIES.IMAGE,
    datePublished: '2026-09-25T12:00:00Z',
    dateModified: '2026-09-25T12:00:00Z',
  },
  'bulk-image-optimization': {
    slug: 'bulk-image-optimization',
    title: 'Bulk Image Optimization: A Practical Guide for Ecommerce',
    description: 'Learn how to optimize ecommerce images in bulk, from compression and resizing to formats, metadata, Shopify workflows, quality checks, and performance measurement.',
    category: PERFORMANCE_CATEGORIES.IMAGE,
    datePublished: '2026-09-26T12:00:00Z',
    dateModified: '2026-09-26T12:00:00Z',
  }
};

export const getResourceBySlug = (slug: string): ResourceItem | undefined => {
  return RESOURCES[slug];
};

export const getAllResources = (): ResourceItem[] => {
  return Object.values(RESOURCES).sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
};
