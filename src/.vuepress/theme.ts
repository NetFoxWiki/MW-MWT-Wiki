import { hopeTheme } from "vuepress-theme-hope";
import { zhCNNavbar, enUSNavbar } from "./navbar/index.js";
import { zhCNSidebar, enUSSidebar } from "./sidebar/index.js";

/*const locale = {
  nickError: '昵称不能少于3个字符',
  mailError: '请填写正确的邮件地址',
  placeholder: '建议使用邮箱登录（社交登录仅支持 GitHub 平台）',
  sofa: '前面的区域，以后再来探索吧~',
  admin: '评论管理员',
  level0: 'Lv0',
  level1: 'Lv1',
  level2: 'Lv2',
  level3: 'Lv3',
  level4: 'Lv4',
  level5: 'Lv5',
};*/

export default hopeTheme({
  hostname: "https://mw.netfox.wiki",

  favicon: "favicon.ico",
  headerDepth: 3,
  navbarTitle: '',
  navbarLayout: {
    start: ["Brand", "Links"],
    center: [],
    end: ["Search", "Outlook", "Language", "Repo"],
  },

  logo: "MWDOCS-Dark.png",
  logoDark: "MWDOCS.png",

  breadcrumb: true,
  breadcrumbIcon: true,
  toc: true,
  pageInfo: ["Word", "ReadingTime", "Original", "Author",  "PageView"],

  lastUpdated: true,
  contributors: false,
  titleIcon: true,

  repo: "https://github.com/NetFoxWiki/MW-MWT-DOCS/",

  displayFooter: true,

  editLink: true,
  docsRepo: "NetFoxWiki/MW-MWT-DOCS",
  docsBranch: "gh-page",
  docsDir: "src",

  print: true,
  fullscreen: true,
  iconAssets: "fontawesome",
  darkmode: "switch",
  externalLinkIcon: true,

  locales: {
    "/zh/": {
      // navbar
      navbar: zhCNNavbar,

      // sidebar
      sidebar: zhCNSidebar,

      footer: '<a target="_blank" href="https://netfox.wiki"><img data-mode="darkmode-only" height="100%" width="210" src="https://statics.netfox.wiki/20240504/retouch_2024050410472811.7sn0rcgvht.webp"><img data-mode="lightmode-only" height="100%" width="210" src="https://statics.netfox.wiki/20240504/retouch_2024050410474193.54xkgznu5u.webp"></a> <img height="100%" width="100" src="https://statics.netfox.wiki/20240302/netfox-logo-round.60tze5ob17.webp"> <a href="https://www.netlify.com" target="_blank"> <img width="100" height="100%" src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="由 Netlify 部署" data-mode="lightmode-only"><img width="100" height="100%" src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="由 Netlify 部署" data-mode="darkmode-only"></a><hr> 用于记录 <font color="#2196F3">现代战舰</font> 与 <font color="#fb8b05">现代战争：坦克</font> 内容的文档网站 🍂<br>Copyright © 2023-2024 <a href="https://mw.netfox.wiki">MW & MWT 文档</a> by <font color="#5b77a6">网狐社</font> All rights reserved.',

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      // navbar
      navbar: enUSNavbar,

      // sidebar
      sidebar: enUSSidebar,

      footer: '<a target="_blank" href="https://netfox.wiki"><img data-mode="darkmode-only" height="100%" width="210" src="https://statics.netfox.wiki/20240504/retouch_2024050410472811.7sn0rcgvht.webp"><img data-mode="lightmode-only" height="100%" width="210" src="https://statics.netfox.wiki/20240504/retouch_2024050410474193.54xkgznu5u.webp"></a> <img height="100%" width="100" src="https://statics.netfox.wiki/20240302/netfox-logo-round.60tze5ob17.webp"> <a href="https://www.netlify.com" target="_blank"> <img width="100" height="100%" src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="由 Netlify 部署" data-mode="lightmode-only"><img width="100" height="100%" src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="由 Netlify 部署" data-mode="darkmode-only"></a><hr> Docs site for <font color="#2196F3">Modern Warships</font> and <font color="#fb8b05">Modern Warfare: Tanks</font> Content 🍂<br>Copyright © 2023-2024 <a href=“https://mw.netfox.wiki”>MW & MWT Docs</a> by <font color="#5b77a6">NetFox.Wiki</font> All rights reserved.',

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/zh/dev/": ["1234"],
    },
  },

  plugins: {
    //blog: true,
    notice: [
      /*{
        path: "/zh/mw/",
        title: "网狐社运营团队",
        content: "下载游戏来试试吧",
        actions: [
          {
            text: "下载游戏",
            link: "/download",
            type: "primary",
          },
          { text: "史" },
        ],
        showOnce: false,
        confirm: true,
      },*/
    ],
    seo: true,
    searchPro: {
      indexContent: true,
      autoSuggestions: false,
      worker: "MW-MWT-DOCS-Search.worker.js",
    },
    sitemap: true,
    photoSwipe: {
      delay: 800,
    },
    // You should generate and use your own comment service
    comment: {
      provider: "Waline",
      serverURL: "https://waline.netfox.wiki/",
      comment: false,
      pageview: true,
      /*meta: ['nick', 'mail'],
      requiredMeta: ['nick'],
      pageSize: 10,
      locales: locale,
      imageUploader: false,
      //reaction: ['https://wsrv.nl/?url=unpkg.com/@waline/emojis@1.1.0/tw-emoji/1f649.png', 'https://wsrv.nl/?url=s1.ax1x.com/2023/08/04/pPF64UI.jpg', 'https://wsrv.nl/?url=s1.ax1x.com/2023/08/05/pPkbBAP.jpg'],
      search: false,
      emoji: false,[
      'https://jsd.cdn.zzko.cn/npm/@waline/emojis/tw-emoji/',
      'https://jsd.cdn.zzko.cn/npm/sticker-heo/Sticker-100/',
      ],*/
    },
    components: {
      components: ["VPCard", "VPBanner", "VidStack", "BiliBili", "Badge", "SiteInfo", "PDF", "Share",],
    },
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      tasklist: true,//任务列表
      component: true,//组件
      figure: true,//图片
      imgSize: true,
      align: true,//自定义对齐
      chart: true,//图表
      echarts: true,//图表
      gfm: true,//gfm语法
      sub: true,//上下角标
      sup: true,
      spoiler: true,//剧透
      demo: true,//代码演示
      tabs: true,//选项卡
      hint: true,//容器
    },
    catalog: true,
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
}, { custom: true });
