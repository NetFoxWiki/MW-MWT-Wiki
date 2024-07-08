<script setup>
import { useAuth } from 'vue-clerk'
const { isSignedIn, userId } = useAuth()
</script>

<template>
    <div v-if="isSignedIn">{{ userId }}</div>
</template>