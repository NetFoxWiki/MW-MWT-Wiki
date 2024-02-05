import { sidebar } from "vuepress-theme-hope";

export const zhhantSidebar = sidebar([
	{
		text: 'MW丨現代戰艦',
		icon: "tag",
		link: 'zh-hant/index.md',
		collapsible: true,
		children: [
			{
				text: "你好，艦長！",
				link: 'zh-hant/index.md',
				icon: "home",
			},
			{
				text: "關於遊戲",
				link: 'zh-hant/game-info.md',
				icon: "hot",
			},
			/*{
				text: "玩家美术",
				link: 'drawing.md',
				icon: "selection",
			},*/
			{
				text: "創作者團隊",
				link: 'zh-hant/MW-Press.md',
				icon: "license",
			},
			{
				text: '遊戲下載',
				icon: "play",
				collapsible: true,
				children: [
					'zh-hant/app.md',
					'zh-hant/ZG.md',
					'zh-hant/sys.md',
					'zh-hant/PC.md',
					'zh-hant/mod.md',
				],
			},
			{
				text: '遊戲攻略',
				icon: "repo",
				collapsible: true,
				children: [
					'zh-hant/X51.md',
					'zh-hant/Game.md',
					'zh-hant/STAN-Bilibili.md',
					'zh-hant/CYCT.md',
					'zh-hant/mw-rules.md',
				],
			},
			{
				text: '遊戲收錄',
				icon: "folder",
				collapsible: true,
				children: [
					'zh-hant/Market.md',
					'zh-hant/cn.md',
					'zh-hant/mw68.md',
					'zh-hant/mw70.md',
					'zh-hant/ctto.md',
					'zh-hant/pan.md',
					'zh-hant/EGG.md',
					'zh-hant/news.md',
					'zh-hant/LJ.md',
					'zh-hant/musk.md',
					'zh-hant/ct.md',
					//'MW-Press.md',
					//'MWben.md',
				],
			},
			/*{
				text: "玩家问答",
				link: 'fqa.md',
				icon: "network",
			},*/
			{
				text: '官方解惑',
				icon: "advance",
				collapsible: true,
				children: [
					'zh-hant/ZH.md',
					'zh-hant/ZY.md',
					'zh-hant/ZB.md',
					'zh-hant/BS.md',
					'zh-hant/WF.md',
					'zh-hant/ZD.md',
					'zh-hant/SC.md',
					'zh-hant/JD.md',
					'zh-hant/YJ.md',
					'zh-hant/BP.md',
					'zh-hant/LT.md',
					'zh-hant/SD.md',
					'zh-hant/QT.md',
				],
			},
			{
				text: '帳號註冊',
				icon: "geometry",
				collapsible: true,
				children: [
					'zh-hant/Google.md',
				],
			},
			{
				text: '官方文章',
				icon: "computer",
				collapsible: true,
				children: [
					'zh-hant/apkxa.md',
				],
			},
			/*{
				text: '通用收录',
				icon: "box",
				collapsible: true,
				children: [
					'SMS.md',
					'qnsj.md',
				],
			},*/
			//'yuan.md',
			//'APP.md',
			//'Log.md',
		],
	},
	{
		text: 'MWT丨現代戰爭：坦克',
		icon: "tag",
		link: 'zh-hant/mwt/',
		collapsible: true,
		children: [
			{
				text: '你好，指揮官！',
				link: 'zh-hant/mwt/',
				icon: "home",
			},
		],
	},
	{
		text: "資源中心",
		link: 'zh-hant/assets.md',
		icon: "flex",
	},
	{
		text: '發佈頁面',
		icon: "code",
		link: 'zh-hant/demo/info.html',
		collapsible: true,
		children: [
			'zh-hant/demo/info.md',
			'zh-hant/demo/cook/',
			{
				text: 'Emoji 清單',
				collapsible: true,
				children: [
					'zh-hant/demo/cook/emoji/object.md',
					'zh-hant/demo/cook/emoji/place.md',
					'zh-hant/demo/cook/emoji/symbol.md',
					'zh-hant/demo/cook/emoji/nature.md',
					'zh-hant/demo/cook/emoji/people.md',
				],
			},
		],
	},
	{
		text: '關於本站',
		icon: "selection",
		collapsible: true,
		children: [
			//'YS.md',
			'zh-hant/UP.md',
			'zh-hant/DE.md',
			'zh-hant/sitehelp.md',
			'zh-hant/md.md',
			//'ZS.md',
		],
	},
]);
