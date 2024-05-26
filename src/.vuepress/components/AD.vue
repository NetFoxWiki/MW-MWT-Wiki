<script setup lang="ts">
import NetFoxWiki from "vuepress-theme-hope/modules/sidebar/components/Sidebar.js";
</script>

<template>
    <NetFoxWiki>
        <!--<template #top>
            <div class="logo">
                <img data-mode="darkmode-only" width="100%"
                    src="https://statics.netfox.wiki/20240504/retouch_2024050410472811.7sn0rcgvht.webp">
                <img data-mode="lightmode-only" width="100%"
                    src="https://statics.netfox.wiki/20240504/retouch_2024050410474193.54xkgznu5u.webp">
            </div>
        </template>-->
        <template #bottom>
            <div class="ad-main">
                <a href="https://pd.qq.com/s/h27dr0db3">
                    <img class="ad-banner" src="https://statics.netfox.wiki/20240512/channels4_banner.1zi2t75wov.webp">
                    <b class="ad-text">
                        MWT: Tank Battles 官方频道
                    </b>
                    <br>
                    <b class="ad-join">
                        点击加入
                    </b>
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
    box-shadow: 0 0 2px var(--theme-color);
    border-bottom: 10px var(--theme-color-dark) solid;
    border-radius: 5px;
    margin: -15px 10px 25px 10px;
    padding: 2px 2px 5px 2px;
    text-align: center;
}

.ad-text {
    color: var(--theme-color);
    font-size: 17px;
}

.ad-join {
    background-color: var(--theme-color);
    border-radius: 5px;
    padding: 1px;
    font-size: 20px;
    color: #ffffff;
}

.ad-main:hover {
    box-shadow: 0 0 5px var(--theme-color);
}

.ad-banner {
    width: 100%;
    border-radius: 5px;
}
</style>