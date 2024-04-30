const sidebars = require('./sidebars');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DGate API Gateway',
  tagline: 'API Gateway for the modern web',
  url: 'https://dgate.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'dgate-io',
  projectName: 'dgate',
  themes: ['@docusaurus/theme-mermaid'],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    prism: {
      mermaid: true,
      additionalLanguages: ['javascript', 'typescript', 'bash', 'yaml'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-message',
          line: 'highlight-next-line-error-message',
        },
        {
          className: 'code-block-info-line',
          line: 'highlight-next-line-info',
        },
        {
          className: 'code-block-underline',
          line: 'underline-next-line',
        },
      ],
    },
    algolia: {
      appId: 'Z1JMW5L4D6',
      apiKey: "3134ba5a461dcae8adb8969d6ca2cff4",
      indexName: "dgate-io-docs",
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
          to: '/docs/getting-started/dgate-concepts',
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
      copyright: ` Copyright © ${new Date().getFullYear()} | bubbajoe.dev`,
    },
    announcementBar: {
      id: 'ab-source-link-1', // Increment on change
      content: `<strong>DGate API Gateway: check out the newly open-sourced API Gateway! </strong><a class="cta" href="https://github.com/dgate-io/dgate">HERE</a>`,
      isCloseable: true,
    },
  },
  plugins: [
    // [
    //   '@docusaurus/plugin-client-redirects',
    //   {
    //     redirects: [
    //       {
    //         to: '/getting-started',
    //         from: '/docs/getting-started/setting-up',
    //       },
    //     ],
    //   },
    // ],
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
