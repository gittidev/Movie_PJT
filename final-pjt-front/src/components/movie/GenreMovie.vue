<template>
    <div>
        <h1>장르별 영화</h1>
        <Carousel id="thumbnails" :items-to-show="5" :wrap-around="true" v-model="currentSlide" ref="carousel"
                :autoplay="2800" :transition="700">
                <Slide v-for="slide in 3" :key="slide">
                    <div class="carousel__item" style="color :white;">
                        <img class='first-img' src="@/assets/sample1.jpg" alt="#" style="width: 150px;">
                    </div>
                </Slide>
        </Carousel>
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

<script setup>



</script>

<style scoped>
h1 {
    color: white;
}
</style>