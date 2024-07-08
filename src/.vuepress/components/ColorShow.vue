<script>
export default {
    data() {
        return {
            colorShow: "background-color:",
        }
    },
    props: {
        color: "",
    }
}
</script>

<template>
    <div class="color-show-cus" :style="colorShow + color"></div>
    <br>
</template>

<style>
.color-show-cus{
    height: 20px;
    width: 20px;
    border-radius: 5px;
    border: 2px #a1a1a1 solid; 
}
</style>