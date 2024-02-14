import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import { removePWAPlugin } from "vuepress-plugin-remove-pwa";
import { redirectPlugin } from "vuepress-plugin-redirect";
//import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
//import { path } from '@vuepress/utils';

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "MW & MWT 文档",
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
  plugins: [
    /*registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),*/
    redirectPlugin({
      autoLocale: true,
      switchLocale: "modal",
    }),
    /*removePWAPlugin({
    }),*/
  ],

});
