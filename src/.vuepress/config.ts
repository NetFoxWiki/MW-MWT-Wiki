import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'MW & MWT 文档',
	head: [
		['link', { rel: 'icon', href: './favicon.ico' }],
	],
	theme,
	plugins: [
		registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
		redirectPlugin({
			hostname: "https://mwdocs.info",
			config: {
				//
			},
		}),
		removePWAPlugin({
		}),
		searchProPlugin({
			indexContent: true,
			autoSuggestions: true,
			worker: "docs-search.worker.js",
		}),
	],
});