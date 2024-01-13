import { navbar } from "vuepress-theme-hope";

export const zhhantNavbar = navbar([
  { text: "主頁", icon: "return", link: "/" },
  {
    text: "聯繫我們",
    icon: "blog",
    children: [
      { text: "B站", icon: "at", link: "https://space.bilibili.com/1093209533" },
      { text: "QQ", icon: "light", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260" },
    ],
  },
  {
    text: "友情連結",
    icon: "link",
    children: [
      { text: "艦隊導航", icon: "navigation",link: "http://www.sss9.top/" },
    ],
  },
  {
    text: "國區社區",
    icon: "flow",
    children: [
      {
        text: "現代戰艦前沿新聞",
        children: [
          { text: "QQ群組", icon: "repo", link: "https://qm.qq.com/q/JqVFw6yogI" },
        ],
      },
      {
        text: "現代戰艦官方社區",
        children: [
          { text: "QQ頻道", icon: "define", link: "https://pd.qq.com/s/f0oylihze" },
        ],
      },
      {
        text: "現代戰艦玩家社區",
        children: [
          { text: "QQ頻道", icon: "blog", link: "https://pd.qq.com/s/8otd5z76x" },
        ],
      },
    ],
  },
]);
