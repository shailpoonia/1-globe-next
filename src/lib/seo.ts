export const siteConfig = {
  name: '1-GLOBE',
  title: 'Ecommerce Performance Technology',
  description: '1-GLOBE builds ecommerce performance technology. Our products help online merchants improve image payloads, content structure, and storefront performance.',
  url: 'https://1-globe.com',
  ogImage: '/hero-poster.jpg',
};

export const getCanonicalUrl = (path: string = '') => {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
};
