/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DGate API Gateway',
  tagline: 'Open Source Function Native API Gateway!',
  url: 'https://dgate.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'dgate-io',
  projectName: 'dgate',
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    prism: {
      mermaid: true,
      additionalLanguages: ['javascript', 'typescript', 'bash', 'yaml', 'json'],
    },
    algolia: {
      appId: '7ZF6OL4UBL',
      apiKey: "c7c19d3cedc03f92311ee53a9303cd23",
      indexName: "dgate",
    },
    navbar: {
      title: 'DGate',
      hideOnScroll: true,
      logo: {
        alt: 'DGate',
        src: '/img/dgate.svg',
        width: '32px',
        height: '22px',
      },
      items: [
        {
          href: 'https://github.com/dgate-io/dgate',
          className: 'header-github-link',
          position: 'right',
        },
        {
          to: '/docs/intro',
          label: 'Documentation',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          label: "Getting Started",
          to: "/",
        },
        {
          label: "CLI Reference",
          to: "/",
        },
        {
          label: "GoDoc",
          to: "https://pkg.go.dev/dgate.io/dgate",
        },
      ],
      copyright: ` Copyright © ${new Date().getFullYear()} | DGate.io`,
    },
    announcementBar: {
      id: 'ab-source-link-1', // Increment on change
      content: `<strong>DGate API Gateway: check out the newly open-sourced API Gateway! </strong><a class="cta" href="https://github.com/dgate-io/dgate">HERE</a>`,
      isCloseable: true,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          path: "./docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        gtag: {
          trackingID: 'GTM-526DPZWG',
        },
        sitemap: {
          lastmod: 'datetime',
          changefreq: 'weekly',
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};
