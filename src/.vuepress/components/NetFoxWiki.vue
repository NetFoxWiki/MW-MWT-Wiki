<script setup lang="ts">
import NetFoxWiki from "vuepress-theme-hope/modules/sidebar/components/Sidebar.js";
</script>

<template>
    <NetFoxWiki>
        <template #top>
            <div class="logo">
                <img data-mode="darkmode-only" width="100%"
                    src="https://statics.netfox.wiki/20240504/retouch_2024050410472811.7sn0rcgvht.webp">
                <img data-mode="lightmode-only" width="100%"
                    src="https://statics.netfox.wiki/20240504/retouch_2024050410474193.54xkgznu5u.webp">
            </div>
        </template>
        <template #bottom>
            <div class="ad-main">
                <a href="https://pd.qq.com/s/h27dr0db3">
                    <img class="ad-banner" src="https://statics.netfox.wiki/20240512/channels4_banner.1zi2t75wov.webp">
                    <div class="ad-text">
                        <small><b>MWT: Tank Battles 官方QQ频道 - 点击加入</b></small>
                    </div>
                </a>
            </div>
        </template>
    </NetFoxWiki>
</template>

<style>
.logo {
    margin: 10px 10px -17px 10px;
}

.ad-main {
    margin: -15px 10px 25px 10px;
    text-align: center;
}

.ad-banner {
    width: 100%;
}

.ad-text:hover {
    background-color: #294167;
    color: #ffffff;
}

.ad-text {
    background-color: #bbd6e1;
    margin-top: -5px;
    color: #294167;
}
</style>