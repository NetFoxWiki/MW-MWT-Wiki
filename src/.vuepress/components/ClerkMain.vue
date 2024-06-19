<script setup>
import { SignInButton, UserButton, useAuth, SignUpButton } from 'vue-clerk'
const { isSignedIn, isLoaded } = useAuth()
</script>

<template>
    <div class="clerk-user" v-if="isLoaded">
        <UserButton v-if="isSignedIn" showName="true" />
        <div v-else>
            <SignInButton v-slot="{ handler }">
                <button @click="handler" class="clerk-button">
                    登录
                </button>
            </SignInButton>
            <SignUpButton v-slot="{ handler }">
                <button @click="handler" class="clerk-button">
                    注册
                </button>
            </SignUpButton>
        </div>
        <small class="tips-by">Beta 功能</small>
    </div>
</template>

<style>
.clerk-button {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none !important;
    color: var(--theme-color);
    background-color: var(--theme-color-mask);
    border: none;
    padding: 3px 8px;
    border-radius: 5px;
    margin: 2px 0 0 5px;
    text-align: center;
}

.clerk-user {
    margin: 10px;
    margin-top: 10px;
    box-shadow: 0 0 2px var(--theme-color);
    padding: 5px;
    border-radius: 5px;
    text-align: center;
}

.clerk-button:hover {
    background-color: var(--theme-color);
    color: #fff;
}
</style>