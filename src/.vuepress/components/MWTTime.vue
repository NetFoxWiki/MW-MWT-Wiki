<script>
import MWTSVG from "../components/icon/MWT.vue";

export default {
    components: {
        MWTSVG,
    },
    data() {
        return {
            totalProgress: "0",
            totalProgress2: "0",
            targetTime: new Date('2024-4-15'),
        }
    },
    methods: {
        calculateProgress() {
            const currentTime = new Date();
            const timeDiff = this.targetTime.getTime() - currentTime.getTime();
            const daysDiff = Math.abs(Math.floor(timeDiff / (1000 * 3600 * 24)));
            const daysDiffh = Math.abs(Math.floor(timeDiff / (1000 * 3600 * 24) / 7));
            const daysDiffnow = daysDiff - daysDiffh * 2;
            if (daysDiffnow >= 50 && daysDiff >= 50) {
                this.totalProgress = '在不久的将来';
                this.totalProgress2 = '在不久的将来';
            } else {
                if (daysDiffnow >= 50 && daysDiff <= 50) {
                    this.totalProgress = '在不久的将来';
                    this.totalProgress2 = daysDiff * 2 + '%';
                } else if (daysDiffnow <= 50 && daysDiff >= 50) {
                    this.totalProgress = daysDiffnow * 2 + '%';
                    this.totalProgress2 = '在不久的将来';
                } else {
                    this.totalProgress = daysDiffnow * 2 + '%';
                    this.totalProgress2 = daysDiff * 2 + '%';
                }
            }
        },
    },
    mounted() {
        this.calculateProgress();
    },
}
</script>

<template>
    <div class="mwt-banner">
        <div class="mwt-banner-logo">
            <MWTSVG />
        </div>
        <div class="mwt-banner-main">
            <div class="mwt-banner-progress">
                <b>预估进度：</b>
                <b style="color: #add8fb;">{{ totalProgress }}</b>
                <br>
                <b>理想进度：</b>
                <b style="color: #f7e8c1;">{{ totalProgress2 }}</b>
            </div>
            <div class="mwt-banner-info">
                <b>MWT: Tank Battles 优化进度 - 仅供参考</b>
            </div>
        </div>
    </div>
</template>

<style>
.mwt-banner {
    display: flex;
    margin-bottom: 10px;
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
    font-size: 35px;
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