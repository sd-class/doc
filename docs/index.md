---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "sd 课堂"
  text: "校园一体化学习平台"
  tagline: 这是一个知新课堂 + 百度网盘 + 钉钉 + 远志的大成体
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 发展规划
      link: /guide/roadmap
features:
  - title: 数据安全
    details: 所以的数据将会保存在各个学校的自建服务器上，不会泄露给任何第三方
  - title: 高性能
    details: 后端使用高性能的 go 语言，客户端使用高性能的 tauri 框架
  - title: 稳定性
    details: 健全的错误处理机制，全覆盖的测试，保证系统的稳定性
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/share121.png',
    name: 'share121',
    title: '创造者',
    desc: 'sd-class 的创造者，负责前端开发',
    org: 'sd-class',
    orgLink: 'https://github.com/sd-class',
    links: [
      { icon: 'github', link: 'https://github.com/share121' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/626843261' },
    ]
  },
  {
    avatar: 'https://www.github.com/lfcypo.png',
    name: 'lfcypo',
    title: '创造者',
    desc: 'sd-class 的创造者，负责后端开发',
    org: '糖方科技',
    orgLink: 'https://www.candyrect.com/',
    links: [
      { icon: 'github', link: 'https://github.com/lfcypo' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
