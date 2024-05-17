<template>
    <div>
        <h1>금주의 영화</h1>
        <Carousel id="thumbnails" :items-to-show="5" :wrap-around="true" v-model="currentSlide" ref="carousel"
                :autoplay="2800" :transition="700">
                <Slide v-for="weeklyMovie in store.weeklyMovies" :key="weeklyMovie.id">
                    <div class="carousel__item" style="color :white;">
                        <img :src="getMoviePoster(weeklyMovie)" alt="#" style="width: 10rem; height: 15rem;">
                    </div>
                </Slide>
        </Carousel>
   </div>
</template>



<script setup >
import { useMovieStore } from '@/stores/movies';
import { ref } from 'vue';
const store = useMovieStore()
const imgBaseURL = "https://image.tmdb.org/t/p/w500";


const getMoviePoster = movie => {
  if (movie.poster_path) {
    return imgBaseURL + movie.poster_path;
  } else {
    return ""; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
  }
}; 

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

<script setup>



</script>

<style scoped>
h1 {
    color: white;
}
</style>