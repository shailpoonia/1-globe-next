export const siteConfig = {
  name: '1-GLOBE',
  title: 'Ecommerce Performance Technology',
  description: '1-globe.com builds Shopify performance apps that fix your store\'s foundation — so it loads fast, gets found by search and AI, and turns more traffic into buyers.',
  url: 'https://1-globe.com',
  ogImage: '/hero-poster.jpg',
};

export const getCanonicalUrl = (path: string = '') => {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
};
