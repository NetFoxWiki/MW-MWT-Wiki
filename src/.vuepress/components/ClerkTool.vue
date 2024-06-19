<script setup>
import { useUser, SignOutButton } from 'vue-clerk';
import ClerkAPI from './ClerkAPI.vue';
const { isLoaded, isSignedIn, user } = useUser()
</script>

<template>
    <div v-if="isLoaded && isSignedIn">
        <div class="clerk-tool">
            <img :src="user.imageUrl" class="clerk-bg" no-view>
            <div class="clerk-filter">
                <div class="clerk-notice">Beta 功能</div>
                <div class="clerk-user-main">
                    <div class="clerk-username">
                        你好，{{ user.username }}
                    </div>
                    <SignOutButton v-slot="{ handler }">
                        <button @click="handler" class="clerk-tool-button">
                            登出
                        </button>
                    </SignOutButton>
                </div>
                <div class="clerk-notice">UID: {{ user.id }}</div>
                <ClerkAPI />
            </div>
        </div>
    </div>
</template>

<style>
.clerk-tool-center {
    text-align: center;
    padding: 0 10px;
    ;
}

.clerk-hr {
    height: 4px;
    border: none;
    border-radius: 100px;
    margin: 10px 0;
    box-shadow: 0 0 10px var(--theme-color);
    background-color: var(--theme-color-light);
}

.clerk-filter {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    padding: 5px;
}

.clerk-tool-button {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none !important;
    color: #fff;
    background-color: var(--theme-color-light);
    border: none;
    padding: 3px 8px;
    border-radius: 5px;
    margin: 2px 0 0 5px;
    text-align: center;
}

.clerk-tool-button:hover {
    background-color: var(--theme-color-dark);
    color: #fff;
}

.clerk-user-main {
    display: flex;
    align-items: center;
    justify-content: center;
}

.clerk-tool {
    color: #2b3d4f;
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin: 0;
    box-shadow: 0 0 1px var(--theme-color);
    border-radius: 5px;
}

.clerk-username {
    font-size: 25px;
    font-weight: bold;
}

.clerk-notice {
    text-align: center;
    font-size: small;
    overflow-wrap: break-word;
}

.clerk-bg {
    width: 100%;
    position: absolute;
    -webkit-user-drag: none;
    z-index: -1;
    top: -95px;
    right: 0;
}
</style>