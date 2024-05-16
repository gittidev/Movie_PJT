<template>
  <div class="main-container">
    <div class="movie-section">
      <TodayMovie />
    </div>
    <div class="movie-section">
      <WeeklyMovie />
    </div>
    <div class="movie-section">
      <GenreMovie />
    </div>
  </div>
</template>

<script setup>
import TodayMovie from "@/components/movie/TodayMovie.vue";
import WeeklyMovie from "@/components/movie/WeeklyMovie.vue";
import GenreMovie from "@/components/movie/GenreMovie.vue";
</script>

<style scoped>


.main-container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 각 섹션 사이에 간격을 둠 */
}

.movie-section {
  width: 100%;
  /* height: 300px; 필요한 경우 섹션 높이를 지정 */
  border: 1px solid #ccc; /* 각 섹션을 구분하는 테두리 */
  padding: 20px; /* 내부 여백 */
  box-sizing: border-box; /* 패딩 포함하여 박스 크기 계산 */
}
</style>
