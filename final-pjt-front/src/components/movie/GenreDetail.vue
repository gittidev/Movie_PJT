<template>
    <div>
        <Carousel id="thumbnails" :items-to-show="4.5" :wrap-around="true" v-model="currentSlide" ref="carousel"
        :autoplay="0.1" :transition="10000">
            <Slide v-for="movie in genreMovies" :key="movie.id">
                <div class="carousel__item img-handler">
                    <img class='first-img ' :src="getMoviePoster(movie)" alt="#">
                </div>
            </Slide>
        </Carousel>
    </div>
  </template>
  
<script setup>
import { useMovieStore } from "@/stores/movies";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const store = useMovieStore();
const route = useRoute();

const genreId = ref('18');
const genreMovies = ref([]);

const fetchMovies = async (id) => {
  await store.getDatabaseMovie(); // 데이터를 가져올 때까지 대기
  await store.getMovies();
  await store.getWeeklyMovies();

  if (store.Movies && store.Movies.length > 0) {
    genreMovies.value = store.Movies.filter((movie) => {
      const genreIds = movie.genre_ids.map(String); // 모든 요소를 문자열로 변환
      return genreIds.includes(id);
    });
    console.log('Filtered movies:', genreMovies.value);
  } else {
    console.log('No movies found');
  }
};


const getMoviePoster = movie => {
  if (movie.poster_path) {
    return imgBaseURL + movie.poster_path;
  } else {
    return ""; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
  }

}

onMounted(() => {
    genreId.value = route.params.genreId || "18";
  fetchMovies(genreId.value);
});

watch(() => route.params.genreId, (newGenreId) => {
  genreId.value = newGenreId;
  fetchMovies(newGenreId);
});
</script>

<script> 
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Gallery',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        currentSlide: 0,
    }),
    methods: {
        slideTo(val) {
            this.currentSlide = val
        },
    },
})
</script>

<style scoped>

.img-handler{
    width: 28rem;
    height: 40rem;
}
img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}

</style>