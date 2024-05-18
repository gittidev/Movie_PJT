<template>
  <div class="app-body">
    <HeaderNavbar class="header"/>
    <!-- 라우터 뷰 구성 -->
    <RouterView/>
  </div>
</template>

<script setup>
import HeaderNavbar from '@/components/common/HeaderNavbar.vue'
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from 'vue'
import { useMovieStore } from "@/stores/movies";

const store = useMovieStore()

onMounted(() => {
  store.getGenres()
})

</script>

<style>

.app-body {
  width: 100%;
  height: 100%;
}

/* 라이트 다크 테마 토글 */
</style>
