import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useMovieStore = defineStore("movie", () => {
    const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
    const API_URL = "https://api.themoviedb.org/3/movie";

    const todayMovies = ref([]);
    const weeklyMovies = ref([])


//   오늘의 영화=현재 상영중영화
  const getMovies = function () {
     return axios({
      method: "get",
      url: API_URL +'/now_playing',
      params: {
        page : 1,
        language: "ko-KR",
        include_adult: false
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`
      }
    })
      .then((res) => {
        todayMovies.value = res.data.results;
        // console.log(todayMovies.value)
      })
      .catch((err) => console.log(err));
  };

  // 이번주 영화 = 랭킹 순위로 추천// 불러온 이후 랜덤으로 배열 배치 = > 
  const getWeeklyMovies = function () {
    return axios({
     method: "get",
     url: API_URL +'/top_rated',
     params: {
       page : 1,
       language: "ko-KR",
       include_adult: false
     },
     headers: {
       accept: "application/json",
       Authorization: `Bearer ${TMDB_TOKEN}`
     }
   })
     .then((res) => {
      weeklyMovies.value = res.data.results;
      //  console.log(weeklyMovies.value)
     })
     .catch((err) => console.log(err));
 };

  return { todayMovies, TMDB_TOKEN, API_URL, getMovies, weeklyMovies, getWeeklyMovies };
});
