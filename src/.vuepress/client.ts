import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import InfoCom from "./components/InfoCom.vue";
import ArchiveNotice from "./components/ArchiveNotice.vue"
import MWGameLottery from "./components/MWGameLottery.vue"
import InfoCard from "./components/InfoCard.vue"


//import NotFound from "./layouts/404NotFound.vue";
//import HomePage from "./layouts/HomePage.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("InfoCom", InfoCom);
    app.component("InfoCard", InfoCard);
    app.component("ArchiveNotice", ArchiveNotice);
    app.component("MWGameLottery", MWGameLottery);
  },
  layouts: {
    //NotFound,
    //HomePage,
  },
});