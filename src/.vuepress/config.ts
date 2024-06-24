import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { redirectPlugin } from '@vuepress/plugin-redirect';
import { getDirname, path } from "vuepress/utils";
//import { viteBundler } from '@vuepress/bundler-vite';
import { removePwaPlugin } from '@vuepress/plugin-remove-pwa';

const __dirname = getDirname(import.meta.url);

import fs from "fs";

const versionJSON = {
  "compileTime": new Date().getTime()
};

fs.writeFile("./src/.vuepress/utils/versionJSON.json", JSON.stringify(versionJSON), (err) => {
  console.log('\n----------' + '\n【自定义区域】' + '\nBuildVersion: ' + versionJSON.compileTime + '\nBuildErr: ' + err + '\n----------');
});

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "MW & MWT 文档",
  head: [
    /*["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
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
    [
      "script",
      {},
      `
      function _howxm(){_howxmQueue.push(arguments)}
window._howxmQueue=window._howxmQueue||[];
_howxm('setAppID','4dc7b530-9aa9-438f-a0ae-003710b65a4a');
(function(){var scriptId='howxm_script';
if(!document.getElementById(scriptId)){
var e=document.createElement('script'),
t=document.getElementsByTagName('script')[0];
e.setAttribute('id',scriptId);
e.type='text/javascript';e.async=!0;
e.src='https://static.howxm.com/sdk.js';
t.parentNode.insertBefore(e,t)}})();
      `,
    ],*/
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?25f0508b2da45f935d561dc0f25b3bf6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
      `,
    ],
  ],
  alias: {
    "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(
      __dirname,
      "./components/Sidebar.vue",
    ),
    "@theme-hope/components/NormalPage": path.resolve(
      __dirname,
      "./components/NormalPage.vue",
    ),
  },
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "MW & MWT 文档",
    },
    /*"/en/": {
      lang: "en-US",
      title: "MW & MWT Docs",
    },*/
  },
  theme,
  /*bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),*/
  plugins: [
    removePwaPlugin({

    }),
    redirectPlugin({
      config: {
        '/dmw': '/zh/mw/download/app.html',
        '/zh': '/zh/'
      },
      autoLocale: false,
      switchLocale: "modal",
    }),
  ],
  // Enable it with pwa
  //shouldPrefetch: false,
});
