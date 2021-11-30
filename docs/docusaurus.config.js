// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "httpin Docs",
  tagline: "httpin - Decode an HTTP request into a custom struct in Go",
  url: "https://ggicci.github.io",
  baseUrl: "/httpin/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/emoji-dango.png",
  organizationName: "ggicci", // Usually your GitHub org/user name.
  projectName: "httpin", // Usually your repo name.
  trailingSlash: false,
  scripts: [],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ggicci/httpin/edit/documentation/docs/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: ["@docusaurus/plugin-google-gtag"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        title: "httpin",
        logo: {
          alt: "site logo",
          src: "img/emoji-dango.png",
        },
        items: [
          {
            href: "https://www.buymeacoffee.com/ggicci",
            position: "right",
            className: "header-bmc-link",
            "aria-label": "Buy me a coffee",
          },
          {
            href: "https://github.com/ggicci/httpin",
            position: "right",
            className: "header-github-link",
            "aria-label": "Github repository",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} ggicci/httpin, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      gtag: {
        trackingID: "G-C93QME0ETP",
        anonymizeIP: true,
      },
    }),
}

module.exports = config
