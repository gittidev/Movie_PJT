<template>
    <div>
        <h1>오늘의 영화</h1>

        <div class='carousel-handler'>


            <div class="carousel-container">
                <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide" :transition="0">
                    <Slide v-for="todayMovie in store.todayMovies" :key="todayMovie.id">
                        <div class="carousel__item" style="color :white;" @click="goDetail(todayMovie.id)">
                            <img :src="getMoviePoster(todayMovie)" alt="#" style="width: 25rem;" >
                        </div>
                    </Slide>
                </Carousel>
            </div>
            <div>
                <Carousel id="thumbnails" :items-to-show="10" :wrap-around="true" v-model="currentSlide" ref="carousel"
                    :autoplay="2500" :transition="4500">
                    <Slide v-for="todayMovie in store.todayMovies" :key="todayMovie.id">
                        <div class="carousel__item" style="color :white;">
                            <img :src="getMoviePoster(todayMovie)" alt="#" style="width: 12rem; height: 18rem;">
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useMovieStore } from '@/stores/movies';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router=useRouter()
const store = useMovieStore()
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
.first-img {
    width: 50px;
}

.carousel-handler {
    align-items: center;
    text-align: center;
}

.carousel-container {
    width: 80%;
    height: 400px;
    margin: auto;
    display: inline-block;
}
</style>