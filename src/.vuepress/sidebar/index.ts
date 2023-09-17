import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
	"/": [
		{
			text: "你好，舰长",
			link: 'GO.md',
			icon: "state",
		},
		{
			text: "问题引导",
			link: 'JC.md',
			icon: "result",
		},
		{
			text: '发布页面',
			icon: "code",
			collapsible: true,
			children: [
				'demo/info.md',
				'demo/cook/',
				'demo/markdown/',
				'demo/cook/emoji/',
			],
		},
		/*{
			text: "玩家问答",
			link: 'fqa.md',
			icon: "network",
		},*/
		{
			text: '游戏下载',
			icon: "play",
			collapsible: true,
			children: [
				'ZG.md',
				'sys.md',
				'PC.md',
				'mod.md',
			],
		},
		{
			text: '账号注册',
			icon: "geometry",
			collapsible: true,
			children: [
				'Google.md',
			],
		},
		{
			text: '常用解惑',
			icon: "context",
			collapsible: true,
			children: [
				'CYCT.md',
				'Game.md',
			],
		},
		{
			text: '官方解惑',
			icon: "advance",
			collapsible: true,
			children: [
				'ZH.md',
				'ZY.md',
				'ZB.md',
				'BS.md',
				'WF.md',
				'ZD.md',
				'SC.md',
				'JD.md',
				'YJ.md',
				'BP.md',
				'LT.md',
				'SD.md',
				'QT.md',
			],
		},
		{
			text: '官方文章',
			icon: "computer",
			collapsible: true,
			children: [
				'apkxa.md',
			],
		},
		{
			text: '游戏收录',
			icon: "folder",
			collapsible: true,
			children: [
				'mw68.md',
				'mw70.md',
				'ctto.md',
				'cn.md',
				'pan.md',
				'EGG.md',
				'news.md',
				'LJ.md',
				'musk.md',
				'ct.md',
				//'MWben.md',
			],
		},
		{
			text: '通用收录',
			icon: "box",
			collapsible: true,
			children: [
				'SMS.md',
				'qnsj.md',
			],
		},

		//'yuan.md',
		{
			text: '关于本站',
			icon: "selection",
			collapsible: true,
			children: [
				'YS.md',
				'UP.md',
				'DE.md',
				'md.md',
				//'ZS.md',
			],
		},
		//'APP.md',
		//'Log.md',
	],
});
