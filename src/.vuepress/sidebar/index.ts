import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
	"/": [
		{
			text: 'MW丨现代战舰',
			icon: "tag",
			link: 'GO.md',
			collapsible: true,
			children: [
				{
					text: "你好，舰长！",
					link: 'GO.md',
					icon: "home",
				},
				{
					text: "关于游戏",
					link: 'game-info.md',
					icon: "hot",
				},
				/*{
					text: "玩家美术",
					link: 'drawing.md',
					icon: "selection",
				},*/
				{
					text: "创作者团队",
					link: 'MW-Press.md',
					icon: "license",
				},
				{
					text: '游戏下载',
					icon: "play",
					collapsible: true,
					children: [
						'ZG.md',
						'sys.md',
						'app.md',
						'PC.md',
						'mod.md',
					],
				},
				{
					text: '游戏攻略',
					icon: "repo",
					collapsible: true,
					children: [
						'STAN-Bilibili.md',
					],
				},
				/*{
					text: "玩家问答",
					link: 'fqa.md',
					icon: "network",
				},*/

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
						'mw-rules.md',
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
					text: '诗文精选',
					icon: "study",
					collapsible: true,
					children: [
						'J25.md',
						'H18.md',
					],
				},
				{
					text: '游戏收录',
					icon: "folder",
					collapsible: true,
					children: [
						'cn.md',
						'mw68.md',
						'mw70.md',
						'ctto.md',
						'pan.md',
						'EGG.md',
						'news.md',
						'LJ.md',
						'musk.md',
						'ct.md',
						//'MW-Press.md',
						//'MWben.md',
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
			link: 'mwt/',
			collapsible: true,
			children: [
				{
					text: '你好，指挥官！',
					link: 'mwt/',
					icon: "home",
				},
			],
		},
		{
					text: "资源中心",
					link: 'assets.md',
					icon: "flex",
		},
		{
			text: '发布页面',
			icon: "code",
			link: '/demo/info.html',
			collapsible: true,
			children: [
				'demo/info.md',
				'demo/cook/',
				{
					text: 'Emoji 列表',
					collapsible: true,
					children: [
						'demo/cook/emoji/object.md',
						'demo/cook/emoji/place.md',
						'demo/cook/emoji/symbol.md',
						'demo/cook/emoji/nature.md',
						'demo/cook/emoji/people.md',
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
				'UP.md',
				'DE.md',
				'sitehelp.md',
				'md.md',
				//'ZS.md',
			],
		},
	],
});
