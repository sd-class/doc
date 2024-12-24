import { defineConfig, UserConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import { RssPlugin } from "vitepress-plugin-rss";
import { La51Plugin } from "vitepress-plugin-51la";
import { withMermaid } from "vitepress-plugin-mermaid";
import { VitePressI18nOptions } from "vitepress-i18n/types";
import rssOptions from "./rss.mts";
import i18nOptions from "./i18n.mts";

const vitepressOptions: UserConfig = {
  markdown: {
    image: {
      lazyLoading: true,
    },
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
  withI18n(
    withMermaid(vitepressOptions),
    i18nOptions,
  ),
);
