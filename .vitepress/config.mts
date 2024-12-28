import { defineConfig, UserConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import { RssPlugin } from "vitepress-plugin-rss";
import { La51Plugin } from "vitepress-plugin-51la";
import { withMermaid } from "vitepress-plugin-mermaid";
import { withSidebar } from "vitepress-sidebar";
import rssOptions from "./rss.mts";
import { i18nOptions } from "./i18n.mts";
import { vitePressSidebarOptions } from "./sidebar.mts";

const vitepressOptions: UserConfig = {
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  title: "sd 课堂",
  description: "sd 课堂的文档",
  cleanUrls: true,
  vite: {
    plugins: [
      RssPlugin(rssOptions),
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
    searchProvider: "local",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "API", link: "/api/" },
      { text: "示例", link: "/examples/" },
    ],
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
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(
    withI18n(
      withMermaid(vitepressOptions),
      i18nOptions,
    ),
    vitePressSidebarOptions,
  ),
);
