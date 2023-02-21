import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth_files/LoginView.vue')
    },
    {
      path: '/register',
      name: 'sign_up',
      component: () => import('../views/auth_files/Sign_UpView.vue')
    },
    {
      path: '/about',
      name: 'about',
      children: [
        {
          path: 'company',
          name: 'company',
          component:  () => import('../views/about_files/Company.vue')
        },
        {
          path: 'team',
          name: 'team',
          component:  () => import('../views/about_files/TeamView.vue')
        }
      ]
    },
    {
      path: '/platform',
      name: 'platform',
      children: [
        {
          path: 'hrms',
          name: 'hrms',
          component:  () => import('../views/about_files/Company.vue')
        },
        {
          path: 'crms',
          name: 'crms',
          component:  () => import('../views/about_files/TeamView.vue')
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog_files/BlogView.vue')
    },
  ],
});

export default router;
