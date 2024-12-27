import { VitePressI18nOptions } from "vitepress-i18n/types";

const rootLocale = "zhHans";
const supportedLocales = [rootLocale, "en"];

const i18nOptions: VitePressI18nOptions = {
  locales: supportedLocales,
  rootLocale: rootLocale,
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
    },
    en: {
      nav: [
        { text: "Home", link: "/en/" },
        { text: "Guide", link: "/en/guide/" },
        { text: "API", link: "/en/api/" },
        { text: "Examples", link: "/en/examples/" },
      ],
    },
  },
};

export { i18nOptions, rootLocale, supportedLocales };
