import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Register.vue'),
      meta: { guest: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue'),
      meta: { guest: true }
    },
  ],
})

// protect the routes using the guards [auth , guest]
router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  await authStore.getUser()

  if (authStore.user && to.meta.guest) {
    return { name: "home" }
  }
  if (!authStore.user && to.meta.auth) {
    return { name: "login" }
  }
});

export default router
