<script>
export default {
    props: {
        title: '默认消息',
        content: '默认消息',
        buttonText: '默认消息',
        link: '/',
        InfoPath: false,
    }
}
</script>

<template>
    <div class="InfoCom-main">
        <span>
            <b class="InfoCom-title">{{ title }}</b>
        </span>
        <span class="InfoCom-content">
            <b>{{ content }}</b>
        </span>
        <router-link v-if="InfoPath" :to="link" class="InfoCom-button">{{ buttonText }}</router-link>
        <a v-else :href="link" class="InfoCom-button" target="_blank">{{ buttonText }}</a>
    </div>
</template>

<style>
.InfoCom-main {
    height: auto;
    max-width: 100%;
    box-shadow: 0 0 2px var(--theme-color-light);
    border-radius: 5px;
    border-bottom: 10px var(--theme-color-dark) solid;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 20px 40px 35px 40px;
    background-image: url('/bg4.svg');
    background-size: cover;
}

.InfoCom-main:hover {
    box-shadow: 0 0 3px 1px var(--theme-color-light);
}

.InfoCom-title {
    font-size: 40px;
}

.InfoCom-content {
    display: flex;
    font-size: 20px;
    margin-bottom: 35px;
}

.InfoCom-button {
    font-size: 25px;
    font-weight: bold;
    text-decoration: none !important;
    color: var(--theme-color);
    background-color: var(--theme-color-mask);
    border: none;
    padding: 7px 12px 9px 12px;
    border-radius: 5px;
    text-align: center;
}

.InfoCom-button:hover {
    background-color: var(--theme-color);
    color: #fff;
}
</style>