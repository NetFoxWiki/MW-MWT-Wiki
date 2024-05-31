import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import MWCard from "./components/MWCard.vue";
import InfoCom from "./components/InfoCom.vue";
import ArchiveNotice from "./components/ArchiveNotice.vue"

//import NotFound from "./layouts/404NotFound.vue";
//import HomePage from "./layouts/HomePage.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("MWCard", MWCard);
    app.component("InfoCom", InfoCom);
    app.component("ArchiveNotice", ArchiveNotice);
  },
  layouts: {
    //NotFound,
    //HomePage,
  },
});