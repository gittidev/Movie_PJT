<template>
  <div class="communityitem">
    
    <div class="container card">

      <div class="row">
        <div class="col-5">
          <img :src="community.movie_poster" alt="...">
        </div>
        <div class="col" style="font-family: 'KCC-Hanbit';">
          <h1>{{ community.title }}</h1>
          <p>{{ community.movie_title }}</p>
          <p class="card-text">{{ community.content }}</p>
          <div style="display: flex; margin-block-end: 0;" >
              <button class='btn' @click="goPOT(community.id)" >
                POT에 참여하기
              </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router=useRouter()

//POT으로 이동하기
const goPOT = (communityId) => {
  console.log('click')
  router.push({ name: 'communitydetail', params: { communityId: communityId } })
}

const props = defineProps({
  community: Object,
});

</script>

<style scoped>

img {
  width: 100%;
}

.communityitem{
  margin-top: rem;
}
.community-card {
  background-color: aliceblue;
}

.row {
  padding: 2rem 1rem;
}

button {
  background-color: rgb(128, 0, 255);
  font-family: 'SOYOMapleBoldTTF';
  color:white;
  padding: 10px;
  margin: 10px
}

button:hover {
  background-color: rgb(255, 0, 0);
}
img {
  border-radius: 1rem;
}
</style>
