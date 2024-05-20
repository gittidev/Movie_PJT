<template>
  <div >
    <div id='pot' class='modal fade' ref="modalRef" aria-labelledby="random" tabindex = "-1" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: #242424;">
          <div class="modal-header">
          </div>

          <div class="modal-body" style="text-align: center;">
            <div class="d-grid gap-2 col-12 mx-auto">
                <label for="username">POT 이름</label>
                <input class="form-control mx-auto" type="text" v-model.trim="communitytitle" placeholder="생성할 POT 이름을 적어주세요"/>
              </div>

              <div class="d-grid gap-2 col-12 mx-auto">
                <label for="username">POT에 놀러와</label>
                <input class="form-control mx-auto" type="text" v-model.trim="communitycontent" placeholder="생성할 POT에 대한 설명을 적어주세요"/>
              </div>
              <div>
                <!-- 선택한 항목 기본 선택 상태 방지 위해, required 속성 -->
                <select required class="d-grid gap-2 col-12 mx-auto form-control" aria-labelledby="navbarDropdown" v-model="likeMovies" @click="getMymovie">  
                <option value="" selected>좋아요한 영화를 선택하세요</option> 
                <option value="1">1번영화</option> 
                <option value="2">2번영화</option> 
                <!-- 영화의 제목이 아니라, id값을 넘겨 주어야 한다.(DB의 id값) -->
              </select>
              </div> 
          </div>

          <div class="modal-footer">
            <button type="button" class="btn" style="background-color:red; color : white;" @click="create">
              POT 생성하기
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import  { useCommunityStore } from '@/stores/community'
import {useRouter} from 'vue-router'
import axios from "axios";

const API_URL= 'http://127.0.0.1:8000'

const store = useCommunityStore()
const router = useRouter()


const modalRef=ref(null)
const likeMovies=ref([])
const communitytitle= ref('')
const communitycontent= ref('')

const create = function () {
  const movie_id= parseInt(likeMovies.value,10)
  const payload = {
    title : communitytitle.value,
    content : communitycontent.value,
    movie : movie_id
  }
  console.log(payload)
  store.createCommunity(payload)
  router.push({name:'communitydetail', params:{communityId:movie_id}})
  // 생성 후 router.push 이용해서 상세 페이지로 이동하기 구현필요
}


// 영화정보 가져오기
const getMymovie=function () {
  if (store.token) {
    axios({
      method: "get",
      url: `${API_URL}/marshmovie/movies/likes`,
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => console.log(err.message));
  } else {
    router.push({name:'login'})
    alert('로그인이 필요합니다.')
  }};


</script>



<style scoped>

.popcorn-img-bg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popcorn-img {
  width: 60%;
  margin: 2rem;
}

.modal-body {
  color: rgb(255, 255, 255);
}

.modal-content > * {
  border: none;
}
</style>