import { RSSOptions } from "vitepress-plugin-rss";

const RssOptions: RSSOptions = {
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

export default RssOptions;
