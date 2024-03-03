import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import General from "./components/General.vue";
//import { onMounted } from 'vue';
//import { defineAsyncComponent } from 'vue';

//const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));

export default defineClientConfig({
	enhance: ({ app, router, siteData }) => {
    app.component("General", General);
  },
	/*setup() {
    onMounted(() => {});
  },
rootComponents: [
    NavMusic,
  ],*/
});