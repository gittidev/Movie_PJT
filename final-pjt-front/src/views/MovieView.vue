<template>
  <div class="movie-container">
    <div class="movie-section">
      <TodayMovie />
    </div>
    <div class="movie-section">
      <WeeklyMovie />
    </div>
    <div class="movie-section">
      <GenreMovie/>
      
    </div>
    
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movies";
import { onMounted } from "vue";
import TodayMovie from "@/components/movie/TodayMovie.vue";
import WeeklyMovie from "@/components/movie/WeeklyMovie.vue";
import GenreMovie from "@/components/movie/GenreMovie.vue";

const store = useMovieStore();

onMounted(() => {
  store.getMovies();
  store.getWeeklyMovies();
  store.getDatabaseMovie();
});
</script>

<style scoped>
.movie-container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 각 섹션 사이에 간격을 둠 */
}

.movie-section {
  width: 100%;
  padding: 20px; /* 내부 여백 */
  box-sizing: border-box; /* 패딩 포함하여 박스 크기 계산 */
}
</style>
