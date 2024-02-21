import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { redirectPlugin } from '@vuepress/plugin-redirect'

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "MW & MWT 文档",
  locales: {
    "/zh-CN/": {
      lang: "zh-CN",
      title: "MW & MWT 文档",
    },
    "/zh-TW/": {
      lang: "zh-TW",
      title: "MW & MWT 文件",
    },
  },
  theme,
  plugins: [
    redirectPlugin({
	  autolocale: true,
	  localeConfig: {
        '/zh-CN/': ['zh-CN'],
	    '/zh-TW/': ['zh-TW'],
      },
	  switchlocale: "modal",
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
