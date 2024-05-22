<template>
    <div style="padding: 5rem;">
        <div class="modal-body" style="text-align: center; font-size: 5rem;">
            오늘의 영화를 뽑아보세요!
            <div class="popcorn-img-bg">
              <img :src="popcornIconPath" alt="popcron그림" class="popcorn-img">

            </div>
              <button type="button" class="btn" style="background-color:#ff9d3d; color : white;" @click="startRandom">
              오늘의 영화 뽑기
              </button>
          </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movies'
import popcornIcon from '@/assets/popcorn.gif';
import axios from 'axios';

const popcornIconPath = popcornIcon

const store = useMovieStore()

const dbSize = ref(0)

const fetchDbSize = function () {
  axios({
    method: 'get',
    url: `${store.API_URL}/marshmovie/get_db_size/`
  })
    .then(response => {
      dbSize.value = response.data.dbsize
      console.log(dbSize.value)
    })
    .catch(error => {
      console.error('There was an error fetching the DB size:', error)
    })
}

onMounted(() => {
  fetchDbSize()
})
</script>

<style scoped>

</style>