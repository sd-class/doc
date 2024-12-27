import DefaultTheme from "vitepress/theme";
import MyLayout from "./Layout.vue";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { nextTick, onMounted, watch } from "vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  setup() {
    const route = useRoute();
    const initRoom = () =>
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    onMounted(initRoom);
    watch(() => route.path, () => nextTick(initRoom));
  },
};
