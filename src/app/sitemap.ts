import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { getAllResources } from '@/lib/resources';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/apps/1-optimiser',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
    '/resources'
  ];

  const resourceRoutes = getAllResources().map(resource => `/resources/${resource.slug}`);
  const allRoutes = [...staticRoutes, ...resourceRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
  }));
}
