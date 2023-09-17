import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import { fullTextSearchPlugin } from "vuepress-plugin-full-text-search2";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { getDirname, path } from "@vuepress/utils";
//import { removePWAPlugin } from "vuepress-plugin-remove-pwa";

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'MWdocs',
	head: [
		['link', { rel: 'icon', href: 'https://img1.imgtp.com/2023/08/14/Uqoy24sz.png' }]
	],
	shouldPrefetch: false,
	theme,
	plugins: [
	//removePWAPlugin({
    //}),
		/*fullTextSearchPlugin({
			locales: {
				'/': {
					placeholder: '搜索',
				},
			},
		}),*/
		searchProPlugin({
			indexContent: true,
			autoSuggestions: true,
			worker: "search-mwdocs.worker.js",
		}),
	],
});