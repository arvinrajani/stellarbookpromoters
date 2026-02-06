export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type Service = {
  id: number;
  slug: string;
  title: string;
  category: string;
  summary: string;
  heroHeadline: string;
  heroSubtext: string;
  image: string;
  features: ServiceFeature[];
  deliverables: string[];
  faqs: ServiceFaq[];
  relatedServices: string[];
};

export const services: Service[] = [
  {
    id: 1,
    slug: "proofreading",
    title: "Proofreading",
    category: "Editorial",
    summary: "Final-pass precision to remove typos, grammar slips, and formatting inconsistencies.",
    heroHeadline: "Proofreading that protects your reputation",
    heroSubtext:
      "We perform a meticulous final inspection so your manuscript reads clean, confident, and publication-ready.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Precision sweep",
        description: "Catch spelling, punctuation, and style issues without altering your voice."
      },
      {
        title: "Consistency check",
        description: "We align names, timelines, and formatting across every chapter."
      },
      {
        title: "Ready for print",
        description: "Polished files that look professional in print and digital formats."
      }
    ],
    deliverables: [
      "Marked-up manuscript with tracked changes",
      "Clean copy for final review",
      "Style consistency notes"
    ],
    faqs: [
      {
        q: "Is proofreading different from editing?",
        a: "Yes. Proofreading is the final quality check after editing is complete."
      },
      {
        q: "Can you proofread a formatted file?",
        a: "We can proofread formatted PDFs or InDesign files and mark corrections."
      },
      {
        q: "How long does proofreading take?",
        a: "Most projects take 5 to 10 business days depending on length."
      }
    ],
    relatedServices: ["editing-suite", "book-formatting", "publishing-setup"]
  },
  {
    id: 2,
    slug: "editing-suite",
    title: "Manuscript Editing",
    category: "Editorial",
    summary:
      "A full-spectrum editing suite that blends developmental, line, and copy editing.",
    heroHeadline: "Editing that elevates your story and sharpens every line",
    heroSubtext:
      "We tailor the right mix of developmental, line, and copy editing to strengthen structure, style, and clarity.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Developmental insight",
        description: "Big-picture guidance on structure, pacing, and character arcs."
      },
      {
        title: "Line-level refinement",
        description: "We improve flow, tone, and rhythm while preserving your voice."
      },
      {
        title: "Copy edit precision",
        description: "Grammar, usage, and consistency tightened across the manuscript."
      }
    ],
    deliverables: [
      "Editorial letter with strategic recommendations",
      "Tracked changes in manuscript",
      "Style sheet for consistent voice and usage"
    ],
    faqs: [
      {
        q: "Do you offer all three editing layers?",
        a: "Yes. We combine developmental, line, and copy editing based on your goals."
      },
      {
        q: "Will you change my voice?",
        a: "No. We preserve your voice while improving clarity and structure."
      },
      {
        q: "Can I request only line or copy editing?",
        a: "Absolutely. We can scope the project to focus on a specific level."
      }
    ],
    relatedServices: ["proofreading", "book-formatting", "author-branding"]
  },
  {
    id: 3,
    slug: "book-formatting",
    title: "Book Formatting",
    category: "Publishing",
    summary:
      "Professional interior formatting for eBook and print, optimized for KDP compliance.",
    heroHeadline: "Flawless layouts for eBook and print",
    heroSubtext:
      "We craft polished interiors that meet KDP standards and deliver a premium reading experience.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Dual-format delivery",
        description: "Print-ready PDF and eBook files with consistent styling."
      },
      {
        title: "KDP-compliant",
        description: "Margins, trim, and typography aligned with platform requirements."
      },
      {
        title: "Design polish",
        description: "Professional typography and layout that match your genre."
      }
    ],
    deliverables: [
      "Print-ready PDF",
      "eBook file (EPUB or Kindle)",
      "Front and back matter styling"
    ],
    faqs: [
      {
        q: "Do you format for KDP and IngramSpark?",
        a: "Yes. We can format to meet multiple platform specs."
      },
      {
        q: "Can you match a specific style?",
        a: "We can align your layout to comparable professional titles."
      },
      {
        q: "Do you format complex books?",
        a: "We support books with images, tables, and special layouts."
      }
    ],
    relatedServices: ["publishing-setup", "proofreading", "cover-illustration"]
  },
  {
    id: 4,
    slug: "publishing-setup",
    title: "Publishing Setup",
    category: "Publishing",
    summary:
      "KDP publishing setup, ISBN guidance, metadata tuning, and listing optimization.",
    heroHeadline: "Launch with a complete, compliant publishing setup",
    heroSubtext:
      "We handle the technical setup so your book is professionally listed, discoverable, and ready to sell.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "KDP onboarding",
        description: "Account setup, imprint guidance, and upload walkthroughs."
      },
      {
        title: "ISBN and metadata",
        description: "Strategic ISBN selection and metadata tuned for search."
      },
      {
        title: "Listing optimization",
        description: "Category and keyword choices built for visibility."
      }
    ],
    deliverables: [
      "KDP-ready files uploaded",
      "Metadata strategy sheet",
      "Listing checklist and launch checklist"
    ],
    faqs: [
      {
        q: "Do I need my own ISBN?",
        a: "We explain the options and help you choose based on distribution goals."
      },
      {
        q: "Can you publish on multiple platforms?",
        a: "Yes. We support KDP and additional platforms on request."
      },
      {
        q: "Will you write the book description?",
        a: "Yes. We can craft a conversion-focused description and author bio."
      }
    ],
    relatedServices: ["book-marketing", "amazon-marketing", "book-formatting"]
  },
  {
    id: 5,
    slug: "book-marketing",
    title: "Book Marketing",
    category: "Marketing",
    summary:
      "Listing optimization, launch planning, campaigns, and long-tail visibility systems.",
    heroHeadline: "Marketing that keeps your book visible",
    heroSubtext:
      "We blend launch strategy, listing optimization, and campaign support for sustained momentum.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Launch strategy",
        description: "Campaign plans for pre-launch, launch week, and long-term growth."
      },
      {
        title: "Visibility systems",
        description: "We optimize your listing and create a repeatable promo cadence."
      },
      {
        title: "Campaign execution",
        description: "Strategic promotions across email, ads, and partnerships."
      }
    ],
    deliverables: [
      "Marketing strategy brief",
      "Launch calendar",
      "Campaign assets list and tracking"
    ],
    faqs: [
      {
        q: "Do you run ads for me?",
        a: "We can set up and manage campaigns or guide your team."
      },
      {
        q: "Is marketing only for new releases?",
        a: "No. We also revive backlist titles with new visibility strategies."
      },
      {
        q: "How soon do we start?",
        a: "Ideally 6 to 10 weeks before launch to build momentum."
      }
    ],
    relatedServices: ["amazon-ads", "press-kit", "author-branding"]
  },
  {
    id: 6,
    slug: "author-branding",
    title: "Author Branding",
    category: "Branding",
    summary: "Build a distinct author platform with visuals, voice, and positioning.",
    heroHeadline: "A brand that makes readers remember you",
    heroSubtext:
      "We craft an author brand system that aligns your voice, visuals, and audience.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Positioning workshop",
        description: "Define your reader promise, niche, and brand story."
      },
      {
        title: "Visual identity",
        description: "Refined typography, color direction, and design motifs."
      },
      {
        title: "Platform consistency",
        description: "Aligned look across your website, socials, and press assets."
      }
    ],
    deliverables: [
      "Brand positioning brief",
      "Author visual style guide",
      "Social media templates"
    ],
    faqs: [
      {
        q: "Do you design author logos?",
        a: "Yes. We can craft a tasteful author mark if needed."
      },
      {
        q: "Can you align branding with my book series?",
        a: "Absolutely. We ensure cohesion across series titles."
      },
      {
        q: "Is branding only for fiction authors?",
        a: "No. We build positioning for nonfiction and business authors too."
      }
    ],
    relatedServices: ["press-kit", "book-trailer", "book-marketing"]
  },
  {
    id: 7,
    slug: "press-kit",
    title: "Press Kit and Media Assets",
    category: "Media",
    summary: "Professional media kits that make it easy for outlets to feature you.",
    heroHeadline: "Media-ready assets that open doors",
    heroSubtext:
      "We assemble a polished press kit that communicates your story with clarity and authority.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Press-ready copy",
        description: "Concise bios, book summaries, and talking points."
      },
      {
        title: "Visual assets",
        description: "Covers, headshots, and branded graphics packaged neatly."
      },
      {
        title: "Distribution guidance",
        description: "We advise on where and how to pitch the right outlets."
      }
    ],
    deliverables: [
      "Press kit PDF",
      "Media asset folder",
      "Pitch guidance checklist"
    ],
    faqs: [
      {
        q: "Do you write press releases?",
        a: "Yes. We can include a press release as an add-on."
      },
      {
        q: "Can I update the kit later?",
        a: "Yes. We provide editable templates for future updates."
      },
      {
        q: "Is this only for large launches?",
        a: "No. A press kit is valuable for ongoing visibility too."
      }
    ],
    relatedServices: ["book-marketing", "author-branding", "tv-interviews"]
  },
  {
    id: 8,
    slug: "amazon-ads",
    title: "Amazon Ads Setup",
    category: "Advertising",
    summary: "Campaign setup, keyword research, and ad-ready creative support.",
    heroHeadline: "Launch Amazon ads with confidence",
    heroSubtext:
      "We build a clean campaign structure and keyword plan to support profitable ads.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Campaign architecture",
        description: "Structured ad groups that scale without chaos."
      },
      {
        title: "Keyword research",
        description: "Targeted terms aligned with reader intent."
      },
      {
        title: "Performance tracking",
        description: "Dashboards and optimization recommendations."
      }
    ],
    deliverables: [
      "Ad campaign setup",
      "Keyword plan",
      "Optimization checklist"
    ],
    faqs: [
      {
        q: "Do you manage ads after setup?",
        a: "We can manage ongoing ads or train your team."
      },
      {
        q: "What budget should I start with?",
        a: "We recommend a test budget based on genre and goals."
      },
      {
        q: "Is Amazon ads right for every book?",
        a: "We evaluate fit and advise on alternatives when needed."
      }
    ],
    relatedServices: ["amazon-marketing", "publishing-setup", "book-marketing"]
  },
  {
    id: 9,
    slug: "book-trailer",
    title: "Book Trailer",
    category: "Media",
    summary: "Cinematic trailers and motion graphics to fuel launch excitement.",
    heroHeadline: "Trailers that turn browsers into readers",
    heroSubtext:
      "We create premium book trailers with mood, pacing, and narrative focus.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Story-driven scripting",
        description: "We translate your plot into a concise visual story."
      },
      {
        title: "Motion design",
        description: "Elegant typography, pacing, and animation."
      },
      {
        title: "Multi-channel formats",
        description: "Versions optimized for web, social, and ads."
      }
    ],
    deliverables: [
      "Primary trailer (30-60 seconds)",
      "Short cutdowns",
      "Audio and caption files"
    ],
    faqs: [
      {
        q: "Can you use my own footage?",
        a: "Yes. We can integrate supplied footage and imagery."
      },
      {
        q: "Do you provide voiceover?",
        a: "Voiceover is available as an add-on."
      },
      {
        q: "How long does production take?",
        a: "Typically 3 to 5 weeks depending on complexity."
      }
    ],
    relatedServices: ["press-kit", "author-branding", "book-marketing"]
  },
  {
    id: 10,
    slug: "cover-illustration",
    title: "Book Cover Design",
    category: "Creative",
    summary: "Custom illustration and premium cover design tailored to your genre.",
    heroHeadline: "Covers that signal quality at first glance",
    heroSubtext:
      "We design striking covers that align with reader expectations and stand out online.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Concept development",
        description: "Mood boards and sketches aligned to your genre."
      },
      {
        title: "Illustration and typography",
        description: "Original art paired with elegant, readable type."
      },
      {
        title: "Retail-ready files",
        description: "Optimized for Amazon, print, and marketing assets."
      }
    ],
    deliverables: [
      "Print cover wrap",
      "eBook cover",
      "Social media cover assets"
    ],
    faqs: [
      {
        q: "Do you offer photo-based covers?",
        a: "Yes. We can also create typographic or photo covers."
      },
      {
        q: "How many concepts are included?",
        a: "We typically provide two concepts with revision rounds."
      },
      {
        q: "Can you match a series style?",
        a: "Yes. We build a cohesive series system."
      }
    ],
    relatedServices: ["book-formatting", "author-branding", "book-illustration"]
  },
  {
    id: 11,
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Marketing",
    summary: "Content strategy, community growth, and campaign support across key platforms.",
    heroHeadline: "Social campaigns that build reader communities",
    heroSubtext:
      "We create social strategies that connect your book with the right readers and keep engagement growing.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Platform strategy",
        description: "Positioning and content tailored to each social channel."
      },
      {
        title: "Content calendar",
        description: "Planned posts and launches that keep momentum consistent."
      },
      {
        title: "Community growth",
        description: "Engagement tactics that turn followers into readers."
      }
    ],
    deliverables: [
      "30-day content calendar",
      "Creative direction and templates",
      "Engagement and growth plan"
    ],
    faqs: [
      {
        q: "Which platforms do you focus on?",
        a: "We tailor the mix to your genre and audience, usually Instagram, Facebook, TikTok, and LinkedIn."
      },
      {
        q: "Do you write captions and create visuals?",
        a: "Yes. We can handle both copy and creative assets."
      },
      {
        q: "Can you run paid boosts?",
        a: "Yes. Paid support is available when it fits the strategy."
      }
    ],
    relatedServices: ["content-marketing", "author-branding", "book-marketing"]
  },
  {
    id: 12,
    slug: "seo-for-authors",
    title: "SEO for Authors",
    category: "Marketing",
    summary: "Search visibility that helps readers find your books and author platform.",
    heroHeadline: "SEO that makes your author brand discoverable",
    heroSubtext:
      "We optimize your site and content so search engines surface your work to interested readers.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Technical audit",
        description: "Site health checks, speed tuning, and index improvements."
      },
      {
        title: "Keyword strategy",
        description: "Reader-intent keyword mapping for your pages and blog."
      },
      {
        title: "On-page optimization",
        description: "Title, meta, and content improvements for ranking strength."
      }
    ],
    deliverables: [
      "SEO audit report",
      "Keyword map",
      "Optimized page recommendations"
    ],
    faqs: [
      {
        q: "Do you redesign my website?",
        a: "We can recommend improvements or collaborate with your developer."
      },
      {
        q: "How long until results show?",
        a: "SEO typically shows measurable gains in 8-12 weeks."
      },
      {
        q: "Can you help with blog strategy?",
        a: "Yes. We can outline topics and SEO-friendly structure."
      }
    ],
    relatedServices: ["content-marketing", "book-marketing", "author-branding"]
  },
  {
    id: 13,
    slug: "amazon-marketing",
    title: "Amazon Marketing",
    category: "Marketing",
    summary: "Listing optimization, keyword strategy, and visibility planning for Amazon.",
    heroHeadline: "Amazon marketing built for search and conversion",
    heroSubtext:
      "We refine your Amazon presence to improve discoverability and conversion rate.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Listing optimization",
        description: "Titles, subtitles, descriptions, and keywords tuned for search."
      },
      {
        title: "Category strategy",
        description: "Category and niche positioning aligned with reader intent."
      },
      {
        title: "Conversion support",
        description: "A+ content guidance and review growth planning."
      }
    ],
    deliverables: [
      "Optimized listing copy",
      "Keyword and category plan",
      "Conversion checklist"
    ],
    faqs: [
      {
        q: "Do you manage ads too?",
        a: "Ads are available separately in our Amazon Ads Setup service."
      },
      {
        q: "Can you help with backlist titles?",
        a: "Yes. We can refresh and reposition existing listings."
      },
      {
        q: "Will you update my author page?",
        a: "Yes. We can polish your Amazon author profile as part of the package."
      }
    ],
    relatedServices: ["amazon-ads", "publishing-setup", "book-marketing"]
  },
  {
    id: 14,
    slug: "content-marketing",
    title: "Content Marketing & PR",
    category: "Marketing",
    summary: "Press releases, feature articles, and content that build credibility.",
    heroHeadline: "Content that builds authority and buzz",
    heroSubtext:
      "We craft press-ready content that positions your book and brand with clarity and credibility.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Press release creation",
        description: "Newsworthy copy tailored to your audience and launch timing."
      },
      {
        title: "Feature articles",
        description: "Long-form content that highlights your expertise and story."
      },
      {
        title: "Distribution guidance",
        description: "Recommendations for where and how to publish and pitch."
      }
    ],
    deliverables: [
      "Press release draft",
      "Two feature articles",
      "Distribution and pitch plan"
    ],
    faqs: [
      {
        q: "Do you guarantee press placements?",
        a: "We guide outreach and provide assets, but placements depend on editorial decisions."
      },
      {
        q: "Can you align content with my launch?",
        a: "Yes. We coordinate with your launch timeline."
      },
      {
        q: "Will this help SEO?",
        a: "Yes. Strong content supports SEO and discoverability."
      }
    ],
    relatedServices: ["press-kit", "seo-for-authors", "book-marketing"]
  },
  {
    id: 15,
    slug: "email-marketing",
    title: "Email Marketing",
    category: "Marketing",
    summary: "Launch sequences and newsletters that keep readers engaged.",
    heroHeadline: "Email campaigns that convert interest into readers",
    heroSubtext:
      "We build email sequences that nurture your audience before, during, and after launch.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Launch sequences",
        description: "Email flows for pre-launch, launch week, and follow-up."
      },
      {
        title: "Template design",
        description: "On-brand templates that feel premium and readable."
      },
      {
        title: "Engagement strategy",
        description: "Subject line testing and cadence recommendations."
      }
    ],
    deliverables: [
      "Launch email sequence",
      "Newsletter template",
      "Subject line and cadence guide"
    ],
    faqs: [
      {
        q: "Do I need an existing list?",
        a: "A list helps, but we can build a strategy for growth too."
      },
      {
        q: "Which email platform do you support?",
        a: "We work with most major platforms and can adapt to yours."
      },
      {
        q: "Can you write the emails?",
        a: "Yes. Copywriting is included."
      }
    ],
    relatedServices: ["book-marketing", "social-media-marketing", "author-branding"]
  },
  {
    id: 16,
    slug: "tv-interviews",
    title: "TV & Podcast Interviews",
    category: "Media",
    summary: "Interview prep and outreach support to earn on-air exposure.",
    heroHeadline: "Interviews that introduce your book to new audiences",
    heroSubtext:
      "We prepare your media kit, talking points, and outreach plan so you show up confidently on air.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Pitch strategy",
        description: "Identify the right shows and outreach angles."
      },
      {
        title: "Media training",
        description: "Guidance on storytelling, soundbites, and on-air presence."
      },
      {
        title: "Prep materials",
        description: "Talking points and interview outlines tailored to your book."
      }
    ],
    deliverables: [
      "Interview prep kit",
      "Outreach target list",
      "On-air talking points"
    ],
    faqs: [
      {
        q: "Do you guarantee interviews?",
        a: "We support outreach, but final bookings are determined by the outlets."
      },
      {
        q: "Can you help with podcasts too?",
        a: "Yes. We include podcasts in the outreach list."
      },
      {
        q: "How soon can we pitch?",
        a: "We recommend pitching 4-6 weeks ahead of your launch."
      }
    ],
    relatedServices: ["press-kit", "content-marketing", "book-marketing"]
  },
  {
    id: 17,
    slug: "book-promotion-strategy",
    title: "Book Promotion Strategy",
    category: "Marketing",
    summary: "A clear, omnichannel plan that aligns messaging, budget, and timing.",
    heroHeadline: "Promotion plans that keep momentum steady",
    heroSubtext:
      "We map your ideal reader journey and build a promotion plan that supports long-term growth.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Channel mix",
        description: "Select the right platforms, partnerships, and promotions."
      },
      {
        title: "Budget planning",
        description: "Allocate spend to the channels that matter most."
      },
      {
        title: "Performance goals",
        description: "KPIs and reporting aligned to your goals."
      }
    ],
    deliverables: [
      "Promotion roadmap",
      "90-day calendar",
      "KPI tracking sheet"
    ],
    faqs: [
      {
        q: "Can you execute the plan for us?",
        a: "Yes. Execution support is available across channels."
      },
      {
        q: "Is this only for launches?",
        a: "No. We build plans for backlist growth as well."
      },
      {
        q: "How quickly can we start?",
        a: "We typically deliver a strategy within two weeks."
      }
    ],
    relatedServices: ["social-media-marketing", "email-marketing", "amazon-marketing"]
  },
  {
    id: 18,
    slug: "book-illustration",
    title: "Book Illustration",
    category: "Creative",
    summary: "Original illustrations that bring characters and scenes to life.",
    heroHeadline: "Illustrations that add depth and wonder",
    heroSubtext:
      "We craft custom illustrations that match your story, genre, and audience expectations.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Character design",
        description: "Distinct characters with consistent styling."
      },
      {
        title: "Scene illustration",
        description: "Key moments illustrated to enhance reader immersion."
      },
      {
        title: "Style guide",
        description: "A visual system to keep art consistent across a series."
      }
    ],
    deliverables: [
      "Illustration set",
      "Layered source files",
      "Print and web assets"
    ],
    faqs: [
      {
        q: "How many illustrations are included?",
        a: "We scope the count based on your book length and goals."
      },
      {
        q: "Do I own the artwork?",
        a: "Yes. Final artwork rights are assigned to you."
      },
      {
        q: "Can you match an existing style?",
        a: "We can align with references while keeping the work original."
      }
    ],
    relatedServices: ["cover-illustration", "book-formatting", "book-trailer"]
  },
  {
    id: 19,
    slug: "ghostwriting",
    title: "Ghostwriting",
    category: "Ghostwriting",
    summary: "Confidential writing support that turns your ideas into a polished manuscript.",
    heroHeadline: "Ghostwriting with discretion and literary craft",
    heroSubtext:
      "We capture your voice through interviews and deliver a manuscript ready for editing and publishing.",
    image: "/images/service-placeholder.svg",
    features: [
      {
        title: "Discovery interviews",
        description: "Deep interviews to capture your story and tone."
      },
      {
        title: "Structured outline",
        description: "A detailed roadmap before drafting begins."
      },
      {
        title: "Full manuscript",
        description: "Drafting, revisions, and final delivery."
      }
    ],
    deliverables: [
      "Outline and chapter plan",
      "Full manuscript draft",
      "Two revision rounds"
    ],
    faqs: [
      {
        q: "Is the process confidential?",
        a: "Yes. We sign NDAs and respect full confidentiality."
      },
      {
        q: "Who owns the rights?",
        a: "You retain full rights to the manuscript."
      },
      {
        q: "How long does ghostwriting take?",
        a: "Most projects run 8-16 weeks depending on scope."
      }
    ],
    relatedServices: ["editing-suite", "author-branding", "publishing-setup"]
  }
];

export const serviceCategories = Array.from(new Set(services.map((service) => service.category)));

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
