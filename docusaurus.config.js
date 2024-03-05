// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Becomy',
  tagline: 'Versatile Ecommerce Solution',
  favicon: 'img/favicon.ico',

  url: 'https://docs-becomy.surge.sh',
  baseUrl: '/',
  organizationName: 'becomy',
  projectName: 'docs-becomy',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',
  trailingSlash: true,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/becomy-thumbnail.png',
      navbar: {
        title: 'ecomy',
        logo: {
          alt: 'Becomy Logo',
          src: 'img/b-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Topics',
          },

          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      trailingTrash: true,
      metadata: [
        { name: 'Tags', content: 'Becomy, ecommerce, documentation, guide, tutorial' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'img/becomy-thumbnail.png' },
        { name: 'twitter:site', content: '@Becomy' },
        { name: 'twitter:creator', content: '@BecomySupport' },
        { property: 'og:image', content: 'img/becomy-thumbnail.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Becomy Official Documentation' },
      ],
      headTags: [
        // Declare a <link> preconnect tag
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://example.com',
          },
        },
        // Declare some json-ld structured data
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Becomy',
            url: 'https://becomystaging.com/',
            logo: 'https://becomystaging.com/path-to-your-logo.png',
          }),
        },
        // Additional tags for Twitter Card
        {
          tagName: 'meta',
          attributes: {
            name: 'twitter:title',
            content: 'Getting Started with Becomy: A Comprehensive Documentation',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            name: 'twitter:description',
            content: 'Explore Becomy effortlessly with our user-friendly docs and videos. Get answers to your questions and enhance your ecommerce journey. Start now!',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            name: 'twitter:image',
            content: '/static/img/becomy-thumbnail.png',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            name: 'twitter:url',
            content: 'https://docs-becomy.surge.sh/',
          },
        },
      ],
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          // {
          //   to: '/',
          //   from: '/Intoduction-to-Becomy',
          // },
          // Redirect from multiple old paths to the new path
          {
            to: '/',
            from: ['/Intoduction-to-Becomy', '/Products'],
          },
        ],
      },
    ],
    
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      fr: {
        label: 'Français'
      }
    }
  },
};

export default config;
