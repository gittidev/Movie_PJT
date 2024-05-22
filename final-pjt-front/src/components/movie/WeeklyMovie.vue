<template>
    <div>
        <h1>킬링 타임[고전 명작]</h1>
        <Carousel id="thumbnails" :items-to-show="4.5" :wrap-around="true" v-model="currentSlide" ref="carousel"
                :autoplay="0.1" :transition="10000">
                <Slide v-for="weeklyMovie in store.weeklyMovies" :key="weeklyMovie.id">
                    <div class="carousel__item img-handler" style="color :white;">
                        <img :src="getMoviePoster(weeklyMovie)" alt="#" @click="goDetail(weeklyMovie.id)">
                    </div>
                </Slide>
        </Carousel>
    </div>
</template>



<script setup >
import { useMovieStore } from '@/stores/movies';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const store = useMovieStore()
const router = useRouter()
const imgBaseURL = "https://image.tmdb.org/t/p/w500";


const getMoviePoster = movie => {
  if (movie.poster_path) {
    return imgBaseURL + movie.poster_path;
  } else {
    return ""; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
  }
}; 

const goDetail = function (movieId) {
    console.log('클릭')
    router.push({ name: 'moviedetail', params: { movieId: movieId } });
    // router.push({ name: 'login' });
}

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

h1 {
    font-family: 'PyeongChangPeace-Bold';
    font-size: 3rem;
}

.img-handler{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin: 1rem
}
img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit:cover;
}

</style>