<script setup>
import { useAuthStore } from '@/stores/auth';
import { RouterLink } from 'vue-router';

const authStore = useAuthStore()
</script>

<template>
  <header class="flex items-center justify-between pb-4 border-b border-b-zinc-100/5">
    <div class="brand">
      <h2 class="">
        <svg width="50px" height="50px" class="fill-indigo-100" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 20V17.6M12 6.4V4M20 12H17.6M6.4 12H4M17.6569 6.34315L15.9598 8.0402M8.0402 15.9598L6.34315 17.6569M6.34293 6.34332L8.03999 8.04038M15.9596 15.96L17.6566 17.657"
            stroke="#e0e7ff" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </h2>
    </div>
    <ul class="flex items-center justify-center space-x-6 list-none ">
      <li>
        <RouterLink class="px-3 py-2 transition-all ease-in-out duration-300 hover:bg-zinc-800 rounded-md" to="/">Home
        </RouterLink>
      </li>
    </ul>
    <div class="">
      <div class="flex items-center space-x-3" v-if="!authStore.user">
        <RouterLink to="/register"
          class="p-2  border border-indigo-700 rounded-md transition-all ease-in-out duration-300 hover:bg-indigo-300 hover:text-gray-800  text-sm font-semibold ">
          Sign Up
        </RouterLink>
        <RouterLink to="/login"
          class="p-2 bg-indigo-500 border border-indigo-700 rounded-md transition-all ease-in-out duration-300  hover:bg-indigo-800 text-sm font-semibold ">
          Sign In</RouterLink>
      </div>
      <div v-else class="flex items-center space-x-4 mr-3">
        <p class="text-sm">Welcome Back {{ authStore.user.name }}</p>
        <form @submit.prevent="authStore.logout">
          <button class="p-2 flex items-center font-bold text-sm border border-gray-500 rounded-md" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            <span class="ml-2">Logout</span>
          </button>
        </form>
      </div>
    </div>
  </header>
</template>