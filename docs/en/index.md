---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "sd-class"
  text: "Campus integrated learning platform"
  tagline: It's a great synthesis of Zhixin classroom + Baidu.com disk + Nail + Yuanzhi.
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/getting-started
    - theme: alt
      text: Roadmap
      link: /en/guide/roadmap
features:
  - title: Data Security
    details: All data will be stored on the school's own servers and will not be disclosed to any third party.
  - title: High Performance
    details: The backend uses the high performance go language and the client uses the high performance tauri framework.
  - title: Stability
    details: robust error handling mechanism, full coverage testing to ensure the stability of the system
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/share121.png',
    name: 'share121',
    title: 'Creator',
    desc: 'Creator of sd-class, responsible for front-end development',
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
    title: 'Creator',
    desc: 'Creator of sd-class, responsible for back-end development',
    org: 'candyrect',
    orgLink: 'https://www.candyrect.com/',
    links: [
      { icon: 'github', link: 'https://github.com/lfcypo' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
