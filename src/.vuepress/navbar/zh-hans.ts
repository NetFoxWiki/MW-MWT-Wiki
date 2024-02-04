import { navbar } from "vuepress-theme-hope";

export const zhhansNavbar = navbar([
  {
    text: "联系我们",
    icon: "blog",
    children: [
      { text: "B站", icon: "at", link: "https://space.bilibili.com/1093209533" },
      { text: "QQ", icon: "light", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260" },
	  { text: "申请编辑", icon: "editor", link: "https://docs.qq.com/form/page/DUEJaclBuQ1N3SGtn" },
	],
  },
  {
    text: "国区社区",
    icon: "flow",
    children: [
      {
        text: "现代战舰前沿新闻",
        children: [
          { text: "QQ群组", icon: "repo", link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wOQ2uH3_2YaXwM_aBAepGBfRTNPEwGjp&authKey=kcKqka8bkrpLWyhk%2BA2MNGZBgrmdNP8l6fDkUP%2FkbG5bLUEsQ5VsJ6sF5wVy1OGf&noverify=0&group_code=480946659" },
        ],
      },
      {
        text: "现代战舰官方社区",
        children: [
          { text: "QQ频道", icon: "define", link: "https://pd.qq.com/s/f0oylihze" },
        ],
      },
      {
        text: "现代战舰玩家社区",
        children: [
          { text: "QQ频道", icon: "blog", link: "https://pd.qq.com/s/8otd5z76x" },
        ],
      },
    ],
  },
]);
