import type { Metadata } from 'next';

export const siteConfig = {
  name: '1-GLOBE',
  title: 'Ecommerce Performance Technology',
  description: '1-GLOBE is an ecommerce performance technology company building tools for online merchants. We build products focused on storefront image performance, content performance, and product listing performance.',
  url: 'https://1-globe.com',
};

/** Default share image (1200 x 630) in /public. Set explicitly on every page: a page that
 * defines its own openGraph would otherwise drop an image inherited from a parent segment. */
export const shareImage = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: '1-GLOBE: Make ecommerce perform. Image, content and product listing performance tools for Shopify merchants.',
};

export const getCanonicalUrl = (path: string = '') => {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
};

interface BuildMetadataInput {
  title: string;
  description?: string;
  /** Path relative to the site root, e.g. "/pricing". Used for the canonical URL and og:url. */
  path: string;
  /** Use the title exactly as given, without the " | 1-GLOBE" suffix. */
  absoluteTitle?: boolean;
  /** Set for guides so they are marked up as articles in Open Graph. */
  article?: { datePublished: string; dateModified: string };
}

/**
 * Page metadata with its own Open Graph and Twitter tags.
 * Next.js merges metadata shallowly, so a page that sets only title/description
 * would otherwise inherit the root layout's openGraph object unchanged.
 * The share image comes from src/app/opengraph-image.jpg and twitter-image.jpg.
 */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  article,
}: BuildMetadataInput): Metadata {
  // The root layout's title template adds " | 1-GLOBE" to page, Open Graph and Twitter titles,
  // so pass the bare title here and opt out of the template only for absolute titles.
  const shareTitle = absoluteTitle ? { absolute: title } : title;
  const desc = description ?? siteConfig.description;

  const openGraph: Metadata['openGraph'] = article
    ? {
        type: 'article',
        title: shareTitle,
        description: desc,
        url: path,
        siteName: siteConfig.name,
        locale: 'en_US',
        images: [shareImage],
        publishedTime: article.datePublished,
        modifiedTime: article.dateModified,
      }
    : {
        type: 'website',
        title: shareTitle,
        description: desc,
        url: path,
        siteName: siteConfig.name,
        locale: 'en_US',
        images: [shareImage],
      };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: desc,
      images: [shareImage.url],
    },
  };
}
