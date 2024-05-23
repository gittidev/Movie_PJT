<template>
    <div>

    
    <div>
        <div style="display: flex; flex-wrap: wrap;">

        <h1>장르별 영화</h1>
        <div class="genres-list">
            <!-- 버튼 가로스크롤 구현 -->
            <div class="scroll-container">
            <button class="btn scroll-item " v-for="genre of genresList" :key="genre.id" @click="showGenre(genre.id)">
                {{ genre.name }}
            </button>
            </div>
        </div>
    </div>
        <div class="genre-carousel">
            <RouterView />
            &nbsp;
        </div>
       
       
    </div>
    
</div>

</template>

<script setup>
import { useMovieStore } from "@/stores/movies";
import { ref } from "vue";
import { useRouter } from "vue-router";

const store = useMovieStore();
const genresList = store.genres;
const router = useRouter()

// 라우터 링크 사용시 글씨를 눌러야 입력, 버튼 자체에 라우터 기능 넣어 구현 버튼 영역만 눌러도 이동
const showGenre = (id) => {
    router.push({ name: 'genredetail', params: { genreId: id } });
}

</script>

<style scoped>

h1 {
    font-family: 'PyeongChangPeace-Bold';
    font-size: 3rem;
    margin-right: 2rem;
}

.genres-list {
    display: flex;
}

.genre-carousel {
    height: 20rem;
}

button {
    background-color: rgb(255, 87, 87);
    margin: 0.5rem;
}

button:hover {
    background-color: rgb(255, 227, 15);
}

a {
    text-decoration: none;
}

</style>