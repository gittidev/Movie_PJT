<template>
    <div>
        <h1>오늘의 영화</h1>

        <div class="carousel-container">
            <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" :transition="0">
                <Slide v-for="todayMovie in store.todayMovies" :key="todayMovie.id">
                    <div class="carousel__item" style="color :white;">
                        <img :src="getMoviePoster(todayMovie)" alt="#" style="width: 25rem;">
                    </div>
                </Slide>
            </Carousel>
        </div>
        <div style="margin-top: 10px;">
        <Carousel id="thumbnails" :items-to-show="7" :wrap-around="true" v-model="currentSlide" ref="carousel"
                :autoplay="2500" :transition="600">
                <Slide v-for="todayMovie in store.todayMovies" :key="todayMovie.id">
                    <div class="carousel__item" style="color :white;">
                        <img :src="getMoviePoster(todayMovie)" alt="#" style="width: 10rem; height: 15rem;">
                    </div>
                </Slide>
        </Carousel>
        </div>
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
import { defineComponent, defineProps } from 'vue'
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
h1 {
    color: white;
}

.first-img {
    width: 50px;
}

.carousel-container {
    width: 80%;
    /* 원하는 너비로 조정 */
    height: 400px;
    /* 원하는 높이로 조정 */
    margin: auto;
    /* 중앙 정렬 */
    /* 부모 요소에서 넘치는 부분을 숨김 */

}
</style>