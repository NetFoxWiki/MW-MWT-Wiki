<template>
    <div class="Ar-main">
        <b class="Ar-text">此页面已存档</b><router-link class="Ar-button"
            to="/zh/sitehelp.html#页面已存档">为什么会出现此消息？</router-link>
    </div>
</template>

<style>
:root {
    --color1: #fa9a5f;
    --color2: #5c77a6;
    --color3: #635282;
    --color4: #add8fb;
    --color5: #92daa9;
}

.Ar-text {
    background: linear-gradient(225deg,
            var(--color1) 0%, var(--color1) 9%,
            transparent 9%, transparent 10%,
            var(--color2) 10%, var(--color2) 19%,
            transparent 19%, transparent 20%,
            var(--color3) 20%, var(--color3) 29%,
            transparent 29%, transparent 30%,
            var(--color4) 30%, var(--color4) 39%,
            transparent 39%, transparent 40%,
            var(--color5) 40%, var(--color5) 49%,
            transparent 49%, transparent 50%,
            var(--color1) 50%, var(--color1) 59%,
            transparent 59%, transparent 60%,
            var(--color2) 60%, var(--color2) 69%,
            transparent 69%, transparent 70%,
            var(--color3) 70%, var(--color3) 79%,
            transparent 79%, transparent 80%,
            var(--color4) 80%, var(--color4) 89%,
            transparent 89%, transparent 90%,
            var(--color5) 90%, var(--color5) 99%,
            transparent 99%);
    background-clip: text;
    background-size: 200% 200%;
    color: transparent;
    animation: move 4s linear infinite;
}

@keyframes move {
    0% {
        background-position: 0px 100%;
    }

    100% {
        background-position: 100% 0px;
    }
}

.Ar-main {
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 10px 0 10px 0;
    background: var(--warning-bg-color);
    max-width: 100%;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0 0 2px #70797a;
    border-color: var(--warning-border-color);
}

.Ar-button {
    margin-left: 5px;
    font-weight: bold;
}

.Ar-button:hover {
    color: var(--theme-color-dark);
}
</style>