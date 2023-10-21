import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
{ text: "首页", icon: "return", link: "/"},
	{
        text: "联系&建议&贡献",
        icon: "network",
        children: [
          {
            text: "社区交流群",
            children: [
              { text: "加入社区", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=I_ROUWqbu7vHwWCtgD-JDlAIV6yzTrEk&authKey=TxK%2BKZLv4Aph%2FCCSbBWfqh1p%2BWIukBvWcTwR2A4gu9DnPWX%2B0kBPOqcAKbrStNsH&noverify=0&group_code=858040124"},
            ],
          },
        ],
      },
{
        text: "MW & MWT 文档",
        icon: "news",
        children: [
          {
            text: "现代战舰",
            children: [
              { text: "开始", link: "GO.html"},
            ],
          },
          {
            text: "现代战争：坦克",
            children: [
              { text: "切换", link: "./mwt"},
            ],
          },
        ],
      },
	  {
        text: "桌面版",
        icon: "windows",
        children: [
		{ text: "下载桌面版", link: "mwdocs-app.html"},
        { text: "Github", link: "https://github.com/Wakudocs/wakudocs.github.io/releases/tag/app"},
	  ],
      },
]);
