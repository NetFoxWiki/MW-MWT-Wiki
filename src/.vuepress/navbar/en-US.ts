import { navbar } from "vuepress-theme-hope";

export const enUSNavbar = navbar([
  {
    text: "Contact Us",
    icon: "blog",
    children: [
      {
        text: "Contact/Discussion/Cooperation",
        children: [
          { text: "Fanbook", icon: "repo", link: "https://in.fanbook.cn/DeIe6FCe" },
          { text: "Bilibili", icon: "at", link: "https://space.bilibili.com/1093209533" },
          { text: "QQ Groups", icon: "light", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260" },
        ],
      },
      {
        text: "Site Support",
        children: [
          { text: "Apply for editing", icon: "editor", link: "https://docs.qq.com/form/page/DUEJaclBuQ1N3SGtn" },
          { text: "Site Feedback", icon: "debug", link: "https://docs.qq.com/form/page/DUFBXekFaUFZFSWJQ" },
          { text: "Sponsored Sites", icon: "mark", link: "https://afdian.net/a/netfoxqwq" },
        ],
      },
    ],
  },
]);
