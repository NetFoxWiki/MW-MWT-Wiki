import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/bounce-icon.scss";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2023-05-01"),
      {
        "/": "本站在海上漂流了 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },
});
