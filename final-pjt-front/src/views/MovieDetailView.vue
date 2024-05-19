<template>
    <div>
        <div class="card">

            <div class="container" style="margin: 3rem 1rem;">
                <div class="row">
                    <!-- row 1 (total : 12) -->
                    <div class="col-6">
                        <img :src="getMoviePoster(movieDetail)" alt="#" style="width: 100%;">
                    </div>
                    <div class="col-6">
                        <h2> {{ movieDetail.title }} </h2>
                        <p>{{ movieDetail.original_title }}</p>
                        <button class="btn"
                            style="padding: 0rem 1rem; margin: 0.5rem; background-color: #FF6363; height: 2rem;"
                            v-for="genre of movieDetail.genres" :key="genre.id">
                            {{ genre.name }}
                        </button>
                        <p>평점 : {{ movieDetail.vote_average }}</p>
                        <p>{{ movieDetail.overview }}
                        </p>

                        <button class="btn btn-primary" @click="movieLikes(movieDetail.id)">{{ isLiked ? '좋아요 취소' : '좋아요' }}</button>
                        <p>좋아요 수: {{ likesCount }}</p>
                        <!-- 좋아요 눌렀을때 pot 보이게 생성하게 할건지 생각하기 또는 클릭시 좋아요 안눌렀으면, pot 생성안되게 처리 할건지 생각 -->
                        <CommunityCreate v-if='isLiked' class="communitycreate" />
                        <CommunityCreateDetail />
                    </div>

                    <!-- row 3 (total : 12) -->
                    <div class="col-12">
                        col-12 차지
                    </div>
                    <div class="col" style="background-color: #FAF5E4;">
                        (col, 남는 자리 자동 할당)
                    </div>
                    <div class="col-3" style="background-color: #FF6363;">
                        가능합니다..<br>(col-3)
                    </div>

                    <!-- row 유튜브링크 -->
                    <div class="col-12">
                        <YoutubeTrailer :movie="movieDetail" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { useMovieStore } from "@/stores/movies";
import { useUserStore } from "@/stores/users";
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



const fetchMovies = async (movieid) => {
    await store.getMovieDetail(movieid); // 데이터를 가져올 때까지 대기
    movieDetail.value = store.movieDetail
    console.log(movieDetail.value)
};

onMounted(() => {
    fetchMovies(movieId.value);
});


const getMoviePoster = movie => {
    if (movie.poster_path) {
        return imgBaseURL + movie.poster_path;
    } else {
        return ""; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
    }

}


const isLiked = ref(false);
const likesCount = ref(0);

// 영화 좋아요 기능//보낼때 정수로 변환해서 보내기
const movieLikes = function (movieId) {
    const movie_pk = parseInt(movieId, 10);
    const store = useUserStore();
    const token = store.token;
    axios({
        method: 'post',
        url: `${store.API_URL}/marshmovie/${movie_pk}/likes/`,
        headers: {
            Authorization: `Token ${token}` // 토큰을 헤더에 포함
        }
    })
        .then((response) => {
            console.log(response)
            isLiked.value = response.data.liked;
            likesCount.value = response.data.likes_count;
            console.log(isLiked.value)
            alert('좋아요 상태 변경 완료')
        })
        .catch(err => { alert('Error:', err.response ? err.response.data : err.message); })
}

</script>
<style scoped>
.communitycreate{
    width: 1rem;
}


</style>