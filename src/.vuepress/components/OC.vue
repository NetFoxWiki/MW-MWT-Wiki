<script>
import IconV from './icon/IconV.vue';

export default {
    props: {
        OcID: '',
        OcDesc: '',
    },
    components: {
        IconV,
    },
    data() {
        return {
            OcText: '',
            OcType: ['高质内容', '实用内容', '整活内容', '扫盲内容'],
        }
    },
}
</script>

<template>
    <div class="oc-root">
        <div class="oc-main">
            <div class="oc-logo">
                <IconV width="45px" />
            </div>
            <div>
                <div class="oc-text">{{ OcText = OcType[OcID] }}认证 - {{ OcDesc }}</div>
                <div class="oc-text-d">
                    <router-link class="oc-text-link" to="/zh/sitehelp.html#如何为自己的页面获得认证">如何为自己的页面获得认证</router-link>
                    <router-link class="oc-text-link" to="/zh/sitehelp.html#认证有什么用">认证有什么用</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.oc-main {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px var(--theme-color-light);
    border-radius: 5px;
    border: 2px var(--theme-color-dark) solid;
    padding: 2px 5px 5px 5px;
    margin: 10px 0;
}

.oc-logo {
    padding-top: 9px;
    margin: 0 5px;
}

.oc-text {
    font-size: 25px;
    font-weight: bold;
}

@media (max-width: 400px) {
    .oc-text {
        font-size: 20px;
        font-weight: bold;
    }
}

@media (max-width: 320px) {
    .oc-text {
        font-size: 15px;
    }
}

.oc-text-d {
    display: inline-flex;
}

.oc-text-link {
    font-size: 15px;
    margin: 0 5px 0 0;
    text-decoration: none !important;
}

.oc-text-link:hover {
    font-weight: bold;
}
</style>