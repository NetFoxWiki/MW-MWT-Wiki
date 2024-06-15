import { sidebar } from "vuepress-theme-hope";

export const zhCNSidebar = sidebar([
	{
		text: "欢迎来到 MW & MWT 文档",
		link: 'zh/index.md',
		icon: "home",
	},
	{
		text: "全站目录",
		link: 'zh/catalog.md',
		icon: "bars",
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
				icon: "bug",
			},
			{
				text: "游戏信息",
				link: 'zh/mw/game-info.md',
				icon: "fire",
			},
			/*{
				text: "玩家美术",
				link: 'drawing.md',
				icon: "selection",
			},*/
			{
				text: "创作者计划",
				link: 'zh/mw/mw-press.md',
				icon: "closed-captioning",
			},
			{
				text: "游戏抽奖模拟[实验]",
				link: 'zh/mw/mw-game-lottery.md',
				icon: "bullseye",
			},
			{
				text: '游戏下载',
				icon: "play",
				prefix: "zh/mw/download/",
				collapsible: true,
				children: [
					'sys.md',
					'zg.md',
					'app.md',
					'pc.md',
					'mod.md',
				],
			},
			{
				text: '游戏攻略',
				icon: "trophy",
				prefix: "zh/mw/skills/",
				collapsible: true,
				children: [
					'stan-bilibili.md',
					'cyct.md',
					'x51.md',
					'game.md',
					'mom.md',
					'mw-rules.md',
				],
			},
			{
				text: '游戏收录',
				icon: "folder",
				prefix: "zh/mw/collection/",
				collapsible: true,
				children: [
					{
						text: '平衡日志区',
						icon: "anchor",
						prefix: "balance-log/",
						collapsible: true,
						children: [
							'mw80.md',
							'mw79.md',
							'mw78.md',
							'mw77.md',
							'mw70.md',
							'mw68.md',
						],
					},
					{
						text: '游戏赛事区',
						icon: "anchor",
						prefix: "tournament/",
						collapsible: true,
						children: [
							'ct.md',
							'ctto.md',
							'cn.md',
						],
					},
					'events-less.md',
					'musk.md',
					'game-modes.md',
					'egg.md',
					'news.md',
					'mwben.md',
					'lj.md',
					'market.md',
					'cn-warships.md',
					'pan.md',
					'dpm.md',
				],
			},
			/*{
				text: "玩家问答",
				link: 'fqa.md',
				icon: "network",
			},*/
			{
				text: '官方解惑',
				icon: "anchor",
				prefix: "zh/mw/official/",
				collapsible: true,
				children: [
					'bp.md',
					'zh.md',
					'zy.md',
					'zb.md',
					'bs.md',
					'wf.md',
					'zd.md',
					'sc.md',
					'jd.md',
					'yj.md',
					'lt.md',
					'sd.md',
					'qt.md',
				],
			},
			{
				text: '网站专栏',
				icon: "award",
				collapsible: true,
				children: [
					{
						text: '部分舰艇现实原型收录',
						icon: "anchor",
						prefix: "zh/mw/column/realitymw2/",
						collapsible: true,
						children: [
							'cruiser.md',
							'destroyer.md',
						],
					},
					{
						text: '部分飞行器现实原型收录',
						icon: "anchor",
						prefix: "zh/mw/column/realitymw/",
						collapsible: true,
						children: [
							'bomber.md',
							'fighter.md',
							'uav.md',
							'helicopter.md',
							'strike-fighters.md',
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
				icon: "fire",
			},
			{
				text: '游戏收录',
				icon: "folder",
				prefix: "zh/mwt/collection/",
				collapsible: true,
				children: [
					'link.md',
				],
			},
		],
	},
	{
		text: '账号注册',
		icon: "users-rectangle",
		prefix: "zh/account/",
		collapsible: true,
		children: [
			'google.md',
			'ios.md',
			//'twitch.md',
			'apkxa.md',
		],
	},
	{
		text: "资源中心",
		link: 'zh/assets.md',
		icon: "compass",
	},
	{
		text: '发布页面',
		icon: "code",
		link: 'zh/markdown/index.html',
		prefix: "zh/markdown/",
		collapsible: true,
		children: [
			'index.md',
			'other/index.md',
		],
	},
	{
		text: '衍生项目',
		icon: "code-branch",
		collapsible: true,
		children: [
			'zh/branch/mw-card/index.md',
			{ text: '现代战舰资料卡生成', link: 'https://mwapp.netfox.wiki/mw-card/' },
			{ text: '现代战舰资料卡生成 v2 [推荐]', link: 'https://mwapp.netfox.wiki/mw-card/v2' },
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
	//{ text: 'NetFox.Wiki',icon: "define", link: 'zh/netfox.wiki.md' },
]);
