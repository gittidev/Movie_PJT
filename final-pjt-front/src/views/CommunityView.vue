<template>
  <div class="checking">
    <h1>커뮤니티</h1>
    <!-- <RouterLink :to="{name:'communitydetail'}">커뮤니티 공간 이미지</RouterLink> -->
    <CommunityList />
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
import CommunityList from "@/components/community/CommunityList.vue";

const store = useCounterStore();

onMounted(() => {
  store.getCommunities();
});
</script>

<style scoped>
.checking {
  color: white;
}
</style>
