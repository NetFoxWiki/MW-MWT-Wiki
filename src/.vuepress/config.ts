import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { redirectPlugin } from '@vuepress/plugin-redirect';
//import { getDirname, path } from "vuepress/utils";

//const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "MW & MWT 文档",
  /*head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans+SC:wght@500&display=swap",
        rel: "stylesheet",
      },
    ],
  ],*/
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "MW & MWT 文档",
    },
    "/en/": {
      lang: "en-US",
      title: "MW & MWT Docs",
    },
  },
  theme,
  plugins: [
    redirectPlugin({
      autoLocale: true,
      switchLocale: "modal",
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
