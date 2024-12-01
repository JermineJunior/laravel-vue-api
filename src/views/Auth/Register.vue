<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import InputError from '@/components/InputError.vue';

const { errors } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();
const formData = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
});

onMounted(() => (errors.value = {}));
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="px-3 m-2 border-l-4 border-b-4 border-l-indigo-200/5 border-b-indigo-200/5">
      <h3 class="text-3xl font-bold pb-3">Register a new account</h3>
      <form @submit.prevent="authenticate('/register', formData)">
        <div class="my-5">
          <label for="name" class="input-label">UserName</label>
          <input v-model="formData.name" type="text" name="name" class="text-input"
            :class="errors.name ? 'border border-red-500' : ''" placeholder="User Name">
          <InputError v-if="errors.name" :message="errors.name[0]" />
        </div>
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
        <!-- password confirmation -->
        <div class="my-5">
          <label for="password_confirmation" class="input-label">Password Confirmation</label>
          <input v-model="formData.password_confirmation" type="password" name="password_confirmation"
            class="text-input" placeholder="Password">
        </div>
        <div class="flex items-center justify-end space-x-2 pb-2">
          <RouterLink to="/login" class="text-sm text-zinc-400">already have an account</RouterLink>
          <button type="submit" class="p-2 bg-indigo-600 border border-indigo-700 rounded-md  text-sm font-semibold">
            Register</button>
        </div>
      </form>
    </div>
  </div>

</template>