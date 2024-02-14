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
]);
