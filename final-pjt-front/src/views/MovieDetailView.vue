<template>
    <div>
        <div class="card">

            <div class="container" style="margin: auto; margin-top: 4rem;">
                <div class="row">
                    <!-- row 1 (total : 12) -->
                    <div class="col-6">
                        <img :src="getMoviePoster(movieDetail)" alt="#" style="width: 100%;">
                    </div>
                    <div class="col-6">
                        <h1> {{ movieDetail.title }} </h1>
                        <div class="row">
                            <div class="col-6">
                            <p>{{ movieDetail.original_title }}</p>
                        <p>{{ movieDetail.release_date }}</p>
                        <p>평점 : {{ movieDetail.vote_average }}</p>
                        <button class="btn"
                            style="padding: 0rem 1rem; margin: 0.5rem; background-color: #FF6363; height: 2rem;"
                            v-for="genre of movieDetail.genres" :key="genre.id">
                            {{ genre.name }}
                        </button>
                        </div>
                        <div class="col">
                                <!-- 좋아요 눌렀을때 pot 보이게 생성 -->
                                <CommunityCreate v-if='isLiked' class="communitycreate" />
                        </div>


                        </div>
                        
                      
                        <p>
                            {{ movieDetail.overview }}
                        </p>
                       
                        <div class="row">
                            <div class="col-5"> 좋아요 수: {{ likesCount }}</div>
                            <div class="col">
                                <button class="btn btn-warning" @click="movieLikes(movieDetail.id)">{{ isLiked ? '좋아요 취소' : '좋아요' }}</button>
                            </div>
                     
                        </div>
                        <!-- <CommunityCreateDetail /> -->
                    </div>

                    <!-- row 3 (total : 12) -->
                    <div class="col-12">
                       커뮤니티 목록 들어갈 예정

                    </div>
              

                    <!-- row 유튜브링크 -->
                    <div class="col-12">
                        <!-- <YoutubeTrailer :movie="movieDetail" /> -->
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
import emptyPopcornBox from '@/assets/empty_popcorn_box2.png';


const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const store = useMovieStore();
const userstore = useUserStore()
const route = useRoute();
const movieId = ref(0);
const movieDetail = ref({})
const token = userstore.token
// console.log(token)
movieId.value = route.params.movieId;

const isLiked = ref(false);
const likesCount = ref(0);




//DB에 추가로 저장하기
const fetchMovies = async (movieid) => {
    await store.getMovieDetail(movieid); // 데이터를 가져올 때까지 대기
    movieDetail.value = store.movieDetail
    console.log(movieDetail.value)
    const genreIdsString = `[${movieDetail.value.genres.map(genre => genre.id).join(', ')}]`
    axios({
        method: 'post',
        url: `${store.API_URL}/marshmovie/db_check/${movieid}/`,
        headers: {
            Authorization: `Token ${token}`
        },
        data: {
            adult: movieDetail.value.adult,
            movie_id: movieDetail.value.id,
            title: movieDetail.value.title,
            backdrop_path: movieDetail.value.backdrop_path,
            genre_ids: genreIdsString,
            overview: movieDetail.value.overview,
            poster_path: movieDetail.value.poster_path,
            release_date: movieDetail.value.release_date,
            original_title: movieDetail.value.original_title,
            vote_average: movieDetail.value.vote_average,
        }
    })
        .then(res => {
            console.log('DB 추가 완료!')
        })
        .catch(err => {console.log(err.response.data)})
};

onMounted(() => {
    fetchMovies(movieId.value);
    //마운트 시점에 최초로 좋아요 정보 가져옴
    userstore.getUserInfo()
    isLiked.value = store.movieLike;
    likesCount.value = store.movieLikeCount;
    console.log('Initial isLiked:', isLiked.value);
    console.log('Initial likesCount:', likesCount.value);
});




// 영화포스터 가져오기
const getMoviePoster = movie => {
    if (movie.poster_path) {
        return imgBaseURL + movie.poster_path;
    } else {
        return emptyPopcornBox; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
    }

}

// 좋아요 기능 반영하기

const movieLikes = async function (movieId) {
    const movie_pk = parseInt(movieId, 10);
    await store.movieLikes(movie_pk)
};

watch(() => store.movieLike, newValue => {
    isLiked.value = newValue;
});

watch(() => store.movieLikeCount, newValue => {
    likesCount.value = newValue;
});






</script>



<style scoped>

h1{
    font-family: 'KCC-Hanbit';
    font-weight: 800;
}
div {
    font-family: 'Pretendard-Regular';
    font-size: 1.5rem;
}
.communitycreate{
    width: 1rem;
}


</style>