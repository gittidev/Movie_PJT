<template>
  <div class="communityitem">
    <div class="container card">
      <div class="row">
        <div class="col">
          <img :src="community.movie_poster" class="" alt="...">
        </div>
        <div class="col">
          <h1>{{ community.title }}</h1>
          <p>{{ community.movie_title }}</p>
          <p class="card-text">{{ community.content }}</p>
          <button class='btn' @click="goPOT(community.id)">
            POT에 참여하기
          </button>
          <!-- <RouterLink :to="{ name: 'communitydetail', params: { communityId: community.id } }">
        
      </RouterLink> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";

const router=useRouter()
const goPOT = (communityId) => {
  console.log('click')
  router.push({ name: 'communitydetail', params: { communityId: communityId } })
}

const props = defineProps({
  community: Object,
});

</script>

<style scoped>
.communityitem{
  margin-top: 2rem;
}
.community-card {
  background-color: aliceblue;
}

.row {
  padding: 2rem 1rem;
}

button {
  background-color: rgb(128, 0, 255);

}

button:hover {
  background-color: rgb(255, 0, 0);
}
img {
  border-radius: 1rem;
}
</style>
