<template>
    <div>          
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="movie in genreMovies" :key="movie.id">
            <div class="carousel__item img-handler" >
                    <img class='first-img ' :src="getMoviePoster(movie)" alt="#" @click="goDetail(movie.movie_id)">
            </div>
          </Slide>

          <template #addons>
            <Navigation/>
          </template>
        </Carousel>
    </div>
  </template>
  
<script setup>
import { useMovieStore } from "@/stores/movies";
import { ref, onMounted, watch, onUpdated } from "vue";
import { useRoute,useRouter } from "vue-router";
import emptyPopcornBox from '@/assets/empty_popcorn_box2.png';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const store = useMovieStore();
const route = useRoute();
const router = useRouter()

const genreId = ref('12');
const genreMovies = ref([]);
const currentSlide = ref(0);

const fetchMovies = async (id) => {
  await store.getDatabaseMovie(); // 데이터를 가져올 때까지 대기
  await store.getMovies();
  await store.getWeeklyMovies();

  if (store.Movies && store.Movies.length > 0) {
    genreMovies.value = store.Movies.filter((movie) => {
      const genreIds = movie.genre_ids.map(String); // 모든 요소를 문자열로 변환
      return genreIds.includes(id);
    });
    // console.log('Filtered movies:', genreMovies.value);
  } else {
    console.log('No movies found');
  }
};


// 영화 포스터 이미지 가져오기
const getMoviePoster = movie => {
  if (movie.poster_path) {
    return imgBaseURL + movie.poster_path;
  } else {
    return emptyPopcornBox; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
  }
};


onMounted(() => {
  currentSlide.value = 0;
  genreId.value = route.params.genreId || "12";
  fetchMovies(genreId.value);
});

watch(() => route.params.genreId, (newGenreId) => {
  genreId.value = newGenreId;
  fetchMovies(newGenreId);
});

// 상세페이지 이동
const goDetail = function (movieId) {
    console.log('클릭')
    router.push({ name: 'moviedetail', params: { movieId: movieId } });
    // router.push({ name: 'login' });
}


</script>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  }),
})
</script>

<style scoped>

.img-handler{
  width: 100%;
    height: 100%;
    border-radius: 10px;
    margin: 10px;
}
img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    border-radius: 10px;
}

</style>