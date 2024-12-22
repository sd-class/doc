<script lang="ts" setup>
import { inBrowser, useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { watch } from "vue";
import Giscus from "@giscus/vue";

const { isDark, page } = useData();
const { Layout } = DefaultTheme;

watch(isDark, (dark) => {
  if (!inBrowser) return;
  document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe")
    ?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: dark ? "dark" : "light" } } },
      "https://giscus.app"
    );
});
</script>

<template>
  <Layout>
    <template #doc-after>
      <div style="margin-top: 24px">
        <Giscus
          :key="page.filePath"
          repo="sd-class/doc"
          repo-id="R_kgDONgM5eQ"
          category="Announcements"
          category-id="DIC_kwDONgM5ec4Clbmj"
          mapping="pathname"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="top"
          :theme="isDark ? 'dark' : 'light'"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </template>
  </Layout>
</template>
