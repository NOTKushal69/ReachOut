// Shared service definitions used by both the homepage "What We Do" teaser
// and the full /services page, so the two never drift apart.

const iconProps = {
  className: 'w-8 h-8 md:w-9 md:h-9',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
};

export const services = [
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    short: 'Paid campaigns tuned for ROI across search, social and display.',
    long: 'Data-driven paid media that turns ad spend into measurable growth. We plan, launch, test and scale campaigns across Google, Meta and beyond — always optimising for the metrics that actually move your business.',
    deliverables: [
      'Google & Meta ads',
      'Campaign strategy & setup',
      'A/B testing & optimisation',
      'Analytics & reporting',
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </svg>
    ),
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    short: 'Building and growing your presence across the platforms that matter.',
    long: 'End-to-end social management — strategy, content calendars, community and growth — so your brand shows up consistently and builds a real, engaged audience instead of chasing vanity metrics.',
    deliverables: [
      'Content calendars',
      'Community management',
      'Reels & short-form',
      'Growth strategy',
    ],
    icon: (
      <svg {...iconProps}>
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.2 10.8 15.8 7.2M8.2 13.2 15.8 16.8" />
      </svg>
    ),
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    short: 'Content that ranks, engages and turns audiences into customers.',
    long: 'Editorial, SEO and storytelling that pulls the right people in — blogs, scripts, newsletters and campaigns built around what your audience is actually searching for, then measured on what it returns.',
    deliverables: [
      'SEO blogs & articles',
      'Video & reel scripts',
      'Email newsletters',
      'Content strategy',
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="3" width="14" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    short: 'Fast, modern websites and landing pages built to convert and scale.',
    long: 'Design-led, high-performance websites — from landing pages to full builds — engineered for speed, SEO and conversion, and easy for your team to run once we hand them over.',
    deliverables: [
      'Landing pages',
      'Full website builds',
      'SEO & performance',
      'CMS & handover',
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
        <path d="M9 12l-2 2 2 2M15 12l2 2-2 2" />
      </svg>
    ),
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    short: 'Automating the busywork so your team ships faster with fewer errors.',
    long: 'We connect your tools and automate the repetitive work — lead flows, onboarding, reporting and hand-offs — so your team spends its time on the work that actually needs a human.',
    deliverables: [
      'Tool integrations',
      'Lead & CRM automation',
      'Reporting pipelines',
      'Custom workflows',
    ],
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </svg>
    ),
  },
];
