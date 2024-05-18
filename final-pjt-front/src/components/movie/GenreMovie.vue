<template>
    <div>
        <h1>장르별 영화</h1>
        <div class="genres-list">
            <button class='btn' v-for="genre of genresList" :key="genre.id">
                <RouterLink :to="{ name: 'genredetail', params: { genreId: genre.id } }">
                    {{ genre.name }}
                </RouterLink>
            </button>
        </div>
        <div class="genre-carousel">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movies";
import { ref } from "vue";

const store = useMovieStore();
const genresList = store.genres;
</script>

<style scoped>
.genres-list {
    display: flex;
}

.genre-carousel {
    border: 1px solid black;
    height: 20rem;
}

a {
    text-decoration: none;
}
</style>