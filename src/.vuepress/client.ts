import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import MWCard from "./components/MWCard.vue";
//import NotFound from "./layouts/404NotFound.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("MWCard", MWCard);
  },
  layouts: {
    //NotFound,
  },
});