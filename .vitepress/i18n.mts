import { VitePressI18nOptions } from "vitepress-i18n/types";

const i18nOptions: VitePressI18nOptions = {
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
};

export default i18nOptions;
