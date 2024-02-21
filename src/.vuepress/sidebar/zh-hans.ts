import { sidebar } from "vuepress-theme-hope";

export const zhhansSidebar = sidebar([
	{
		text: "欢迎来到 MW & MWT 文档",
		link: 'zh-CN/index.md',
		icon: "home",
	},
	{
		text: 'MW丨现代战舰',
		icon: "tag",
		link: 'zh-CN/mw/index.md',
		collapsible: true,
		children: [
			{
				text: "你好，舰长！",
				link: 'zh-CN/mw/index.md',
				icon: "home",
			},
			{
				text: "关于游戏",
				link: 'zh-CN/mw/game-info.md',
				icon: "hot",
			},
			/*{
				text: "玩家美术",
				link: 'drawing.md',
				icon: "selection",
			},*/
			{
				text: "创作者计划",
				link: 'zh-CN/mw/MW-Press.md',
				icon: "license",
			},
			{
				text: '游戏下载',
				icon: "play",
				collapsible: true,
				children: [
					'zh-CN/mw/download/app.md',
					'zh-CN/mw/download/ZG.md',
					'zh-CN/mw/download/sys.md',
					'zh-CN/mw/download/PC.md',
					'zh-CN/mw/download/mod.md',
				],
			},
			{
				text: '游戏攻略',
				icon: "repo",
				collapsible: true,
				children: [
					'zh-CN/mw/skills/STAN-Bilibili.md',
					'zh-CN/mw/skills/CYCT.md',
					'zh-CN/mw/skills/X51.md',
					'zh-CN/mw/skills/Game.md',
					'zh-CN/mw/skills/MOM.md',
					'zh-CN/mw/skills/mw-rules.md',
				],
			},
			{
				text: '游戏收录',
				icon: "folder",
				collapsible: true,
				children: [
					'zh-CN/mw/collection/events-less.md',
					'zh-CN/mw/collection/musk.md',
					'zh-CN/mw/collection/Market.md',
					'zh-CN/mw/collection/mw70.md',
					'zh-CN/mw/collection/mw68.md',
					'zh-CN/mw/collection/pan.md',
					'zh-CN/mw/collection/EGG.md',
					'zh-CN/mw/collection/news.md',
					'zh-CN/mw/collection/LJ.md',
					//赛事区
					'zh-CN/mw/collection/ct.md',
					'zh-CN/mw/collection/ctto.md',
					'zh-CN/mw/collection/cn.md',
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
					'zh-CN/mw/official/BP.md',
					'zh-CN/mw/official/ZH.md',
					'zh-CN/mw/official/ZY.md',
					'zh-CN/mw/official/ZB.md',
					'zh-CN/mw/official/BS.md',
					'zh-CN/mw/official/WF.md',
					'zh-CN/mw/official/ZD.md',
					'zh-CN/mw/official/SC.md',
					'zh-CN/mw/official/JD.md',
					'zh-CN/mw/official/YJ.md',
					'zh-CN/mw/official/LT.md',
					'zh-CN/mw/official/SD.md',
					'zh-CN/mw/official/QT.md',
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
							'zh-CN/mw/column/bomber.md',
							'zh-CN/mw/column/fighter.md',
							'zh-CN/mw/column/UAV.md',
							'zh-CN/mw/column/helicopter.md',
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
		link: 'zh-CN/mwt/index.md',
		collapsible: true,
		children: [
			{
				text: '你好，指挥官！',
				link: 'zh-CN/mwt/index.md',
				icon: "home",
			},
		],
	},
	{
		text: '账号注册',
		icon: "geometry",
		collapsible: true,
		children: [
			'zh-CN/account/Google.md',
			'zh-CN/account/IOS.md',
			'zh-CN/account/apkxa.md',
		],
	},
	{
		text: "资源中心",
		link: 'zh-CN/assets.md',
		icon: "flex",
	},
	{
		text: '发布页面',
		icon: "code",
		link: 'zh-CN/markdown/index.html',
		collapsible: true,
		children: [
			'zh-CN/markdown/index.md',
			'zh-CN/markdown/other/index.md',
			{
				text: 'Emoji 列表',
				collapsible: true,
				children: [
					'zh-CN/markdown/other/emoji/object.md',
					'zh-CN/markdown/other/emoji/place.md',
					'zh-CN/markdown/other/emoji/symbol.md',
					'zh-CN/markdown/other/emoji/nature.md',
					'zh-CN/markdown/other/emoji/people.md',
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
			'zh-CN/about/UP.md',
			'zh-CN/about/DE.md',
			'zh-CN/about/sitehelp.md',
			'zh-CN/about/md.md',
			//'ZS.md',
		],
	},
]);
