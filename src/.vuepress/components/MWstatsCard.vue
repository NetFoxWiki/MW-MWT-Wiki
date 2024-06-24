<script>
import MWstats from './icon/MWstats.vue';

export default {
    components: {
        MWstats,
    },
    data() {
        return {
            ItemType: ['轻型护卫舰','护卫舰','驱逐舰','巡洋舰','战列舰','航空母舰','潜艇','地效飞行器','突击航空母舰','空天航母','直升机','战斗机','攻击机','无人机','轰炸机'],
        }
    },
    props: {
        ItemName: '',
        ItemTypeID: 0,
        ItemDesc: '',
    },
}
</script>

<template>
    <div class="msc-main">
        <a class="msc-link" href="https://mwstats.info/" target="_blank">
            <div class="msc-copyright-btn">
                <MWstats />
                &ensp;现代战舰数据
            </div>
        </a>
        <div class="msc-content">
            <div class="msc-h">{{ ItemName }}</div>
            <Badge :text="ItemType[ItemTypeID]" color="#5c77a6" />
            <div class="msc-d" v-html="ItemDesc"></div>
        </div>
        <div class="msc-copyright-by">
            由 现代战舰数据 提供数据支持
        </div>
    </div>
</template>

<style>
.msc-main {
    padding: 7px;
    border-radius: 5px;
    background-color: #263238;
    margin: 10px 0;
}
.msc-d{
    color:#ffffff;
    font-weight: 100;
    font-size: 15px;
}

.msc-h {
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
}

.msc-link {
    text-decoration: none !important;
    display: inline-block;
}

.msc-copyright-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    font-weight: bolder;
    border-radius: 5px;
    max-width: 150px;
    color: #ffffff;
    padding: 5px;
}

.msc-copyright-by {
    margin: 5px 0 0 0;
    text-align: center;
    background-color: #000000;
    font-weight: 100;
    font-size: 13px;
    border-radius: 5px;
    color: #ffffff;
    padding: 5px;
}
</style>