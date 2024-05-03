import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import NetFoxWiki from "./components/NetFoxWiki.vue";

export default defineClientConfig({
	enhance: ({ app, router, siteData }) => {
    app.component("NetFoxWiki", NetFoxWiki);
  },
});