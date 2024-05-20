<template>
  <div class="search-body">
    <div class="search-section">
      <div class="bar-handler">
        <div class="input-group">
          <div class="col-8">
            <input
              type="text"
              v-model="searchQuery"
              class="search-input"
              v-on:keyup.enter="searchMovies"
              placeholder="영화를 검색하세요"/>
          </div>
          <button type="button" @click="searchMovies" class="btn">검색</button>
        </div>
      </div>
    </div>
    <div class="search-section">
      <div style="display: flex; flex-wrap: wrap; justify-content: center">
        <div v-if="movies.length === 0" style="color: white">
          검색 결과가 없어요 ㅠ
        </div>

        <!-- 결과가 있으면 이미지 보여주기 -->
        <div v-else v-for="movie of movies" :key="movie.id" style="color: white">
            <div class="card card-handler">
              <img :src="getMoviePoster(movie)" alt="" @click="goDetail(movie.id)"/>
            </div>
          </div>
          </div>
        </div>
      </div>

</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import emptyPopcornBox from '@/assets/empty_popcorn_box2.png';

const router= useRouter()

const tmdbkey = import.meta.env.VITE_APP_TMDB_KEY;
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const searchQuery = ref("");
const movies = ref([]);
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const searchMovies = () => {
  console.log("클릭발생");
  const query = searchQuery.value.replace(/\s+/g, "+");
  console.log(query);
  axios({
    method: "get",
    url: BASE_URL,
    params: {
      query: query,
      // langauge : ko-KR,
      include_adult: false
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`
    }
  })
    .then(response => {
      console.log("검색성공");
      console.log(response.data);
      movies.value = response.data.results;
    })
    .catch(error => {
      console.error("API 호출 중 에러 발생:", error);
    });
};

// 영화 포스터 이미지 가져오기
const getMoviePoster = movie => {
  if (movie.poster_path) {
    return imgBaseURL + movie.poster_path;
  } else {
    return emptyPopcornBox; // 포스터 경로가 없는 경우 빈 문자열 반환 나중에 빈 이미지 asset 찾아서 반영하기
  }
};


// 상세정보 이동하기
const goDetail = function (movieId) {
    console.log('클릭')
    router.push({ name: 'moviedetail', params: { movieId: movieId } });
}

</script>

<style scoped>
.search-body {
  padding: 3rem;
}

.search-section {
  width: 100%;
  border-bottom: 1px solid #ccc;
  /* 각 섹션을 구분하는 테두리 */
  padding: 20px;
  /* 내부 여백 */
  box-sizing: border-box;
}

.bar-handler {
  top: 7rem;
  width: 100%;
}

.search-input {
  border-radius: 10px 0 0 10px;
  height: 4rem;
  width: 100%;
}
.card-handler {
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

img {
  width: 18rem;
  height: 24rem;
  border-radius: 10px;
}

button {
  border-radius: 0px 10px 10px 0px;
  background-color: rgb(255, 77, 77);
  width: 4rem;
  height: 4rem;
}

button:hover {
  background-color: rgb(0, 200, 160);
  transition: 500ms;
}
</style>
