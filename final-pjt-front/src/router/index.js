import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/movie/',
      name: 'movie',
      component: () => import('../views/MovieView.vue')
    },
    {
      path: '/search/',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/community/',
      name: 'community',
      component: () => import('../views/CommunityView.vue'),
    },
    {
      path: "/:communityId/",
      name: 'communitydetail',
      component: () => import('../views/CommunityDetailView.vue'),
    },
    {
      path: '/recommend/',
      name: 'recommend',
      component: () => import('../views/RecommendView.vue'),
      children:[
        {path: 'random',
        name: 'random',
        component: () => import('@/components/recommend/RandomRecommend.vue'),},
        {path: 'marshchat',
        name: 'marshchat',
        component: () => import('@/components/recommend/ChatbotRecommend.vue'),},
        {path: 'bestreview',
        name: 'bestreview',
        component: () => import('@/components/recommend/ReviewRecommend.vue'),},
      ]
    },
    {
      path: '/login/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/login/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup/',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
  ]
})

export default router
