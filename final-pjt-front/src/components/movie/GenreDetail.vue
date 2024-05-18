<template>
    <div>
        <h1>장르 이름</h1>
        {{ genreId }}
        <!-- 추가 기능을 위한 코드 (주석 처리된 부분) -->
        <!-- <Carousel id="thumbnails" :items-to-show="5" :wrap-around="true" v-model="currentSlide" ref="carousel"
              :autoplay="2800" :transition="700">
              <Slide v-for="movies in genreMovies" :key="movies.id">
                  <div class="carousel__item">
                      <img class='first-img' src="@/assets/sample1.jpg" alt="#">
                  </div>
              </Slide>
          </Carousel> -->
    </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movies";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const store = useMovieStore();
const route = useRoute();

const genreMovies = ref([]);
const currentSlide = ref(0);
const genreId = ref('');

genreId.value = route.params.genreId;
console.log(genreId.value);

onMounted(async () => {
    genreId.value = route.params.genreId;
    await store.getDatabaseMovie(); // 데이터를 가져올 때까지 대기
    await store.getMovies();
    await store.getWeeklyMovies();
    genreMovies.value = store.Movies.filter(movie => movie.genreId === genreId.value);
    console.log(genreMovies.value);
});

watch(genreId, async (newValue, oldValue) => {
    await store.getDatabaseMovie(); // 데이터를 가져올 때까지 대기
    await store.getMovies();
    await store.getWeeklyMovies();
    genreMovies.value = store.Movies.filter(movie => movie.genreId === newValue);
    console.log(genreMovies.value);
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
