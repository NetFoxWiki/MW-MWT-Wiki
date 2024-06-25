<script setup>
import { useAuth } from 'vue-clerk';
const { isLoaded, orgSlug, orgId, orgRole } = useAuth()
</script>

<template>
    <div v-if="isLoaded && orgSlug == 'netfoxedit'">
        <div class="clerk-notice">OID: {{ orgId }}</div>
        <div class="clerk-tool-center">
            <hr class="clerk-hr">
            <router-link :to="'/zh/dev/' + orgSlug + '/'" class="clerk-tool-button">
                网站内容审查
            </router-link>
            <hr class="clerk-hr">
        </div>
    </div>
</template>