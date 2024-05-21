<template>
  <div class="container" v-if="community">
    
    <div class="row">
      <div class="col-8">
        <h1>{{ community.title }}</h1>
      </div>
      <div class="col-4" style="text-align: right;">
        <button v-if="community.create_user == loginUser.pk"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update">수정하기</button>
        <button v-if="community.create_user == loginUser.pk"  @click="potDelete(community.id)" class="btn btn-primary">삭제하기</button>
      </div>
    </div>


    <div class="row">
      <div class="col col-sm-8 comunity-info card" style="border:red 1px solid; position: relative;">
        <p class="">POT : {{ community.title }}</p>
        <p>MOVIE : {{ community.movie_title }}</p>
        <p>POT 설명 : {{ community.content }}</p>
        <div style="position: absolute; right: 1rem; bottom: 0.5rem;">
          <img :src="marsh3" alt="좋아요" @click="like-community">
          <img :src="marsh2" alt="싫어요" @click="dislike-community">
        </div>
      </div>
      <div class="col col-sm-4">
        <div class="mb-3">
          <div>
          포트럭은 익명의 공간이예요.
          <br>
          좋아하는 영화 POT에서 자유롭게 놀아봐요!
          </div>
          <!-- 댓글 생성하기 -->

          <form @submit.prevent="createComment">
            <textarea cols="30" rows="10" v-model="commentContent" type="input" class="form-control" placeholder="파티에 참여해봐!&#13;&#10;* 생성시 삭제만 가능해요! 자유롭게 익명으로 소통하세요!" aria-label="Recipient's username" aria-describedby="button-addon2">
            </textarea>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="createComment">pot</button>
      
          </form>



        </div>
      </div>
    </div>
    <div class="row">
      <MovieComment />
    </div>
    
    <!-- 커뮤니티 정보 업데이트 모달창 --> 
    <CommunityUpdate style="z-index: 9999; " :community = "community"/>
  </div>
  
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/users";
import { useCommunityStore } from '@/stores/community'
import MovieComment from "@/components/community/MovieComment.vue";
import CommunityUpdate from '@/components/community/CommunityUpdate.vue';
import marsh2 from '@/assets/marsh2.png';
import marsh3 from '@/assets/marsh3.png';


const userStore = useUserStore();
const communityStore = useCommunityStore()
const route = useRoute();
const router = useRouter()

const commentContent=ref('')

const community = communityStore.communityInfo
const communityId = parseInt(route.params.communityId,10)
const loginUser = userStore.state.user

console.log(loginUser.pk)
console.log(community.create_user)

//커뮤니티 좋아요
const likeCommunity=function () {

  
}

//커뮤니티 싫어요
const dislikeCommunity = function () {
  
}

// 페이지 랜더링 되면서 커뮤니티 정보를 가져옴
onMounted(() => {
  communityStore.getCommunityInfo(communityId)
});


//POT 삭제하기
const potDelete = function (communityId) {
  // 정말 삭제하시겠습니까? 라고 물어보는거 추가하기
  communityStore.deleteCommunity(communityId)
  router.push({name:'community'})
}


// 댓글 생성하기
const createComment = () => {
  const payload = {
    content: commentContent.value,
    user: userStore.state.user.pk,
  };

  communityStore.createComment(payload, communityId)
    .then(() => {
      commentContent.value = '';
      alert('댓글생성완료')
      communityStore.getCommentList(communityId);
    })
    .catch((error) => {
      error.value = 'Failed to create comment';
      console.error(error);
    });
};



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

img {
  width: 3rem;
  border-radius: 1rem;
  margin: 1rem;
}
</style>
