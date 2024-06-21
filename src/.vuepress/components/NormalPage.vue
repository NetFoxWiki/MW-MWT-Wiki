<script setup>
import Page from "vuepress-theme-hope/components/NormalPage.js";
import ClerkTool from "./ClerkTool.vue";
</script>

<template>
    <Page>
        <template #contentBefore>
            <div class="theme-hope-content">
                <div class="site-notice">
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
    </Page>
</template>

<style>
.site-h{
    font-size: 30px;
    color:#ffee00;
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