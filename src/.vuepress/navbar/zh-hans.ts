import { navbar } from "vuepress-theme-hope";

export const zhhansNavbar = navbar([
  {
    text: "联系我们",
    icon: "blog",
    children: [
      {
        text: "联系/讨论/合作",
        children: [
          { text: "Fanbook", icon: "repo", link: "https://in.fanbook.cn/DeIe6FCe" },
          { text: "Bilibili", icon: "at", link: "https://space.bilibili.com/1093209533" },
          { text: "QQ 群组", icon: "light", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260" },
        ],
      },
      {
        text: "网站支持",
        children: [
          { text: "网站社区", icon: "mark", link: "https://forum.mwdocs.info/" },
          { text: "申请编辑", icon: "editor", link: "https://docs.qq.com/form/page/DUEJaclBuQ1N3SGtn" },
          { text: "网站反馈", icon: "debug", link: "https://docs.qq.com/form/page/DUFBXekFaUFZFSWJQ" },
        ],
      },
    ],
  },
  {
    text: "国区社区",
    icon: "flow",
    children: [
      {
        text: "现代战舰官方社区",
        children: [
          { text: "Fanbook", icon: "repo", link: "https://in.fanbook.cn/m8XB6FN7" },
          { text: "QQ 频道", icon: "define", link: "https://pd.qq.com/s/f0oylihze" },
        ],
      },
    ],
  },
]);
