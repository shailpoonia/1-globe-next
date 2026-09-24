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
  'ecommerce-image-optimization': {
    slug: 'ecommerce-image-optimization',
    title: 'Ecommerce Image Optimization: A Practical Guide',
    description: 'How product images affect storefront performance, usability, accessibility and discoverability.',
    category: 'Image Performance',
    datePublished: '2026-09-24T12:00:00Z',
    dateModified: '2026-09-24T12:00:00Z',
  }
};

export const getResourceBySlug = (slug: string): ResourceItem | undefined => {
  return RESOURCES[slug];
};

export const getAllResources = (): ResourceItem[] => {
  return Object.values(RESOURCES).sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
};
