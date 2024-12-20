import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from './users';
import { useRouter } from 'vue-router'

export const useMovieStore = defineStore("movie", () => {
  const userStore = useUserStore();
  const TOKEN = ref(userStore.token)
  const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
  const TMDB_URL = "https://api.themoviedb.org/3/movie";
  const API_URL= 'http://127.0.0.1:8000'

  const router=useRouter()
  const todayMovies = ref([]);
  const weeklyMovies = ref([]);
  const Movies = ref([]);
  const genres = ref([]);
  const movieLikeCount = ref(0)
  const movieDetail = ref([])

  // 장르가져오기 앱 mounted 됐을때 가져옴
  const getGenres = function () {
    return axios({
      method: "get",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
      params: {
        language: "ko",
      },
    })
      .then((res) => {
        genres.value = res.data.genres;
        // console.log(genres.value)
      })
      .catch((err) => console.log(err));
  }
  
  // 오늘의 영화=현재 상영중영화
  const getMovies = function () {
    return axios({
      method: "get",
      url: TMDB_URL + "/now_playing",
      params: {
        page: 1,
        language: "ko-KR",
        include_adult: false,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    })
      .then((res) => {
        todayMovies.value = res.data.results;
        // console.log(todayMovies.value)
      })
      .catch((err) => console.log(err));
  };

  // 이번주 영화 = 랭킹 순위로 추천
  const getWeeklyMovies = function () {
    return axios({
      method: "get",
      url: TMDB_URL + "/top_rated",
      params: {
        page: 1,
        language: "ko-KR",
        include_adult: false,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    })
      .then((res) => {
        weeklyMovies.value = res.data.results;
      })
      .catch((err) => console.log(err));
  };

  //TMDB 사용해서 상세정보 가져오기
  const getMovieDetail = function (movieId) {
    return axios({
      method: "get",
      url: TMDB_URL + `/${movieId}`,
      params: {
        language: "ko-KR",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    })
      .then((res) => {
        movieDetail.value = res.data;
        
      })
      .catch((err) => console.log(err));
  };

  //  장르별 영화는 자체DB를 기준으로 가져옴
  const getDatabaseMovie = function () {
    axios({
      method: "get",
      url: `${API_URL}/marshmovie/movies/`,
    })
      .then((res) => {
        res.data.forEach((genre) => {
          // 장르 아이디를 배열로 변환
          genre.genre_ids = JSON.parse(genre.genre_ids).map(String);
        });
        Movies.value = res.data;
      })
      .catch((err) => console.log(err));
  };

  //영화 좋아요 기능
  const isLiked = ref(false)
  const movieLikes =  function (movie_pk) {
      return axios({
        method: 'post',
        url: `${API_URL}/marshmovie/${movie_pk}/likes/`,
        headers: {
            Authorization: `Token ${userStore.token}` // 토큰을 헤더에 포함
        },
      })
        .then((response) =>{
          console.log(response.data.liked);
          alert('좋아요 상태 변경 완료');
        })
        .catch ((err) => {
          router.push({name : 'login'});
          alert('로그인이 필요합니다.');  
          
        })
  }
  
  return {
    TMDB_TOKEN,
    API_URL,
    getGenres,
    genres,
    getMovies,
    todayMovies,
    getWeeklyMovies,
    weeklyMovies,
    getDatabaseMovie,
    Movies,
    getMovieDetail,
    movieDetail,
    movieLikes,
    movieLikeCount,
    isLiked,    
  }}, { persist:true });
  
