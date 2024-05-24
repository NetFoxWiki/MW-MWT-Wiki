<template>
    <div v-if="visible" class="popup">
        <div class="popup-content">
            <div class="InfoCom-main">
        <span>
            <b class="InfoCom-title">{{ title }}</b>
        </span>
        <span class="InfoCom-content">
            <b>{{ content }}</b>
        </span>
        <a :href="link" class="InfoCom-button" target="_blank"><b>{{ buttonText }}</b></a>
    </div>
            {{ content }}
            <a class="InfoCom-button" @click="closePopup">关闭</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        }
    },
    methods: {
        closePopup() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.popup {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background: #fff;
    border-radius: 5px;
}

.close-button {
    margin-top: 10px;
}
</style>