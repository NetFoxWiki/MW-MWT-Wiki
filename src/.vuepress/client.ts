import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import MWCard from "./components/MWCard.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("MWCard", MWCard);
  },
});