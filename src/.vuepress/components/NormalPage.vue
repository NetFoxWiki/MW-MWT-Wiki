<script setup>
import 'animate.css';
import Page from "vuepress-theme-hope/components/NormalPage.js";
import ClerkTool from "./ClerkTool.vue";
import BuildVersion from './BuildVersion.vue';
</script>

<template>
    <Page>
        <template #contentBefore>
            <div class="theme-hope-content">
                <div class="site-notice animate__animated animate__flipInX">
                    <div class="site-h">温馨提示</div>
                    此网站因一些特殊的词汇与内容，使得目前本站只适用于中国地区的玩家，非中国地区的玩家浏览请做好准备工作
                </div>
                <div class="qq-main">
                    <div class="qq-logo">
                        <img src="https://statics.netfox.wiki/20240615/QQ.2krrs9cvwa.webp" no-view>
                    </div>
                    <div>
                        <b>加入项目开发群组，了解更多内容：</b>
                        <br>
                        1. 令人惊奇的想法，让人信服的建议
                        <br>
                        2. 和更多人交流游戏内容
                        <br><a
                            href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260">
                            点击加入
                        </a>
                    </div>
                </div>
                <ClerkTool />
            </div>
        </template>
        <template #bottom>
            <div class="theme-hope-content">
                <div class="b-notice">
                    <div class="b-notice-h">免责声明</div>
                    <div class="b-notice-b">
                        MW & MWT 文档 不对本站信息的完整性、可靠性和准确性提供任何保证
                        <br>
                        <br>本网站内容均为网络收集与自制，转载已标明出处，如需协商请发送邮箱
                        <br>
                        <br>本网站图片内容均已压缩，如需原图请误下载本站图片
                        <br>
                        <br>本网站与 Artstorm 或 Cube Software 或 Gaijin 或其任何子公司或附属公司没有附属、关联、授权、认可或以任何方式关联
                        <br>
                        <br>Modern Warships 或 MWT: Tank Battles 的名称以及任何相关名称、标志和图像均为其各自所有者的注册商标
                    </div>
                </div>
                <div class="cus-footer">
                    <BuildVersion />
                    <a class="cus-footer-item" target="_blank" href="https://netfox.wiki">
                        <img data-mode="darkmode-only" height="100%" width="240"
                            src="https://statics.netfox.wiki/20240504/retouch_2024050410472811.7sn0rcgvht.webp">
                        <img data-mode="lightmode-only" height="100%" width="240"
                            src="https://statics.netfox.wiki/20240504/retouch_2024050410474193.54xkgznu5u.webp">
                    </a>
                    <a class="cus-footer-item" href="https://www.netlify.com" target="_blank">
                        <img width="100" height="100%" src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                            alt="由 Netlify 部署" data-mode="lightmode-only">
                        <img width="100" height="100%" src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
                            alt="由 Netlify 部署" data-mode="darkmode-only">
                    </a>
                    <div class="cus-footer-c">
                        以文档的形式，记录 <font color="#2196F3">现代战舰</font> 与 <font color="#fb8b05">现代战争：坦克激斗</font> 内容的骨灰级游戏网站
                        🍂
                        <br>
                        Copyright © 2023-2024 <a href="https://mw.netfox.wiki">MW &
                            MWT 文档</a> by <font color="#fb8b05">NetFox.Wiki</font> All rights reserved.
                    </div>
                </div>
            </div>
        </template>
    </Page>
</template>

<style>
.cus-footer-item {
    margin: 0 2.5px;
}

.cus-footer-c {
    font-size: 13.5px;

}

.cus-footer {
    border-radius: 5px;
    border: 2px var(--theme-color-dark) solid;
    padding: 8px;
    margin: 10px 0;
    text-align: center;
}

.b-notice {
    border-radius: 5px;
    border: 2px var(--theme-color-dark) solid;
    padding: 8px;
    margin: 10px 0;
}

.b-notice-h {
    background-color: #ec261b;
    color: #ffffff;
    padding: 5px;
    font-weight: bold;
    font-size: 25px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 5px;
}

.b-notice-b {
    font-weight: bold;
    font-size: 15px;
}

.site-h {
    font-size: 30px;
    color: #ffee00;
}

.site-notice {
    background-color: #ec261b;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding: 5px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 0 10px #ec261b;
}

.qq-main {
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px var(--theme-color-light);
    border-radius: 5px;
    border: 2px var(--theme-color-dark) solid;
    padding: 10px;
    margin-bottom: 10px;
}

.qq-logo {
    height: 100%;
    background-color: var(--theme-color-light);
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;
}
</style>