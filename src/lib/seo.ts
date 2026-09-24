export const siteConfig = {
  name: '1-GLOBE',
  title: 'Ecommerce Performance Technology',
  description: '1-GLOBE is an ecommerce performance technology company building tools for online merchants. We build products focused on storefront image performance, content performance, and product listing performance.',
  url: 'https://1-globe.com',
  ogImage: '/hero-poster.jpg',
};

export const getCanonicalUrl = (path: string = '') => {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
};
