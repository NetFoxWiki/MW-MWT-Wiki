import { sidebar } from "vuepress-theme-hope";

export const zhhansSidebar = sidebar([
	{
		text: 'MW丨现代战舰',
		icon: "tag",
		link: 'zh-hans/index.md',
		collapsible: true,
		children: [
			{
				text: "你好，舰长！",
				link: 'zh-hans/index.md',
				icon: "home",
			},
			{
				text: "关于游戏",
				link: 'zh-hans/game-info.md',
				icon: "hot",
			},
			/*{
				text: "玩家美术",
				link: 'drawing.md',
				icon: "selection",
			},*/
			{
				text: "创作者团队",
				link: 'zh-hans/MW-Press.md',
				icon: "license",
			},
			{
				text: '游戏下载',
				icon: "play",
				collapsible: true,
				children: [
				    'zh-hans/app.md',
					'zh-hans/ZG.md',
					'zh-hans/sys.md',
					'zh-hans/PC.md',
					'zh-hans/mod.md',
				],
			},
			{
				text: '游戏攻略',
				icon: "repo",
				collapsible: true,
				children: [
					'zh-hans/X51.md',
					'zh-hans/Game.md',
					'zh-hans/STAN-Bilibili.md',
					'zh-hans/CYCT.md',
					'zh-hans/mw-rules.md',
					'zh-hans/MOM.md',
				],
			},
			{
				text: '游戏收录',
				icon: "folder",
				collapsible: true,
				children: [
					'zh-hans/Market.md',
					'zh-hans/cn.md',
					'zh-hans/mw68.md',
					'zh-hans/mw70.md',
					'zh-hans/ctto.md',
					'zh-hans/pan.md',
					'zh-hans/EGG.md',
					'zh-hans/news.md',
					'zh-hans/LJ.md',
					'zh-hans/musk.md',
					'zh-hans/ct.md',
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
					'zh-hans/ZH.md',
					'zh-hans/ZY.md',
					'zh-hans/ZB.md',
					'zh-hans/BS.md',
					'zh-hans/WF.md',
					'zh-hans/ZD.md',
					'zh-hans/SC.md',
					'zh-hans/JD.md',
					'zh-hans/YJ.md',
					'zh-hans/BP.md',
					'zh-hans/LT.md',
					'zh-hans/SD.md',
					'zh-hans/QT.md',
				],
			},
			{
				text: '账号注册',
				icon: "geometry",
				collapsible: true,
				children: [
					'zh-hans/Google.md',
				],
			},
			{
				text: '官方文章',
				icon: "computer",
				collapsible: true,
				children: [
					'zh-hans/apkxa.md',
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
		text: 'MWT丨现代战争：坦克',
		icon: "tag",
		link: 'zh-hans/mwt/',
		collapsible: true,
		children: [
			{
				text: '你好，指挥官！',
				link: 'zh-hans/mwt/',
				icon: "home",
			},
		],
	},
	{
		text: "资源中心",
		link: 'zh-hans/assets.md',
		icon: "flex",
	},
	{
		text: '发布页面',
		icon: "code",
		link: 'zh-hans/demo/info.html',
		collapsible: true,
		children: [
			'zh-hans/demo/info.md',
			'zh-hans/demo/cook/',
			{
				text: 'Emoji 列表',
				collapsible: true,
				children: [
					'zh-hans/demo/cook/emoji/object.md',
					'zh-hans/demo/cook/emoji/place.md',
					'zh-hans/demo/cook/emoji/symbol.md',
					'zh-hans/demo/cook/emoji/nature.md',
					'zh-hans/demo/cook/emoji/people.md',
				],
			},
		],
	},
	{
		text: '关于本站',
		icon: "selection",
		collapsible: true,
		children: [
			//'YS.md',
			'zh-hans/UP.md',
			'zh-hans/DE.md',
			'zh-hans/sitehelp.md',
			'zh-hans/md.md',
			//'ZS.md',
		],
	},
]);
