<template>
  <div >
    <div id='pot' class='modal fade' ref="modalRef" aria-labelledby="random" tabindex = "-1" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: #242424;">
          <div class="modal-header">
          </div>

          <div class="modal-body" style="text-align: center;">
            <div class="d-grid col-12 mx-auto">
                <label for="username">POT 이름</label>
                <input class="form-control mx-auto" type="text" v-model.trim="communitytitle" placeholder="생성할 POT 이름을 적어주세요"/>
              </div>

              <div class="d-grid col-12 mx-auto">
                <label for="username">POT에 놀러와</label>
                <textarea cols="30" rows="10" class="form-control mx-auto" type="input" v-model.trim="communitycontent" placeholder="생성할 POT에 대한 설명을 적어주세요"/>
              </div>

              <div class="d-grid col-12 mx-auto">
                <!-- 선택한 항목 기본 선택 상태 방지 위해, required 속성 -->
                <select required class="d-grid gap-2 col-12 mx-auto form-control" aria-labelledby="navbarDropdown" v-model="selectedMovie">
                <option value="" disabled selected>POT을 생성할 영화를 선택하세요</option> 
                <option v-for="movie in likeMovies" :key="movie.id" :value="movie.id">{{ movie.title }}</option>
                <!-- 영화의 제목이 아니라, id값을 넘겨 주어야 한다.(DB의 id값) -->
              </select>
              </div> 
          </div>

          <div class="modal-footer">
            <button type="button" class="btn" style="background-color:red; color : white;" @click="createPOT">
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
import { ref, onMounted, watch } from 'vue';
import  { useCommunityStore } from '@/stores/community'
import  { useUserStore } from '@/stores/users'
import {useRouter} from 'vue-router'
import axios from "axios";

const API_URL= 'http://127.0.0.1:8000'

const store = useCommunityStore()
const router = useRouter()

const modalRef=ref(null)
const likeMovies=ref([])
const selectedMovie=ref('')

const communitytitle= ref('')
const communitycontent= ref('')

const userStore = useUserStore()

// 영화정보 가져오기
const getMymovie = async function () {
    try {
        const response = await axios({
            method: "get",
            url: `${API_URL}/marshmovie/movies/likes`,
            headers: {
                Authorization: `Token ${store.token}` // 토큰을 헤더에 포함
            }
        });
        likeMovies.value = response.data;
        console.log(likeMovies.value);
    } catch (err) {
        console.log(err)}
}

// 모달이 열릴 때 호출
const openModal = () => {
    getMymovie();
};

// watch를 이용해 modalRef 변경 감지
watch(modalRef, (newValue) => {
    if (newValue) {
        newValue.addEventListener('shown.bs.modal', openModal);
    }
});

// 커뮤니티 생성하기
const createPOT = async function () {
  const movie_id = parseInt(selectedMovie.value, 10);
  const payload = {
    title: communitytitle.value,
    content: communitycontent.value,
    movie: movie_id,
    create_user: userStore.state.user.pk,
  };
  try {
    const newCommunity =  await store.createCommunity(payload);
    const newcommunityId = newCommunity.id;
    console.log(newcommunityId);
  
    await router.push({ name: 'communitydetail', params: { communityId: newcommunityId } });

    communitytitle.value= null
    communitycontent.value= null
    selectedMovie.value=null
  } catch (err) {
    console.log('Error creating community:', err);
  }
};

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
