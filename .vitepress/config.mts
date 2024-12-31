import { defineConfig, UserConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import { RssPlugin } from "vitepress-plugin-rss";
import { La51Plugin } from "vitepress-plugin-51la";
import { withMermaid } from "vitepress-plugin-mermaid";
import rssOptions from "./rss.mts";
import { i18nOptions } from "./i18n.mts";
import { genSidebar, reg as orderFileNameReg } from "./sidebar.mts";
import path from "path";
import footnote from "markdown-it-footnote";
import sub from "markdown-it-sub";
import sup from "markdown-it-sup";
import deflist from "markdown-it-deflist";
import abbr from "markdown-it-abbr";
import ins from "markdown-it-ins";
import mark from "markdown-it-mark";

const vitepressOptions: UserConfig = {
  markdown: {
    image: {
      lazyLoading: true,
    },
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(footnote)
        .use(mark)
        .use(sub)
        .use(sup)
        .use(ins)
        .use(abbr)
        .use(deflist);
    },
  },
  title: "三清课堂",
  description: "三清课堂的文档",
  cleanUrls: true,
  rewrites(id) {
    return id
      .split("/")
      .map((item, index, arr) => {
        if (index === arr.length - 1) {
          // 这是文件
          const ext = path.extname(item);
          if (ext !== ".md") return item;
          const basename = path.basename(item, ext);
          return basename.replace(orderFileNameReg, "") + ".md";
        } else {
          // 这是文件夹
          return item.replace(orderFileNameReg, "");
        }
      })
      .join("/");
  },
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
    ],
    sidebar: genSidebar(),
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present 三清课堂 team",
    },
    externalLinkIcon: true,
    editLink: {
      pattern: "https://github.com/trpure-class/document/edit/main/docs/:path",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/trpure-class/document" },
    ],
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withI18n(withMermaid(vitepressOptions), i18nOptions),
);
