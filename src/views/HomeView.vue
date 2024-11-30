<script setup>
import PostCard from '@/components/PostCard.vue';
let data = [1, 2, 3, 4, 5, 6]

</script>

<template>
  <div class="flex justify-end">
    <button class="btn-primary">
      Add a Post
    </button>
  </div>
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
    <PostCard v-for="item in data" :key="item" />
  </div>
</template>