import { navbar } from "vuepress-theme-hope";

export const zhCNNavbar = navbar([
  {
    text: "联系我们",
    icon: "handshake",
    children: [
      {
        text: "联系/讨论/合作",
        children: [
          //{ text: "Fanbook", icon: "repo", link: "https://in.fanbook.cn/DeIe6FCe" },
          { text: "QQ 群组", icon: "comment", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260" },
        ],
      },
      {
        text: "网站支持",
        children: [
          { text: "申请编辑", icon: "edit", link: "https://docs.qq.com/form/page/DUEJaclBuQ1N3SGtn" },
          { text: "网站反馈", icon: "bug", link: "https://docs.qq.com/form/page/DUFBXekFaUFZFSWJQ" },
          { text: "赞助网站", icon: "paper-plane", link: "https://afdian.net/a/netfoxqwq" },
        ],
      },
    ],
  },
  {
    text: "简中社区",
    icon: "comments",
    children: [
      {
        text: "MW 官方社区",
        children: [
          { text: "Bilibili", icon: "at", link: "https://space.bilibili.com/3493095125551784" },
          { text: "Fanbook", icon: "book", link: "https://in.fanbook.cn/m8XB6FN7" },
          { text: "QQ 频道", icon: "hashtag", link: "https://pd.qq.com/s/f0oylihze" },
        ],
      },
      {
        text: "MWT 官方社区",
        children: [
          { text: "QQ 频道", icon: "hashtag", link: "https://pd.qq.com/s/h27dr0db3" },
        ],
      },
    ],
  },
  {
		text: "全站目录",
		link: 'zh/catalog.md',
		icon: "bars",
	},
]);
