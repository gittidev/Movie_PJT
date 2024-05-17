<template>
  <div class="checking2">
    <h1>커뮤니티 세부사항</h1>
    <CommunityInfoCard />
    <MovieComment />
    <div v-if="community">
      <p>{{ community.id }}</p>
      <p>{{ community.title }}</p>
      <p>{{ community.content }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import CommunityInfoCard from "@/components/community/CommunityInfoCard.vue";
import MovieComment from "@/components/community/MovieComment.vue";

const store = useCounterStore();
const route = useRoute();
const community = ref(null);

onMounted(() => {
  axios({
    method: "get",
    url: `${store.API_URL}/marshmovie/communities/${route.params.communityId}/`,
  })
    .then((res) => {
      community.value = res.data;
    })
    .catch((err) => console.log(err));
});
</script>

<style scoped>
.checking2 {
  color: white;
}
</style>
