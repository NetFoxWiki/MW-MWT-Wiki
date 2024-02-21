import { sidebar } from "vuepress-theme-hope";

export const zhhansSidebar = sidebar([
	{
		text: "欢迎来到 MW & MWT 文档",
		link: 'zh-hans/index.md',
		icon: "home",
	},
	{
		text: 'MW丨现代战舰',
		icon: "tag",
		link: 'zh-hans/mw/index.md',
		collapsible: true,
		children: [
			{
				text: "你好，舰长！",
				link: 'zh-hans/mw/index.md',
				icon: "home",
			},
			{
				text: "关于游戏",
				link: 'zh-hans/mw/game-info.md',
				icon: "hot",
			},
			/*{
				text: "玩家美术",
				link: 'drawing.md',
				icon: "selection",
			},*/
			{
				text: "创作者计划",
				link: 'zh-hans/mw/MW-Press.md',
				icon: "license",
			},
			{
				text: '游戏下载',
				icon: "play",
				collapsible: true,
				children: [
					'zh-hans/mw/download/app.md',
					'zh-hans/mw/download/ZG.md',
					'zh-hans/mw/download/sys.md',
					'zh-hans/mw/download/PC.md',
					'zh-hans/mw/download/mod.md',
				],
			},
			{
				text: '游戏攻略',
				icon: "repo",
				collapsible: true,
				children: [
					'zh-hans/mw/skills/STAN-Bilibili.md',
					'zh-hans/mw/skills/CYCT.md',
					'zh-hans/mw/skills/X51.md',
					'zh-hans/mw/skills/Game.md',
					'zh-hans/mw/skills/MOM.md',
					'zh-hans/mw/skills/mw-rules.md',
				],
			},
			{
				text: '游戏收录',
				icon: "folder",
				collapsible: true,
				children: [
					'zh-hans/mw/collection/events-less.md',
					'zh-hans/mw/collection/musk.md',
					'zh-hans/mw/collection/Market.md',
					'zh-hans/mw/collection/mw70.md',
					'zh-hans/mw/collection/mw68.md',
					'zh-hans/mw/collection/pan.md',
					'zh-hans/mw/collection/EGG.md',
					'zh-hans/mw/collection/news.md',
					'zh-hans/mw/collection/LJ.md',
					//赛事区
					'zh-hans/mw/collection/ct.md',
					'zh-hans/mw/collection/ctto.md',
					'zh-hans/mw/collection/cn.md',
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
					'zh-hans/mw/official/BP.md',
					'zh-hans/mw/official/ZH.md',
					'zh-hans/mw/official/ZY.md',
					'zh-hans/mw/official/ZB.md',
					'zh-hans/mw/official/BS.md',
					'zh-hans/mw/official/WF.md',
					'zh-hans/mw/official/ZD.md',
					'zh-hans/mw/official/SC.md',
					'zh-hans/mw/official/JD.md',
					'zh-hans/mw/official/YJ.md',
					'zh-hans/mw/official/LT.md',
					'zh-hans/mw/official/SD.md',
					'zh-hans/mw/official/QT.md',
				],
			},
			{
				text: '网站专栏',
				icon: "type",
				collapsible: true,
				children: [
					{
						text: '部分武器现实原型收录【持续更新】',
						collapsible: true,
						children: [
							'zh-hans/mw/column/bomber.md',
							'zh-hans/mw/column/fighter.md',
							'zh-hans/mw/column/UAV.md',
							'zh-hans/mw/column/helicopter.md',
						],
					},
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
		link: 'zh-hans/mwt/index.md',
		collapsible: true,
		children: [
			{
				text: '你好，指挥官！',
				link: 'zh-hans/mwt/index.md',
				icon: "home",
			},
		],
	},
	{
		text: '账号注册',
		icon: "geometry",
		collapsible: true,
		children: [
			'zh-hans/account/Google.md',
			'zh-hans/account/IOS.md',
			'zh-hans/account/apkxa.md',
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
		link: 'zh-hans/markdown/index.html',
		collapsible: true,
		children: [
			'zh-hans/markdown/index.md',
			'zh-hans/markdown/other/index.md',
			{
				text: 'Emoji 列表',
				collapsible: true,
				children: [
					'zh-hans/markdown/other/emoji/object.md',
					'zh-hans/markdown/other/emoji/place.md',
					'zh-hans/markdown/other/emoji/symbol.md',
					'zh-hans/markdown/other/emoji/nature.md',
					'zh-hans/markdown/other/emoji/people.md',
				],
			},
		],
	},
	{
		text: '衍生项目',
		icon: "branch",
		collapsible: true,
		children: [
			{text: 'MW 网站集成', link: 'https://docs.mwdocs.info/mwapp.html'},
			{text: '现代战舰资料卡生成', link: 'https://mwapp.mwdocs.info/mw-card/'},
		],
	},
	{
		text: '关于本站',
		icon: "copyright",
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
