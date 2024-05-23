<template>
  <div class="community container">
    <div class="row row-handler">
      <div class="col col-md-9" style="display: flex; justify-content: center; align-items: center;" >
        <div class="input-group input-handler" style="text-align: center;">
          <div class="d-grid col-12 mx-auto">
                <!-- 선택한 항목 기본 선택 상태 방지 위해, required 속성 -->
                
                <!-- 내가 좋아요 한 영화 목록을 기준으로 생성된 POT을 보여줌 --> <!-- 영화의 제목이 아니라, id값을 넘겨 주어야 한다.(DB의 id값) -->
                <p>커뮤니티를 조회할 영화 목록을 선택하세요</p>
                <select required class="d-grid gap-2 col-12 mx-auto form-control" aria-labelledby="navbarDropdown" v-model="selectedMovie" @change="getMymovie()">  
                <option value="" disabled selected>조회할 영화를 선택하세요</option> 
                <option v-for="movie in likeMovies" :key="movie.id" :value="movie.id">{{ movie.title }}</option>  
                 </select>
              </div> 
        </div>
      </div>
      <div class="col-3">
        <CommunityCreate class="communitycreate" />    
      </div>
    </div>


    <div class="row row-handler">
      <div v-if="filteredCommunities.length">
        <CommunityList :communities="filteredCommunities"/>
      </div>
      <div v-else>
        <div class="empty">
          <img src="@/assets/empty_popcorn_box.png" alt="">
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { useCommunityStore } from "@/stores/community";
import { useUserStore } from "@/stores/users";
import CommunityList from "@/components/community/CommunityList.vue";
import CommunityCreate from "@/components/community/CommunityCreate.vue";

import axios from "axios";

const store = useCommunityStore();
const userStore = useUserStore()

const likeMovies=ref([])
const selectedMovie=ref('')

// 좋아요한 영화정보 가져오기
const getMymovie = async function () {

    if (userStore.token) {
      try {
        const response = await axios({
            method: "get",
            url: `${userStore.API_URL}/marshmovie/movies/likes`,
            headers: {
                Authorization: `Token ${userStore.token}` // 토큰을 헤더에 포함
            }
        });
        likeMovies.value = response.data;
        console.log(likeMovies.value);
    } catch (err) {
        console.log(err)}
    }
}

// 선택한 영화에 따른 커뮤니티 목록 필터링
const filteredCommunities = computed(() => {
  if (selectedMovie.value) {
    console.log(store.communities)
    console.log(selectedMovie.value)
    return store.communities.filter(community => community.movie === selectedMovie.value);
  }
  return store.communities;
});



// 랜더링시 커뮤니티 전체 목록 가져옴
onMounted(async() => {
  await getMymovie();
  await store.getCommunities();
});

</script>

<style scoped>
div {
  font-family: 'Pretendard-Regular';
}


.input-handler {
  text-align: center;
  /* height: 5rem; */
}
.search-input {
  width: 80%;
  border-radius: 5px;
  height: 3rem;
}

.community {
  background-color: none;
  position: relative;

}


.row-handler{
  margin-top: 2rem;
} 

.empty {
  position: absolute;
  top: 10rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  pointer-events: none;
}

img {
  width: 50%;
}
</style>
