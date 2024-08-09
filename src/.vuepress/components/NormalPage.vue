<script setup>
import Page from "vuepress-theme-hope/components/NormalPage.js";
//import ClerkTool from "./ClerkTool.vue";
import BuildVersion from './BuildVersion.vue';
import html2canvas from 'html2canvas';

async function savePicture() {
    await html2canvas(document.querySelector("#savepic"), {
        windowWidth: 600,
        scale: 2,
        useCORS: true,
    }).then(
        async function (canvas) {
            canvas = canvas.toDataURL("image/png", 1);
            document.getElementById("img").setAttribute("src", canvas);
            document.getElementById("img").setAttribute("class", "savepic-img");
        }
    );
}
</script>

<template>
    <Page id="savepic">
        <template #contentBefore>
            <div class="theme-hope-content">
                <div class="qq-main" data-html2canvas-ignore>
                    <div class="qq-logo">
                        <img src="https://statics.netfox.wiki/20240615/QQ.2krrs9cvwa.webp" no-view>
                    </div>
                    <div>
                        <b>加入项目开发群组，了解更多内容：</b>
                        <a
                            href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=O_uVziCfUhzQseq9rCrjxwayDJDffOo9&authKey=ervLfyvDdYRlPRA%2FLK7NStIJgj23OlOZ1SyGa3aOd1XMUmUEsbW7iRi7mfrELOLX&noverify=0&group_code=421836260">点击加入</a>
                    </div>
                </div>
                <div class="savepic-main" data-html2canvas-ignore>
                    <div class="savepic-h">生成此页截图</div>
                    <button @click="savePicture()" class="savepic-btn">
                        生成图片
                    </button>
                    <div class="b-notice-b">
                        1. 由于生成的图片为 Base64 字符串，随着页面内容的增加，生成图片时可能会出现页面卡顿等问题
                        <br>
                        2. 截图后的图片中，有些组件可能不会正常显示
                        <br>
                        3. 随着页面内容增加，图片生成时间也会增加
                        <br>
                        电脑端：右键图片保存
                        <br>
                        移动端：长按图片保存
                    </div>
                    <img id="img" src="" class="savepic-img-hid" no-view />
                </div>
                <!--<ClerkTool />-->
                <hr>
            </div>
        </template>
        <template #bottom>
            <div class="theme-hope-content">
                <hr>
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
                        <img data-mode="darkmode-only" height="100%" width="150"
                            src="https://statics.netfox.wiki/20240504/retouch_2024050410472811.7sn0rcgvht.webp">
                        <img data-mode="lightmode-only" height="100%" width="150"
                            src="https://statics.netfox.wiki/20240504/retouch_2024050410474193.54xkgznu5u.webp">
                    </a>
                    <div class="cus-footer-c">
                        以文档的形式，记录 <span style="color:#2196F3">现代战舰</span> 与 <span style="color:#fb8b05">现代战争：坦克激斗</span>
                        内容的骨灰级游戏网站 🍂
                        <br>
                        Copyright © 2023-2024 <a href="https://mw.netfox.wiki">MW &
                            MWT 文档</a> by <span style="color:#fb8b05">NetFox.Wiki</span> All rights reserved.
                    </div>
                </div>
            </div>
        </template>
    </Page>
</template>

<style>
.savepic-h {
    margin-top: -6px;
    font-size: 30px;
    font-weight: bold;
}

.savepic-main {
    border: 2px var(--theme-color) solid;
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0;
}

.savepic-btn {
    font-size: 25px;
    font-weight: bold;
    text-decoration: none !important;
    color: var(--theme-color);
    background-color: var(--theme-color-mask);
    border: none;
    padding: 3px 8px;
    border-radius: 5px;
    text-align: center;
}

.savepic-btn:hover {
    background-color: var(--theme-color);
    color: #fff;
}

.savepic-img {
    -webkit-user-drag: none;
    border-radius: 5px;
    width: 200px;
    border: 2px var(--theme-color-dark) solid;
}

.savepic-img-hid {
    display: none;
}

.cus-footer-item {
    margin: 0 2.5px;
}

.cus-footer-c {
    font-size: 13.5px;
}

.cus-footer {
    border-radius: 5px;
    border: 2px var(--theme-color-dark) solid;
    padding: 5px;
    margin: 10px 0;
    text-align: center;
}

.b-notice {
    border-radius: 5px;
    border: 2px var(--theme-color-dark) solid;
    padding: 4px;
    margin: 10px 0;
}

.b-notice-h {
    background-color: var(--theme-color-mask);
    color: var(--theme-color);
    padding: 3px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 3px;
}

.b-notice-b {
    font-weight: bold;
    font-size: 15px;
}

.qq-main {
    display: flex;
    align-items: center;
    font-size: 19px;
    border-radius: 5px;
    border: 2px var(--theme-color-dark) solid;
    padding: 3px;
}

.qq-logo {
    height: 100%;
    width: 20px;
    background-color: var(--theme-color-light);
    padding: 4px 3px 1px 3px;
    border-radius: 5px;
    margin-right: 5px;
}
</style>