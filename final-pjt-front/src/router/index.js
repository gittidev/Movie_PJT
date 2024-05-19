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
      redirect: "/movie/genre/12",
      children:[
        {
        path: "genre/:genreId",
        name: "genredetail",
        component: () => import("@/components/movie/GenreDetail.vue"),
        props: true,
      }
    ]
    },
    {
      path: "/movie/:movieId",
      name: "moviedetail",
      component: () => import("../views/MovieDetailView.vue"),
      props: true,
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
      path: "/community/:communityId",
      name: "communitydetail",
      component: () => import("../views/CommunityDetailView.vue"),
      props: true,
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
