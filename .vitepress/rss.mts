import { RSSOptions } from "vitepress-plugin-rss";

const RssOptions: RSSOptions = {
  title: "三清课堂",
  baseUrl: "https://tp-class.s121.top",
  copyright: "Copyright © 2024-present 三清课堂 team",
  description: "三清课堂的文档",
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

export default RssOptions;
