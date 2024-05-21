<template>

  <div style="margin-top: 3rem;">
    <div class="create-handler">
      <!-- 로그인 되어있을때만 보임 -->
      <button class='create btn' v-if="store.token" data-bs-toggle="modal" data-bs-target="#pot" @click="checkLogin" >
        Pot 생성하기
      </button>

      <button v-else class='create btn' data-bs-toggle="modal" @click="checkLogin" >
        Pot 생성하기
      </button>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import  { useUserStore } from '@/stores/users'
import {useRouter} from 'vue-router'

const API_URL= 'http://127.0.0.1:8000'
const store = useUserStore()
const router = useRouter()




const checkLogin=function () {
  if (!store.token) {
    alert('로그인이 필요합니다.')
    router.push({name:'login'})
  } 
}


</script>

<style scoped >

.create-handler {
  position: relative;
}

.create {
  box-sizing: border-box;
  width: 15rem;
  height: 5rem;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 0, 0);
  font-size: 1.5rem;
  border-radius: 1rem;
  margin: 10px;
  padding: 0.5rem 2rem;
}

.create:hover {
  background-color: rgb(225, 255, 0);
  transition: 0.3s;
}




</style>