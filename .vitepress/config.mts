import { DefaultTheme, defineConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withI18n({
    description: "sd 课堂的文档",

    srcDir: "docs",

    lastUpdated: true,

    themeConfig: {
      // footer: {
      //   message: "Released under the MIT License.",
      //   copyright: "Copyright © 2019-present share121",
      // },

      externalLinkIcon: true,

      editLink: {
        pattern: "https://github.com/sd-class/doc/edit/main/docs/:path",
      },

      socialLinks: [
        { icon: "github", link: "https://github.com/sd-class/doc" },
      ],
    },
  }, {
    locales: ["zhHans", "en"],
    rootLocale: "zhHans",
    searchProvider: "local",
    title: {
      zhHans: "sd 课堂",
      en: "sd-class",
    },
    themeConfig: {
      zhHans: {
        nav: [
          { text: "首页", link: "/" },
          { text: "指南", link: "/guide/" },
          { text: "API", link: "/api/" },
          { text: "示例", link: "/examples/" },
        ],
        sidebar: [
          {
            text: "指南",
            link: "/guide/",
            items: [
              { text: "介绍", link: "/guide/introduction" },
              { text: "发展规划", link: "/guide/roadmap" },
              { text: "快速开始", link: "/guide/getting-started" },
            ],
          },
        ],
      },
      en: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Guide", link: "/en/guide/" },
          { text: "API", link: "/en/api/" },
          { text: "Examples", link: "/en/examples/" },
        ],
        sidebar: [
          {
            text: "Guide",
            link: "/en/guide/",
            items: [
              { text: "Introduction", link: "/en/guide/introduction" },
              { text: "Roadmap", link: "/en/guide/roadmap" },
              { text: "Getting Started", link: "/en/guide/getting-started" },
            ],
          },
        ],
      },
    },
  }),
);
