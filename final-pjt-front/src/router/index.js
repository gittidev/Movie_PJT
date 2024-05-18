import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/movie",
      name: "movie",
      component: () => import("../views/MovieView.vue"),
      children:[
        {
          path: "genres",
          name: "genres",
          component: () => import("@/components/movie/GenreMovie.vue"),
          children: [
            {
              path: ":genreId",
              name: "genredetail",
              component: () => import("@/components/movie/GenreDetail.vue"),
            }]
        },
      ]
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/community",
      name: "community",
      component: () => import("../views/CommunityView.vue"),
    },
    {
      path: "/:communityId",
      name: "communitydetail",
      component: () => import("../views/CommunityDetailView.vue"),
    },
    {
      path: "/recommend",
      name: "recommend",
      component: () => import("../views/RecommendView.vue"),
      children: [
        {
          path: "random",
          name: "random",
          component: () => import("@/components/Recommend/RandomRecommend.vue"),
        },
        {
          path: "marshchat",
          name: "marshchat",
          component: () =>
            import("@/components/Recommend/ChatbotRecommend.vue"),
        },
        {
          path: "bestreview",
          name: "bestreview",
          component: () => import("@/components/Recommend/ReviewRecommend.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUpView.vue"),
    },
  ],
});

export default router;
