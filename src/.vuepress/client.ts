import { defineClientConfig } from "@vuepress/client";
//import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";

export default defineClientConfig({
/*setup() {
    setupRunningTimeFooter(
      new Date("2023-05-01"),
      {
        "/zh-hans/": "开站至今已有 :day 天 :hour 小时 :minute 分钟 :second 秒",
        "/zh-hant/": "開站至今已有 :day 天 :hour 小時 :minute 分鐘 :second 秒",
      },
      true,
    );
  },*/
});