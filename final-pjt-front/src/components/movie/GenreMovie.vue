<template>
    <div>
        <h1>장르별 영화</h1>
        <GenreDetail/>
    </div>
</template>

<script setup>
import GenreDetail from "@/components/movie/GenreDetail.vue"
import { useMovieStore } from "@/stores/movies";

const store = useMovieStore()
const genres = store.genres


</script>


