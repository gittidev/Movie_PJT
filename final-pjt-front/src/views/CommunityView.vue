<template>
  <div class="community">
    <h1>커뮤니티</h1>
    <div v-if="store.communities">
      <CommunityList />
    </div>
    <div v-else>
      <img src="@/assets/sample1.jpg" alt="">
    </div>

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
  console.log(store.communities)
});

</script>

<style scoped>
.community {
  background-color: none;
  
}
</style>
