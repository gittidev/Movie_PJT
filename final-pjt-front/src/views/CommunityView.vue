<template>
  <div class="community container">
    <div class="row row-handler">
      <div class="col col-md-9" style="display: flex; justify-content: center; align-items: center;" >
        <div class="input-group input-handler" style="text-align: center;">
          <div class="d-grid col-12 mx-auto">
                <!-- 선택한 항목 기본 선택 상태 방지 위해, required 속성 -->
                
                <!-- 내가 좋아요 한 영화 목록을 기준으로 생성된 POT을 보여줌 -->
                <p>커뮤니티를 조회할 영화 목록을 선택하세요</p>
                <select required class="d-grid gap-2 col-12 mx-auto form-control" aria-labelledby="navbarDropdown" v-model="selectedMovie" @click="getMymovie">  
                <option value="" disabled selected>조회할 영화를 선택하세요</option> 
                <option v-for="movie in likeMovies" :key="movie.id" :value="movie.id">{{ movie.title }}</option>
                <!-- 영화의 제목이 아니라, id값을 넘겨 주어야 한다.(DB의 id값) -->
              </select>
              </div> 
        </div>
      </div>
      <div class="col-3">
        <CommunityCreate class="communitycreate" />    
      </div>
    </div>
    <div class="row row-handler">
      <div v-if="store.communities">
        <CommunityList />
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
import { onMounted } from "vue";
import { useCommunityStore } from "@/stores/community";
import CommunityCreate from "@/components/community/CommunityCreate.vue";

import CommunityList from "@/components/community/CommunityList.vue";

const store = useCommunityStore();

onMounted(() => {
  store.getCommunities();
  console.log(store.communities)
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
