import type { Metadata } from "next";

export const siteConfig = {
  name: "Stellar Book Promoters",
  description:
    "Luxury book publishing and marketing partner for authors who want impeccable editorial polish, premium production, and strategic launch support.",
  url: "https://stellarbookpromoters.com",
  ogImage: "/images/og-stellar.svg"
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | Stellar Book Promoters"
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Stellar Book Promoters"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export function createMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...defaultMetadata,
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: `${siteConfig.url}${path}`
    }
  };
}
