import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import InfoCom from "./components/InfoCom.vue";
import ArchiveNotice from "./components/ArchiveNotice.vue";
import MWGameLottery from "./components/MWGameLottery.vue";
import InfoCard from "./components/InfoCard.vue";
import OC from "./components/OC.vue";
import MWTTime from "./components/MWTTime.vue";
import { clerkPlugin } from 'vue-clerk';
import { zhCN } from "@clerk/localizations";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("OC", OC);
    app.component("InfoCom", InfoCom);
    app.component("InfoCard", InfoCard);
    app.component("ArchiveNotice", ArchiveNotice);
    app.component("MWGameLottery", MWGameLottery);
    app.component("MWTTime", MWTTime);
    app.use(clerkPlugin, {
      //发展环境
      publishableKey: 'pk_live_Y2xlcmsubmV0Zm94Lndpa2kk',
      //开发环境
      //publishableKey: 'pk_test_d2lubmluZy10dW5hLTUuY2xlcmsuYWNjb3VudHMuZGV2JA',
      localization: zhCN,
    })
  },
  layouts: {
    
  },
});