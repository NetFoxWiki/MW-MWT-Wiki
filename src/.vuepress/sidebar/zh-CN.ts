import { sidebar } from "vuepress-theme-hope";

export const zhCNSidebar = sidebar([
	{
		text: "欢迎来到 MW & MWT 文档",
		link: 'zh/index.md',
		icon: "home",
	},
	{
		text: 'MW丨现代战舰',
		icon: "tag",
		link: 'zh/mw/index.md',
		collapsible: true,
		children: [
			{
				text: "你好，舰长！",
				link: 'zh/mw/index.md',
				icon: "home",
			},
			{
				text: "游戏反馈",
				link: 'https://mw.live/support',
				icon: "debug",
			},
			{
				text: "关于游戏",
				link: 'zh/mw/game-info.md',
				icon: "hot",
			},
			/*{
				text: "玩家美术",
				link: 'drawing.md',
				icon: "selection",
			},*/
			{
				text: "创作者计划",
				link: 'zh/mw/mw-press.md',
				icon: "license",
			},
			{
				text: '游戏下载',
				icon: "play",
				collapsible: true,
				children: [
					'zh/mw/download/app.md',
					'zh/mw/download/zg.md',
					'zh/mw/download/sys.md',
					'zh/mw/download/pc.md',
					'zh/mw/download/mod.md',
				],
			},
			{
				text: '游戏攻略',
				icon: "repo",
				collapsible: true,
				children: [
					'zh/mw/skills/stan-bilibili.md',
					'zh/mw/skills/cyct.md',
					'zh/mw/skills/x51.md',
					'zh/mw/skills/game.md',
					'zh/mw/skills/mom.md',
					'zh/mw/skills/mw-rules.md',
				],
			},
			{
				text: '游戏收录',
				icon: "folder",
				collapsible: true,
				children: [
					'zh/mw/collection/game-modes.md',
					'zh/mw/collection/events-less.md',
					'zh/mw/collection/musk.md',
					'zh/mw/collection/mwben.md',
					'zh/mw/collection/market.md',
					'zh/mw/collection/mw78.md',
					'zh/mw/collection/mw77.md',
					'zh/mw/collection/mw70.md',
					'zh/mw/collection/mw68.md',
					'zh/mw/collection/cn-warships.md',
					'zh/mw/collection/pan.md',
					'zh/mw/collection/egg.md',
					'zh/mw/collection/news.md',
					'zh/mw/collection/lj.md',
					//赛事区
					'zh/mw/collection/ct.md',
					'zh/mw/collection/ctto.md',
					'zh/mw/collection/cn.md',

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
					'zh/mw/official/bp.md',
					'zh/mw/official/zh.md',
					'zh/mw/official/zy.md',
					'zh/mw/official/zb.md',
					'zh/mw/official/bs.md',
					'zh/mw/official/wf.md',
					'zh/mw/official/zd.md',
					'zh/mw/official/sc.md',
					'zh/mw/official/jd.md',
					'zh/mw/official/yj.md',
					'zh/mw/official/lt.md',
					'zh/mw/official/sd.md',
					'zh/mw/official/qt.md',
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
							'zh/mw/column/realitymw/bomber.md',
							'zh/mw/column/realitymw/fighter.md',
							'zh/mw/column/realitymw/uav.md',
							'zh/mw/column/realitymw/helicopter.md',
							'zh/mw/column/realitymw/strike-fighters.md',
						],
					},
					{
						text: '部分舰艇现实原型收录 [持续更新]',
						collapsible: true,
						children: [
							'zh/mw/column/realitymw2/cruiser.md',
        'zh/mw/column/realitymw2/destroyer.md',
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
		link: 'zh/mwt/index.md',
		collapsible: true,
		children: [
			{
				text: '你好，指挥官！',
				link: 'zh/mwt/index.md',
				icon: "home",
			},
			{
				text: '关于游戏-前瞻',
				link: 'zh/mwt/game-info.md',
				icon: "hot",
			},
		],
	},
	{
		text: '账号注册',
		icon: "geometry",
		collapsible: true,
		children: [
			'zh/account/google.md',
			'zh/account/ios.md',
			'zh/account/apkxa.md',
		],
	},
	{
		text: "资源中心",
		link: 'zh/assets.md',
		icon: "flex",
	},
	{
		text: '发布页面',
		icon: "code",
		link: 'zh/markdown/index.html',
		collapsible: true,
		children: [
			'zh/markdown/index.md',
			'zh/markdown/other/index.md',
		],
	},
	{
		text: '衍生项目',
		icon: "branch",
		collapsible: true,
		children: [
			{ text: 'MW 网站集成', link: 'https://docs.mwdocs.info/mwapp.html' },
			{ text: '现代战舰资料卡生成', link: 'https://mwapp.mwdocs.info/mw-card/' },
			{ text: '现代战舰资料卡生成v2 [推荐]', link: 'https://mwapp.mwdocs.info/mw-card/v2' },
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
			'zh/up.md',
			'zh/de.md',
			'zh/sitehelp.md',
			'zh/md.md',
			//'ZS.md',
		],
	},
]);
