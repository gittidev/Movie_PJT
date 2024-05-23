<template>
    <div>
        <div v-if="isLoading" style="display: flex; align-items: center; justify-content: center;">
            <img src="@/assets/empty_popcorn_box2.png" alt="" style="width: 50%; display: block;">
            <h2 style="font-family: 'LOTTERIACHAB'; display: block;">로딩 중...</h2>
        </div>
        <div v-else>
            <div>
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
                                    <button class="btn btn-warning" @click="toggleMovieLike">{{ isLiked ? '좋아요 취소' : '좋아요' }}</button>
                                </div>
                            </div>
                        </div>

                        <!-- row 3 (total : 12) -->
                        <div class="col-12" style="margin-top: 30px;">
                            <div style="font-family: 'KCC-Hanbit;">
                                <h2>POT 목록</h2>
                            </div>
                            
                            <div v-for="community of communities" class="card" style="min-height: 50px; height: auto; padding : 20px;">
                                
                                <div>POT : {{community.title}}
                                    <button @click="goCommunity(community.id)" class="btn btn-primary" style="margin-left: 20px;"> POT 참여하기 </button>
                                </div>
                                <p>
                                    {{community.content}}
                                </p>
                                
                            </div>
                        </div>

                        <!-- row 유튜브링크 -->
                        <div class="col-12" style="margin-bottom: 100px;">
                            <YoutubeTrailer :movie="movieDetail" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { useMovieStore } from "@/stores/movies";
import { useUserStore } from "@/stores/users";
import { ref, onMounted } from "vue";
import { useRoute, useRouter, RouterLink  } from "vue-router";
import { useCommunityStore } from "@/stores/community";
import CommunityCreate from "@/components/community/CommunityCreate.vue";
import emptyPopcornBox from '@/assets/empty_popcorn_box2.png';
import YoutubeTrailer from '@/components/movie/YoutubeTrailer.vue';


const isLoading = ref(true)
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const store = useMovieStore();
const userstore = useUserStore();
const communitystore = useCommunityStore();
const route = useRoute();
const router = useRouter();
const movieId = ref(0);
const movieDetail = ref({});
const token = ref(userstore.token);
const communities = ref([])
//커뮤니티로 이동
const goCommunity = function (communityId) {
    router.push({name:'communitydetail', params:{communityId:communityId}})
}


// 프론트 페이지 구현을 위한 변수
const isLiked = ref(false);
const likesCount = ref(0);

// 실제 좋아요 값 조회를 위한 instance
const dbmovie = ref([]);

// 현재 로컬스토리지에 저장된 로그인된 사용자 데이터
const loginUserPK = ref('')

movieId.value = route.params.movieId;

// DB에 추가로 저장하기
const fetchMovies = async (movieid) => {
    try {
        await store.getMovieDetail(movieid);
        movieDetail.value = store.movieDetail;
        const genreIdsString = `[${movieDetail.value.genres.map(genre => genre.id).join(', ')}]`;
        await axios({
            method: 'post',
            url: `${store.API_URL}/marshmovie/db_check/${movieid}/`,
            headers: {
                Authorization: `Token ${token.value}`
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
        });
        isLoading.value = false;
        console.log('db추가완료');
    } catch (err) {
        alert('로그인이 필요합니다.')
        // alert('새로운 영화 정보 저장을 위해 로그인 필요하거나, 이미 DB에 저장된 정보입니다.');
    }
};

// 개별영화 정보 가져오기 //좋아요 정보 가져오기 위함
const getDbMovieDetail = async function (movie_id) {
    try {
        const response = await axios({
            method: 'get',
            url: `${userstore.API_URL}/marshmovie/movies/${movie_id}/`,
        });
        dbmovie.value = response.data;
        console.log(response.data, '좋아요한 영화 정보를 가져왔습니다.');
        likesCount.value = response.data.like_users.length; // 좋아요를 누른 사람의 개수
        isLiked.value = response.data.like_users.some(user => user === loginUserPK.value);
        isLoading.value = false;
    } catch (err) {
        console.error('Error:', err.response ? err.response.data : err.message);
    }
}

// 영화별 커뮤니티 가져오기
const fetchCommunities = async function () {
    try {
        await communitystore.getCommunities();
        communities.value = communitystore.communities.filter(community => community.movie === dbmovie.value.id);
    } catch (err) {
        console.error('Error fetching communities:', err.response ? err.response.data : err.message);
    }
}

onMounted(async () => {
    try {
        await fetchMovies(movieId.value);
        // 마운트 시점에 최초로 좋아요 정보 가져옴
        await userstore.getUserInfo();
        await getDbMovieDetail(movieId.value);
        await fetchCommunities();

        if (!userstore.token) {
            alert('로그인이 필요합니다.')
            router.push({ name: 'login' });
        } else {
            loginUserPK.value = userstore.state.user.pk;
        }
    } catch (err) {
        alert('페이지 로딩 중 오류가 발생했습니다.');
    }
});

communities.value = communitystore.communities.filter(function (community) {
    return community.movie === movieId;
});

// 영화포스터 가져오기
const getMoviePoster = movie => {
    if (movie.poster_path) {
        return imgBaseURL + movie.poster_path;
    } else {
        return emptyPopcornBox;
    }
}

// 좋아요 기능 반영하기
const toggleMovieLike = async function () {
    const movie_pk = parseInt(movieId.value, 10);
    if (userstore.token) {
        try {
            await store.movieLikes(movie_pk);
            // 현재 좋아요 상태를 토글
            isLiked.value = !isLiked.value;
            await getDbMovieDetail(movieId.value);
        } catch (err) {
            console.error('Error toggling movie like:', err.response ? err.response.data : err.message);
            alert('좋아요를 반영하는 중 오류가 발생했습니다.');
        }
    } else {
        alert('로그인이 필요합니다');
    }
};
</script>

<style scoped>
h1 {
    font-family: 'KCC-Hanbit';
    font-weight: 800;
}
div {
    font-family: 'Pretendard-Regular';
    font-size: 1.5rem;
}
.communitycreate {
    width: 1rem;
}
</style>