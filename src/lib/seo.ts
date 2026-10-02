import type { Metadata } from 'next';

export const siteConfig = {
  name: '1-GLOBE',
  title: 'Ecommerce Performance Technology',
  description: '1-GLOBE is an ecommerce performance technology company building tools for online merchants. We build products focused on storefront image performance, product listing performance, content performance and social media.',
  url: 'https://1-globe.com',
};

/** Legal company details and contact emails. The footer, legal pages, contact page and the
 * Organization schema all read from here. */
export const company = {
  legalName: 'ONE GLOBE (F.Z.E)',
  street: 'Ajman Free Zone C1 Building, Office C1 - 1F - SF3669',
  city: 'Ajman',
  country: 'UAE',
  countryCode: 'AE',
  registrationNo: '37795',
  trn: '104933863300003',
  email: {
    support: 'support@1-globe.com',
    legal: 'legal@1-globe.com',
    privacy: 'privacy@1-globe.com',
  },
} as const;

/**
 * Official social profiles. Paste each full URL between the quotes, e.g.
 * 'https://www.linkedin.com/company/your-page'. Profiles with a URL appear in the footer
 * "Follow us" row and in the Organization schema (sameAs). Empty ones are hidden on the live site.
 */
export const socialLinks = [
  { name: 'LinkedIn', href: '' },
  { name: 'Instagram', href: '' },
  { name: 'TikTok', href: '' },
  { name: 'Facebook', href: '' },
  { name: 'X', href: '' },
] as const;

/** Default share image (1200 x 630) in /public. Set explicitly on every page: a page that
 * defines its own openGraph would otherwise drop an image inherited from a parent segment. */
export const shareImage = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: "1-GLOBE: Build a store that's built to perform. Ecommerce performance technology for online stores: images, listings, content and social media.",
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
