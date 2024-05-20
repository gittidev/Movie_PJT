<template>
  <div class="container" v-if="community">
    <div class="row">
    <h1>{{ community.title }}</h1>
    </div>

    <div class="row">
      <div class="col-6" style="border:red 1px solid">
        <p>{{ community.title }}</p>
        <p>{{ community.movie_title }}</p>
        <p>{{ community.content }}</p>
        <p>{{ community.created_at }}</p>

      </div>
      <div class="col-6">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="파티에 참여해봐" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          <div>
            파티는 익명의 공간이예요. 좋아하는 영화를 기준으로 자유롭게 파티에서 놀아봐요!
          </div>
        </div>
       
      </div>
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

.container {
  margin: 2rem auto;
}

</style>
