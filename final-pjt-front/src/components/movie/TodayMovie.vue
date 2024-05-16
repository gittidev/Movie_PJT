<template>
    <div>
        <h1>오늘의 영화</h1>

        <div class="carousel-container">
            <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" :transition="0">
                <Slide v-for="slide in 3" :key="slide">
                    <div class="carousel__item" style="color :white;">
                        {{ slide }}
                        <img src="@/assets/sample1.jpg" alt="#" style="width: 400px;">
                    </div>
                </Slide>
            </Carousel>
        </div>
        <div style="margin-top: 10px;">
        <Carousel id="thumbnails" :items-to-show="5" :wrap-around="true" v-model="currentSlide" ref="carousel"
                :autoplay="2800" :transition="700">
                <Slide v-for="slide in 3" :key="slide">
                    <div class="carousel__item" style="color :white;">
                        <img class='first-img' src="@/assets/sample1.jpg" alt="#" style="width: 150px;">
                    </div>
                </Slide>
        </Carousel>
        </div>
    </div>


</template>

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