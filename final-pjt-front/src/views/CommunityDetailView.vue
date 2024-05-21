<template>
  <div class="container" v-if="community">
    
    <div class="row">
      <div class="col-8">
        <h1>{{ community.title }}</h1>
      </div>
      <div class="col-4" style="text-align: right;">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update">수정하기</button>
        <button @click="potDelete(community.id)" class="btn btn-primary">삭제하기</button>
      </div>
    </div>

   
    <div class="row">
      <div class="col col-sm-8 comunity-info card" style="border:red 1px solid">
        <p class="">POT : {{ community.title }}</p>
        <p>MOVIE : {{ community.movie_title }}</p>
        <p>POT 설명 : {{ community.content }}</p>
      </div>
      <div class="col col-sm-4">
        <div class="mb-3">
          <div>
          파티는 익명의 공간이예요.
          <br>
          좋아하는 영화 POT에서 자유롭게 놀아봐요!
          </div>
          <input v-model="comment" type="textarea" class="form-control" placeholder="파티에 참여해봐!" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="createComment">Button</button>
      
        </div>
       
      </div>
    </div>
    <div class="row">
      <MovieComment />
    </div>

    <CommunityUpdate style="z-index: 9999;"/>
  </div>
  
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/users";
import { useCommunityStore } from '@/stores/community'
import MovieComment from "@/components/community/MovieComment.vue";
import CommunityUpdate from '@/components/community/CommunityUpdate.vue';


const userStore = useUserStore();
const communityStore = useCommunityStore()
const route = useRoute();
const community = communityStore.communityInfo
const comment = ref('')
const communityId = route.params.communityId



// 페이지 랜더링 되면서 커뮤니티 정보를 가져옴
onMounted(() => {
  communityStore.getCommunityInfo(communityId)
});

// 페이지 랜더링 되면서 DB 기준 영화 상세 정보도 가져옴
//해당 영화정보로 이동하기 기능


//POT 삭제하기
const potDelete = function (communityId) {
  // 정말 삭제하시겠습니까? 라고 물어보는거 추가하기
  communityStore.deleteCommunity(communityId)
}


//댓글 생성하기
const createComment =  function () {
  
}

</script>

<style scoped>
button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-family: 'Pretendard-Regular';
  font-size: 20px;
  border-radius: 10px;
}

h1 {
  font-family: 'SOYOMapleBoldTTF';
  margin: 10px;
}

.container {
  margin: auto;
  margin-top: 7rem;
  font-family: 'Pretendard-Regular';
}

div {
  font-size: 20px;
}

.comunity-info {
  box-sizing: border-box;
  font-family: 'Pretendard-Regular';
  font-size: 30px;
  padding:2rem 2rem ;
}
</style>
