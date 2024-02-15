import { navbar } from "vuepress-theme-hope";

export const zhhantNavbar = navbar([
  {
    text: "聯繫我們",
    icon: "blog",
    children: [
      { text: "Fanbook", icon: "repo", link: "https://in.fanbook.cn/DeIe6FCe" },
      { text: "Bilibili", icon: "at", link: "https://space.bilibili.com/1093209533" },
      { text: "QQ", icon: "light", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260" },
      { text: "社區", icon: "mark", link: "https://forum.mwdocs.info/" },
      { text: "申請編輯", icon: "editor", link: "https://docs.qq.com/form/page/DUEJaclBuQ1N3SGtn" },
    ],
  },
  {
    text: "國區社區",
    icon: "flow",
    children: [
      {
        text: "現代戰艦前沿新聞",
        children: [
          { text: "QQ群組", icon: "share", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wOQ2uH3_2YaXwM_aBAepGBfRTNPEwGjp&authKey=kcKqka8bkrpLWyhk%2BA2MNGZBgrmdNP8l6fDkUP%2FkbG5bLUEsQ5VsJ6sF5wVy1OGf&noverify=0&group_code=480946659" },
        ],
      },
      {
        text: "現代戰艦官方社區",
        children: [
          { text: "Fanbook", icon: "repo", link: "https://in.fanbook.cn/m8XB6FN7" },
          { text: "QQ頻道", icon: "define", link: "https://pd.qq.com/s/f0oylihze" },
        ],
      },
    ],
  },
]);
