<template>
    <div class="mainpage-col">
        <div class="mainpage-box">
            <div class="mainpage-title">{{ title }}</div>
            <hr>
			<strong><p style="text-align: center">{{ desc }}</p></strong>
        </div>
    </div>
</template>

<script setup>
defineProps(['title', 'desc'])
</script>

<style>

.mainpage-title {
    text-align: center;
    font-size: 1.5em;
    font-weight: 800;
    color: #2A52BE;
}

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

.button {
    margin: 0.1em;
    background: #eaeff2;
    border-radius: 0.35em;
    text-align: center;
    font-weight: bold;
    transition: all .35s;
}

.button:hover {
    box-shadow: 0 0 8px #bbb;
}
        
</style>