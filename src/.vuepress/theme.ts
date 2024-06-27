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
  //hotReload: true,

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
  pageInfo: ["Original", "Author", "PageView", "Word", "ReadingTime",],

  lastUpdated: true,
  contributors: false,
  titleIcon: true,

  //repo: "https://github.com/NetFoxWiki/MW-MWT-DOCS/",

  displayFooter: true,

  editLink: true,
  docsRepo: "NetFoxWiki/MW-MWT-DOCS",
  docsBranch: "gh-page",
  docsDir: "src",

  print: true,
  fullscreen: true,
  iconAssets: "fontawesome",
  darkmode: "switch",
  externalLinkIcon: false,
  prevLink: false,
  nextLink: false,

  locales: {
    "/zh/": {
      // navbar
      navbar: zhCNNavbar,

      // sidebar
      sidebar: zhCNSidebar,

      footer: `<a target="_blank" href="https://netfox.wiki"><img data-mode="darkmode-only" height="100%" width="210"
                    src="https://statics.netfox.wiki/20240504/retouch_2024050410472811.7sn0rcgvht.webp"><img
                    data-mode="lightmode-only" height="100%" width="210"
                    src="https://statics.netfox.wiki/20240504/retouch_2024050410474193.54xkgznu5u.webp"></a>
            <img height="100%" width="100" src="https://statics.netfox.wiki/20240302/netfox-logo-round.60tze5ob17.webp">
            <a href="https://www.netlify.com" target="_blank"> <img width="100" height="100%"
                    src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="由 Netlify 部署"
                    data-mode="lightmode-only"><img width="100" height="100%"
                    src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="由 Netlify 部署"
                    data-mode="darkmode-only"></a>
                    <hr>以文档的形式，记录 <span style="color:#2196F3">现代战舰</span> 与 <span style="color:#fb8b05">现代战争：坦克激斗</span> 内容的骨灰级游戏网站 🍂<br>Copyright © 2023-2024 <a href="https://mw.netfox.wiki">MW & MWT 文档</a> by <font color="#5b77a6">网狐社</font> All rights reserved.`,

      displayFooter: false,

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

      footer: `<a target="_blank" href="https://netfox.wiki"><img data-mode="darkmode-only" height="100%" width="210"
                    src="https://statics.netfox.wiki/20240504/retouch_2024050410472811.7sn0rcgvht.webp"><img
                    data-mode="lightmode-only" height="100%" width="210"
                    src="https://statics.netfox.wiki/20240504/retouch_2024050410474193.54xkgznu5u.webp"></a>
            <img height="100%" width="100" src="https://statics.netfox.wiki/20240302/netfox-logo-round.60tze5ob17.webp">
            <a href="https://www.netlify.com" target="_blank"> <img width="100" height="100%"
                    src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="由 Netlify 部署"
                    data-mode="lightmode-only"><img width="100" height="100%"
                    src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="由 Netlify 部署"
                    data-mode="darkmode-only"></a>
                    <hr>
      Docs site for <font color="#2196F3">Modern Warships</font> and <font color="#fb8b05">Modern Warfare: Tanks</font> Content 🍂<br>Copyright © 2023-2024 <a href=“https://mw.netfox.wiki”>MW & MWT Docs</a> by <font color="#5b77a6">NetFox.Wiki</font> All rights reserved.`,

      displayFooter: false,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  plugins: {
    //blog: true,
    /*
    notice: [
      {
        path: "",
        title: "",
        content: "",
        actions: [
          {
            text: "",
            link: "",
            type: "primary",
          },
          { text: "" },
        ],
        showOnce: false,
        confirm: true,
      },
    ],*/
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
      imgLazyload: false,
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
    /*pwa: {
      favicon: "./favicon.ico",
      update: 'hint',
      themeColor: "#5c77a6",
      // cacheHTML: true,
      // cacheImage: true,
      appendBase: true,
    },*/
  },
}, { custom: true });
