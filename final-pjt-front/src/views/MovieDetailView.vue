<template>
    <div>
        영화상세정보

        <div class="container" style="background-color: gray;">
        <div class="row">
            <!-- row 1 (total : 12) -->
            <div class="col-6">
                <img :src="getMoviePoster(movieDetail)" alt="#"
                            style="width: 100%;">
            </div>
            <div class="col-6" >
                <p> {{ movieDetail.title }} </p>      
                <p>{{ movieDetail.original_title }}</p>
            <div v-for="genre of movieDetail.genres" :key="genre.id">
                {{ genre.name }}
            </div>
            <div>
                {{ movieDetail.vote_average }}
            </div>
            <div>
                {{ movieDetail.overview }}
            </div>
            <button class="btn btn-primary">좋아요</button>
            <!-- 좋아요 눌렀을때 pot 보이게 생성하게 할건지 생각하기 또는 클릭시 좋아요 안눌렀으면, pot 생성안되게 처리 할건지 생각 -->
            <CommunityCreate class="communitycreate"/>
            <CommunityCreateDetail/>
            </div>

                 <!-- row 3 (total : 12) -->
                 <div class="col-12">
                다음과 같이<br>(col-2)
            </div>
            <div class="col" style="background-color: #FAF5E4;">
                사용 또한<br>(col, 남는 자리 자동 할당)
            </div>
            <div class="col-3" style="background-color: #FF6363;">
                가능합니다..<br>(col-3)
            </div>
            <!-- row 유튜브링크 -->
            <div class="col-12" > 
                <YoutubeTrailer :movie="movieDetail"/>
            </div>
        

       
        </div>
    </div>

  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movies";
import { ref, onMounted, watch, onUpdated } from "vue";
import { useRoute } from "vue-router";
import CommunityCreate from "@/components/community/CommunityCreate.vue";
import CommunityCreateDetail from "@/components/community/CommunityCreateDetail.vue";
import YoutubeTrailer from "@/components/movie/YoutubeTrailer.vue";
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const store = useMovieStore();
const route = useRoute();

const movieId = ref(0);
const movieDetail = ref({})

movieId.value = route.params.movieId;


const fetchMovies = async (id) => {
    await store.getMovieDetail(id); // 데이터를 가져올 때까지 대기
    movieDetail.value = store.movieDetail
};


const getMoviePoster = movie => {
    if (movie.poster_path) {
        return imgBaseURL + movie.poster_path;
    } else {
        return ""; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
    }

}

onMounted(() => {
    fetchMovies(movieId.value);
});




























</script>

<style scoped></style>