<script setup>
import PostCard from '@/components/PostCard.vue';
import { useAuthStore } from '@/stores/auth';
let data = [1, 2, 3, 4, 5, 6]

const authStore = useAuthStore()
</script>

<template>
  <div class="flex items-center justify-between mb-5">
    <h2 class="text-4xl font-bold">Latest Posts</h2>
    <button v-if="authStore.user" class="btn-primary">
      Add a Post
    </button>
  </div>
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
    <PostCard v-for="item in data" :key="item" />
  </div>
</template>