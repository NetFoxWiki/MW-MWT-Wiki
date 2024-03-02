import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { redirectPlugin } from '@vuepress/plugin-redirect';
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "MW & MWT 文档",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Madimi+One&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  locales: {
    "/zh-hans/": {
      lang: "zh-CN",
      title: "MW & MWT 文档",
    },
    "/zh-hant/": {
      lang: "zh-TW",
      title: "MW & MWT 文件",
    },
  },
  theme,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/sidebarBottom": path.resolve(
      __dirname,
      "./components/sidebarBottom.vue",
    ),
  },
  plugins: [
    redirectPlugin({
      autoLocale: true,
      switchLocale: "modal",
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
