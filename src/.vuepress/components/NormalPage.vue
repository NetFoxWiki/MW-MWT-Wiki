<script>
import Page from "vuepress-theme-hope/components/NormalPage.js";
import MWTSVG from "../components/icon/MWT.vue";

export default {
    components: {
        Page,
        MWTSVG,
    },
    data() {
        return {
            totalProgress: "???",
            targetTime: new Date('2024-4-15')
        }
    },
    methods: {
        calculateProgress() {
            const currentTime = new Date();
            const timeDiff = this.targetTime.getTime() - currentTime.getTime();
            const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
            this.totalProgress = Math.abs(daysDiff) * 2;
        }
    },
    mounted() {
        this.calculateProgress();
    },
    watch: {
        targetTime: 'calculateProgress'
    }
}
</script>

<template>
    <Page>
        <template #contentBefore>
            <div class="mwt-banner">
                <div class="mwt-banner-logo">
                    <MWTSVG />
                </div>
                <div class="mwt-banner-main">
                    <div class="mwt-banner-progress">
                        <b>{{ totalProgress }}%</b>
                    </div>
                    <div class="mwt-banner-info">
                        <b>MWT: Tank Battles 优化进度 - 仅供参考</b>
                    </div>
                </div>
            </div>
        </template>
    </Page>
</template>

<style>
.mwt-banner {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--theme-color-mask);
}

.mwt-banner-logo {
    display: flex;
    width: 110px;
    padding: 5px;
    border-radius: 5px;
    background-color: var(--theme-color-light);
}

.mwt-banner-main {
    width: 100%;
    padding: 5px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: var(--theme-color-light);
}

.mwt-banner-progress {
    text-align: center;
    font-size: 60px;
    border-radius: 5px;
    background-color: var(--theme-color-dark);
    width: 100%;
    padding-bottom: 12px;
}

.mwt-banner-info {
    margin-top: 5px;
    text-align: center;
    border-radius: 5px;
    background-color: var(--theme-color-dark);
    width: 100%;
    font-size: 15px;
}
</style>