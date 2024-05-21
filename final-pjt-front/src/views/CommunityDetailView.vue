<template>
  <div class="container" v-if="community">
    
    <div class="row">
      <div class="col-8">
        <h1>{{ community.title }}</h1>
      </div>
      <div class="col-4" style="text-align: right;">
        <button class="btn btn-primary">수정하기</button>
        <button class="btn btn-primary">삭제하기</button>
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
          <input type="textarea" class="form-control" placeholder="파티에 참여해봐" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
       
      </div>
    </div>
    
    <div class="row">
      <p>생성일 : {{ community.created_at }}</p>
    </div>
    <div class="row">
      <MovieComment />
    </div>

    
  </div>

</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/users";
import { useCommunityStore } from '@/stores/community'
import MovieComment from "@/components/community/MovieComment.vue";

const userStore = useUserStore();
const communityStore = useCommunityStore()
const route = useRoute();
const community = ref(null);

// 페이지 랜더링 되면서 커뮤니티 정보를 가져옴
onMounted(() => {
  // const communityId = parseInt(communityStore.newCommunity.id, 10)
  axios({
    method: "get",
    url: `${userStore.API_URL}/marshmovie/communities/${route.params.communityId}/`,
  })
    .then((res) => {
      community.value = res.data;
    })
    .catch((err) => console.log(err));
});

// 페이지 랜더링 되면서 DB 기준 영화 상세 정보도 가져옴
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
