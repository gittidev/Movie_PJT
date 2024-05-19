<template>
  <div class="community">
    <CommunityCreate class="communitycreate"/>
    <CommunityCreateDetail/>
    
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
import { useUserStore } from "@/stores/users";
import CommunityCreate from "@/components/community/CommunityCreate.vue";
import CommunityCreateDetail from "@/components/community/CommunityCreateDetail.vue";
import CommunityList from "@/components/community/CommunityList.vue";

const store = useUserStore();

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
