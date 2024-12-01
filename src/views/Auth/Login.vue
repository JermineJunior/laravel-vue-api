<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import InputError from '@/components/InputError.vue';
import { RouterLink } from 'vue-router';

const { errors } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();
const formData = reactive({
  email: "",
  password: "",
});

onMounted(() => (errors.value = {}));
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="px-3 my-2 border-l-4 border-b-4 border-l-indigo-200/5 border-b-indigo-200/5">
      <h3 class="text-3xl font-bold pb-3">Login to your account</h3>
      <form @submit.prevent="authenticate('/login', formData)">
        <!-- email -->
        <div class="my-5">
          <label for="email" class="input-label">Email Address</label>
          <input v-model="formData.email" type="email" name="email" class="text-input"
            :class="errors.email ? 'border border-red-500' : ''" placeholder="Email Address">
          <InputError v-if="errors.email" :message="errors.email[0]" />
        </div>
        <!-- password -->
        <div class="my-5">
          <label for="password" class="input-label">Password</label>
          <input v-model="formData.password" type="password" name="password" class="text-input"
            :class="errors.password ? 'border border-red-500' : ''" placeholder="Password">
          <InputError v-if="errors.password" :message="errors.password[0]" />
        </div>
        <div class="flex items-center justify-end space-x-2 pb-2">
          <RouterLink to="/register" class="text-sm text-zinc-400">Dont have an account</RouterLink>
          <button type="submit" class="p-2 bg-indigo-500 border border-indigo-700 rounded-md  text-sm font-semibold ">
            Log In</button>
        </div>
      </form>
    </div>
  </div>
</template>