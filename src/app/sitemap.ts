import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/apps/1-optimiser',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
  }));
}
