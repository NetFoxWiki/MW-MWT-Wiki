import { sidebar } from "vuepress-theme-hope";

export const zhCNSidebar = sidebar([
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
				text: "游戏反馈",
				link: 'https://mw.live/support',
				icon: "debug",
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
				link: 'zh-CN/mw/mw-press.md',
				icon: "license",
			},
			{
				text: '游戏下载',
				icon: "play",
				collapsible: true,
				children: [
					'zh-CN/mw/download/app.md',
					'zh-CN/mw/download/zg.md',
					'zh-CN/mw/download/sys.md',
					'zh-CN/mw/download/pc.md',
					'zh-CN/mw/download/mod.md',
				],
			},
			{
				text: '游戏攻略',
				icon: "repo",
				collapsible: true,
				children: [
					'zh-CN/mw/skills/stan-bilibili.md',
					'zh-CN/mw/skills/cyct.md',
					'zh-CN/mw/skills/x51.md',
					'zh-CN/mw/skills/game.md',
					'zh-CN/mw/skills/mom.md',
					'zh-CN/mw/skills/mw-rules.md',
				],
			},
			{
				text: '游戏收录',
				icon: "folder",
				collapsible: true,
				children: [
					'zh-CN/mw/collection/game-modes.md',
					'zh-CN/mw/collection/events-less.md',
					'zh-CN/mw/collection/musk.md',
					'zh-CN/mw/collection/mwben.md',
					'zh-CN/mw/collection/market.md',
					'zh-CN/mw/collection/mw77.md',
					'zh-CN/mw/collection/mw70.md',
					'zh-CN/mw/collection/mw68.md',
					'zh-CN/mw/collection/cn-warships.md',
					'zh-CN/mw/collection/pan.md',
					'zh-CN/mw/collection/egg.md',
					'zh-CN/mw/collection/news.md',
					'zh-CN/mw/collection/lj.md',
					//赛事区
					'zh-CN/mw/collection/ct.md',
					'zh-CN/mw/collection/ctto.md',
					'zh-CN/mw/collection/cn.md',

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
					'zh-CN/mw/official/bp.md',
					'zh-CN/mw/official/zh.md',
					'zh-CN/mw/official/zy.md',
					'zh-CN/mw/official/zb.md',
					'zh-CN/mw/official/bs.md',
					'zh-CN/mw/official/wf.md',
					'zh-CN/mw/official/zd.md',
					'zh-CN/mw/official/sc.md',
					'zh-CN/mw/official/jd.md',
					'zh-CN/mw/official/yj.md',
					'zh-CN/mw/official/lt.md',
					'zh-CN/mw/official/sd.md',
					'zh-CN/mw/official/qt.md',
				],
			},
			{
				text: '网站专栏',
				icon: "type",
				collapsible: true,
				children: [
					{
						text: '部分飞行器现实原型收录 [持续更新]',
						collapsible: true,
						children: [
							'zh-CN/mw/column/realitymw/bomber.md',
							'zh-CN/mw/column/realitymw/fighter.md',
							'zh-CN/mw/column/realitymw/uav.md',
							'zh-CN/mw/column/realitymw/helicopter.md',
							'zh-CN/mw/column/realitymw/strike-fighters.md',
						],
					},
					{
						text: '部分舰艇现实原型收录 [持续更新]',
						collapsible: true,
						children: [
							'zh-CN/mw/column/realitymw2/cruiser.md',
        'zh-CN/mw/column/realitymw2/destroyer.md',
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
			'zh-CN/account/google.md',
			'zh-CN/account/ios.md',
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
		],
	},
	{
		text: '衍生项目',
		icon: "branch",
		collapsible: true,
		children: [
			{ text: 'MW 网站集成', link: 'https://docs.mwdocs.info/mwapp.html' },
			{ text: '现代战舰资料卡生成', link: 'https://mwapp.mwdocs.info/mw-card/' },
		],
	},
	{
		text: '关于本站',
		icon: "copyright",
		collapsible: true,
		children: [
			{
				text: "网站反馈",
				link: 'https://docs.qq.com/form/page/DUFBXekFaUFZFSWJQ',
			},
			//'YS.md',
			'zh-CN/up.md',
			'zh-CN/de.md',
			'zh-CN/sitehelp.md',
			'zh-CN/md.md',
			//'ZS.md',
		],
	},
]);
