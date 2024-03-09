import { sidebar } from "vuepress-theme-hope";

export const zhCNSidebar = sidebar([
	{
		text: "欢迎来到 MW & MWT 文档",
		link: 'zh-cn/index.md',
		icon: "home",
	},
	{
		text: 'MW丨现代战舰',
		icon: "tag",
		link: 'zh-cn/mw/index.md',
		collapsible: true,
		children: [
			{
				text: "你好，舰长！",
				link: 'zh-cn/mw/index.md',
				icon: "home",
			},
			{
				text: "游戏反馈",
				link: 'https://mw.live/support',
				icon: "debug",
			},
			{
				text: "关于游戏",
				link: 'zh-cn/mw/game-info.md',
				icon: "hot",
			},
			/*{
				text: "玩家美术",
				link: 'drawing.md',
				icon: "selection",
			},*/
			{
				text: "创作者计划",
				link: 'zh-cn/mw/mw-press.md',
				icon: "license",
			},
			{
				text: '游戏下载',
				icon: "play",
				collapsible: true,
				children: [
					'zh-cn/mw/download/app.md',
					'zh-cn/mw/download/zg.md',
					'zh-cn/mw/download/sys.md',
					'zh-cn/mw/download/pc.md',
					'zh-cn/mw/download/mod.md',
				],
			},
			{
				text: '游戏攻略',
				icon: "repo",
				collapsible: true,
				children: [
					'zh-cn/mw/skills/stan-bilibili.md',
					'zh-cn/mw/skills/cyct.md',
					'zh-cn/mw/skills/x51.md',
					'zh-cn/mw/skills/game.md',
					'zh-cn/mw/skills/mom.md',
					'zh-cn/mw/skills/mw-rules.md',
				],
			},
			{
				text: '游戏收录',
				icon: "folder",
				collapsible: true,
				children: [
					'zh-cn/mw/collection/game-modes.md',
					'zh-cn/mw/collection/events-less.md',
					'zh-cn/mw/collection/musk.md',
					'zh-cn/mw/collection/mwben.md',
					'zh-cn/mw/collection/market.md',
					'zh-cn/mw/collection/mw77.md',
					'zh-cn/mw/collection/mw70.md',
					'zh-cn/mw/collection/mw68.md',
					'zh-cn/mw/collection/cn-warships.md',
					'zh-cn/mw/collection/pan.md',
					'zh-cn/mw/collection/egg.md',
					'zh-cn/mw/collection/news.md',
					'zh-cn/mw/collection/lj.md',
					//赛事区
					'zh-cn/mw/collection/ct.md',
					'zh-cn/mw/collection/ctto.md',
					'zh-cn/mw/collection/cn.md',

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
					'zh-cn/mw/official/bp.md',
					'zh-cn/mw/official/zh.md',
					'zh-cn/mw/official/zy.md',
					'zh-cn/mw/official/zb.md',
					'zh-cn/mw/official/bs.md',
					'zh-cn/mw/official/wf.md',
					'zh-cn/mw/official/zd.md',
					'zh-cn/mw/official/sc.md',
					'zh-cn/mw/official/jd.md',
					'zh-cn/mw/official/yj.md',
					'zh-cn/mw/official/lt.md',
					'zh-cn/mw/official/sd.md',
					'zh-cn/mw/official/qt.md',
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
							'zh-cn/mw/column/realitymw/bomber.md',
							'zh-cn/mw/column/realitymw/fighter.md',
							'zh-cn/mw/column/realitymw/uav.md',
							'zh-cn/mw/column/realitymw/helicopter.md',
							'zh-cn/mw/column/realitymw/strike-fighters.md',
						],
					},
					{
						text: '部分舰艇现实原型收录 [持续更新]',
						collapsible: true,
						children: [
							'zh-cn/mw/column/realitymw2/cruiser.md',
        'zh-cn/mw/column/realitymw2/destroyer.md',
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
		link: 'zh-cn/mwt/index.md',
		collapsible: true,
		children: [
			{
				text: '你好，指挥官！',
				link: 'zh-cn/mwt/index.md',
				icon: "home",
			},
		],
	},
	{
		text: '账号注册',
		icon: "geometry",
		collapsible: true,
		children: [
			'zh-cn/account/google.md',
			'zh-cn/account/ios.md',
			'zh-cn/account/apkxa.md',
		],
	},
	{
		text: "资源中心",
		link: 'zh-cn/assets.md',
		icon: "flex",
	},
	{
		text: '发布页面',
		icon: "code",
		link: 'zh-cn/markdown/index.html',
		collapsible: true,
		children: [
			'zh-cn/markdown/index.md',
			'zh-cn/markdown/other/index.md',
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
			'zh-cn/up.md',
			'zh-cn/de.md',
			'zh-cn/sitehelp.md',
			'zh-cn/md.md',
			//'ZS.md',
		],
	},
]);
