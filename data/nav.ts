export type MegaMenuItem = {
  label: string;
  href: string;
  description: string;
};

export type MegaMenuCategory = {
  title: string;
  items: MegaMenuItem[];
};

export const megaMenu: MegaMenuCategory[] = [
  {
    title: "Editorial Studio",
    items: [
      {
        label: "Manuscript Editing",
        href: "/services/editing-suite",
        description: "Developmental, line, and copy editing."
      },
      {
        label: "Proofreading",
        href: "/services/proofreading",
        description: "Final polish for professional clarity."
      },
      {
        label: "Ghostwriting",
        href: "/services/ghostwriting",
        description: "Confidential manuscript creation."
      }
    ]
  },
  {
    title: "Publishing & Production",
    items: [
      {
        label: "Publishing Setup",
        href: "/services/publishing-setup",
        description: "KDP setup, ISBNs, and metadata."
      },
      {
        label: "Book Formatting",
        href: "/services/book-formatting",
        description: "Print and eBook interiors."
      },
      {
        label: "Book Cover Design",
        href: "/services/cover-illustration",
        description: "Premium cover concepts and execution."
      }
    ]
  },
  {
    title: "Marketing Channels",
    items: [
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
        description: "Community growth and content systems."
      },
      {
        label: "SEO for Authors",
        href: "/services/seo-for-authors",
        description: "Search visibility for your platform."
      },
      {
        label: "Email Marketing",
        href: "/services/email-marketing",
        description: "Launch sequences and newsletters."
      }
    ]
  },
  {
    title: "Advertising & Visibility",
    items: [
      {
        label: "Amazon Marketing",
        href: "/services/amazon-marketing",
        description: "Listing optimization and keyword strategy."
      },
      {
        label: "Amazon Ads Setup",
        href: "/services/amazon-ads",
        description: "Campaign architecture and targeting."
      },
      {
        label: "Book Promotion Strategy",
        href: "/services/book-promotion-strategy",
        description: "Omnichannel promotion planning."
      }
    ]
  },
  {
    title: "Media & PR",
    items: [
      {
        label: "Press Kit",
        href: "/services/press-kit",
        description: "Media assets and pitch-ready copy."
      },
      {
        label: "TV & Podcast Interviews",
        href: "/services/tv-interviews",
        description: "Outreach support and interview prep."
      },
      {
        label: "Content Marketing",
        href: "/services/content-marketing",
        description: "Press releases and feature articles."
      }
    ]
  },
  {
    title: "Creative Studio",
    items: [
      {
        label: "Book Illustration",
        href: "/services/book-illustration",
        description: "Custom artwork and scene design."
      },
      {
        label: "Book Trailer",
        href: "/services/book-trailer",
        description: "Cinematic trailer production."
      },
      {
        label: "Author Branding",
        href: "/services/author-branding",
        description: "Identity and positioning systems."
      }
    ]
  }
];
