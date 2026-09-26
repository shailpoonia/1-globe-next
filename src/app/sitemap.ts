import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { getAllResources } from '@/lib/resources';

// Update this date when the content of a static page changes.
const STATIC_PAGES_UPDATED = '2026-09-26';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/apps/1-optimiser',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
    '/resources',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: STATIC_PAGES_UPDATED,
  }));

  const resourceEntries: MetadataRoute.Sitemap = getAllResources().map((resource) => ({
    url: `${siteConfig.url}/resources/${resource.slug}`,
    lastModified: resource.dateModified,
  }));

  return [...staticEntries, ...resourceEntries];
}
