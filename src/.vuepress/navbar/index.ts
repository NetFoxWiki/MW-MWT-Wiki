import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  { text: "首页", icon: "return", link: "/" },
  {
    text: "联系我们",
    icon: "blog",
    children: [
      { text: "文档B站", icon: "at", link: "https://space.bilibili.com/1093209533" },
      { text: "文档QQ群", icon: "light", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260" },
    ],
  },
  {
    text: "友情链接",
    icon: "link",
    children: [
      { text: "舰队导航", icon: "navigation",link: "http://www.sss9.top/" },
    ],
  },
  {
    text: "国区社区",
    icon: "flow",
    children: [
      {
        text: "Glory 超玩会",
        children: [
          { text: "QQ群组", icon: "selection", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=5YqFCMDBGX6u-iBmS9VASlDfR4xevaip&authKey=hg%2FmXhVLASLb36LUyBDKOi7Nc8GtzsCNul3zw6Q8xgXio%2Fs4yQo1%2BLRCTFYtiqmB&noverify=0&group_code=473298446" },
        ],
      },
      {
        text: "现代战舰前沿新闻",
        children: [
          { text: "QQ群组", icon: "repo", link: "https://qm.qq.com/q/JqVFw6yogI" },
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
