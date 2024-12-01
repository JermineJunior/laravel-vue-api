<script setup>
import { RouterView } from 'vue-router';
import BaseNavigation from '@/components/BaseNavigation.vue';
import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore()

onMounted(() => { authStore.getUser() })
</script>
<template>
    <div class="container m-6">
        <BaseNavigation />
        <main>
            <div class="py-16">
                <RouterView />
            </div>
        </main>
    </div>
</template>
<style scoped lang="postcss">
:global(html) {
    background-color: #09090b;
    color: white;
}
</style>