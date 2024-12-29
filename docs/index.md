---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "三清课堂"
  tagline: "教学管理、云端文档、机房控制一体化教育解决方案"
  actions:
    - theme: brand
      text: 介绍
      link: /guide/introduction
    - theme: alt
      text: 发展规划
      link: /guide/roadmap
features:
  - title: 数据安全
    details: 所有的数据将会保存在各个学校的自建服务器上，不会泄露给任何第三方
  - title: 高性能
    details: 后端使用高性能的 go 语言，客户端使用高性能的 tauri 框架
  - title: 稳定性
    details: 健全的错误处理机制，全覆盖的测试，保证系统的稳定性
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/share121.png',
    name: 'share121',
    title: '创造者',
    desc: '三清课堂的创造者，负责前端开发',
    org: '三清课堂',
    orgLink: 'https://github.com/trpure-class',
    links: [
      { icon: 'github', link: 'https://github.com/share121' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/626843261' },
    ]
  },
  {
    avatar: 'https://www.github.com/lfcypo.png',
    name: 'lfcypo',
    title: '创造者',
    desc: '三清课堂的创造者，负责后端开发',
    org: '三清课堂',
    orgLink: 'https://github.com/trpure-class',
    links: [
      { icon: 'github', link: 'https://github.com/lfcypo' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1265473007' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
