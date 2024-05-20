<template>
    <div>
        <h1>오늘의 영화</h1>

        <div class='carousel-handler'>

            <div class="carousel-container">
                <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide" :transition="0">
                    <Slide v-for="todayMovie in store.todayMovies" :key="todayMovie.id">
                        <div class="carousel__item" style="color :white;" @click="goDetail(todayMovie.id)">

                                    <img class='first-img' :src="getMoviePoster(todayMovie)" alt="#" style="width: 25rem;" >
                                    <img src="" alt="">
                            
                        </div>
                    </Slide>
                </Carousel>
            </div>
            <div>
                <Carousel id="thumbnails" :items-to-show="7" :wrap-around="true" v-model="currentSlide" ref="carousel"
                    :autoplay="2500" :transition="4500">
                    <Slide v-for="todayMovie in store.todayMovies" :key="todayMovie.id">
                        <div class="carousel__item" style="color :white;">
                            <img class="slideImg" :src="getMoviePoster(todayMovie)" alt="#">
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
import emptyPopcornBox from '@/assets/empty_popcorn_box2.png';

const router=useRouter()
const store = useMovieStore()
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const getMoviePoster = movie => {
    if (movie.poster_path) {
        return imgBaseURL + movie.poster_path;
    } else {
        return emptyPopcornBox; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
    }
};

const goDetail = function (movieId) {
    console.log('클릭')
    router.push({ name: 'moviedetail', params: { movieId: movieId } });
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

h1 {
    font-family: 'PyeongChangPeace-Bold';
    font-size: 3rem;
}

.first-img {
    width: 100px;
    border-radius: 10px;
}



.carousel-handler {
    align-items: center;
    text-align: center;
    border-radius: 10px;
}

.slideImg {
    width: 20rem; 
    height: 28rem;
    border-radius: 10px;
}

.carousel-container {
    width: 80%;
    height: 400px;
    margin: auto;
    display: inline-block;
}

/* 캐러셀 스타일 */
.carousel__slide {
  padding: 5px;
  margin-top: 20px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-30deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(30deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>