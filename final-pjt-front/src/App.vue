<template>
  <div class="app-body">
    <HeaderNavbar />
    <!-- 라우터 뷰 구성 -->
    <RouterView/>
  </div>
</template>

<script setup>
import HeaderNavbar from '@/components/common/HeaderNavbar.vue'
import { RouterLink, RouterView } from "vue-router";
</script>

<style>

.app-body {
  background-color: rgb(30, 30, 30);
  width: 100%;
  height: 100%;
}

/* 라이트 다크 테마 토글 */
</style>
