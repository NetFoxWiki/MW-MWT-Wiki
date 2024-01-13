<template>
    <div class="mainpage-col">
        <div class="mainpage-box">
            <div class="mainpage-title-sub">{{ title }}</div>
            <hr>
            <strong><p style="text-align: center">{{ desc }}</p></strong>
        </div>
    </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style>

.mainpage-col {
    display: flex;
    flex-wrap: wrap;
    column-gap: .4em;
}

.mainpage-box {
    flex-grow: 1;
    flex-basis: 17em;
    padding: .4em;
    margin-top: .4em;
    border: 1px solid #2a52be;
    border-radius: .5em;
    box-shadow: 0 .1em .4em rgba(87, 87, 87, .3);
}

.mainpage-box p,
.mainpage-box ul {
    margin-top: .6em;
    margin-bottom: .6em;
}

.mainpage-title-sub {
    text-align: center;
    font-size: 1.2em;
    font-weight: 700;
    background: #2a52be;
    color: #fff;
    border-radius: .3em;
}
        
</style>