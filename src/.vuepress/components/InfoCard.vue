<script>
export default {
    props: {
        name: '默认消息',
        description: '默认消息',
        avatarlink: '/',
        title: '',
        who: '',
        showAvatar: false,
    }
}
</script>

<template>
    <div class="InfoCard-main">
        <img v-if="showAvatar" class="InfoCard-avatar" :src="avatarlink" no-view>
        <span v-else style="font-size: 12px;">About</span>
        <div class="InfoCard-profile">
            <b class="InfoCard-name">{{ name }}</b>
            <br>
            <Badge :text="who" color="#fba414" />
            <Badge :text="title" color="var(--theme-color)" />
            <b class="InfoCard-desc">{{ description }}</b>
        </div>
    </div>
</template>

<style>
.InfoCard-main {
    display: inline-block;
    max-width: 250px;
    height: auto;
    box-shadow: 0 0 2px var(--theme-color-light);
    border-radius: 5px;
    margin: 0 10px 10px 0;
    padding: 15px;
}

.InfoCard-avatar {
    width: 50px;
    height: 100%;
    border-radius: 100%;
    box-shadow: 0 0 5px var(--theme-color-light);
}

.InfoCard-name {
    font-size: 30px;
    font-weight: bold;
    overflow-wrap: break-word;
}

.InfoCard-desc {
    overflow-wrap: break-word;
}
</style>