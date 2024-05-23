<template>
  <div >
    <div id='random-number' class='modal fade' ref="modalRef" aria-labelledby="random" tabindex = "-1" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: #242424;">
          <div class="modal-body" style="text-align: center;">
            <h1>랜덤 영화 번호 추천</h1>
            <br>
            <p>{{ randomNumber }}</p>
            <br>
            <button class="btn btn-primary" @click='generateRandomNumber'>번호 뽑기</button>
            <br>
            <br>
            <br>
            <h3>주의사항</h3>
            <p>로그인을 하지 않으셨다면<br>번호를 뽑아도 영화 정보를 확인할 수 없습니다!</p>
          </div>

          <div class="modal-footer">
            <RouterLink :to="{ name: 'moviedetail', params: { movieId: movieId }}" class="btn btn-primary">영화 정보 보러 가기</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useMovieStore } from '@/stores/movies'

const store = useMovieStore()

const dbSize = ref(0)
const randomNumber = ref('과연?')

const fetchDbSize = function () {
  axios({
    method: 'get',
    url: `${store.API_URL}/marshmovie/get_db_size/`
  })
    .then(response => {
      dbSize.value = response.data.dbsize
      // console.log(dbSize.value)
    })
    .catch(error => {
      console.error('There was an error fetching the DB size:', error)
    })
}

const movieId = ref(0)

const generateRandomNumber = function () {
  if (dbSize.value > 0) {
    randomNumber.value = Math.floor(Math.random() * dbSize.value) + 1;
  }

  const loadMovieId = function () {
    axios({
      method: 'get',
      url: `${store.API_URL}/marshmovie/movie-id-info/${randomNumber.value}/`
    })
    .then(res => {
      movieId.value = res.data.value
    })
    .catch(err => {
      console.log(err)
    })
  }

  loadMovieId()
}

onMounted(() => {
  fetchDbSize()
})
</script>

<style scoped>
.modal-body {
  color: rgb(255, 255, 255);
}

.modal-content > * {
  border: none;
}
</style>