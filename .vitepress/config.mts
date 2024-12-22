import { DefaultTheme, defineConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import { RSSOptions, RssPlugin } from "vitepress-plugin-rss";
import { La51Plugin } from "vitepress-plugin-51la";

const RSS: RSSOptions = {
  title: "sd-class 文档",
  baseUrl: "https://sd-class.s121.top",
  copyright: "Copyright © 2024-present sd-class team",
  description: "sd 课堂的文档",
  language: "zh-CN",
  icon: true,
  authors: [
    {
      name: "share121",
      email: "2854631158@qq.com",
      link: "https://github.com/share121",
    },
    {
      name: "lfcypo",
      email: "lfcypo@gmail.com",
      link: "https://github.com/lfcypo",
    },
  ],
  filename: "feed.rss",
  log: true,
  ignoreHome: true,
  ignorePublish: false,
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withI18n({
    vite: {
      plugins: [
        RssPlugin(RSS),
        La51Plugin({
          id: "3KhSqiNoRBw5iG2W",
          ck: "3KhSqiNoRBw5iG2W",
          autoTrack: true,
          importMode: "async",
        }),
      ],
    },
    srcDir: "docs",
    lastUpdated: true,
    themeConfig: {
      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2024-present sd-class team",
      },
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
    description: {
      zhHans: "sd 课堂的文档",
      en: "sd-class document",
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
          {
            text: "API",
            link: "/api/",
          },
          {
            text: "示例",
            link: "/examples/",
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
          {
            text: "API",
            link: "/en/api/",
          },
          {
            text: "Examples",
            link: "/en/examples/",
          },
        ],
      },
    },
  }),
);
