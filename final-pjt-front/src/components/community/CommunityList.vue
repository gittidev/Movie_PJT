<template>
  <div>
    <CommunityCardItem
      v-for="community in store.communities"
      :key="community.id"
      :community="community"
    />
  </div>
</template>

<script setup>
import { useCommunityStore } from "@/stores/community";
import CommunityCardItem from "@/components/community/CommunityCardItem.vue";
import { onMounted } from "vue";
const store = useCommunityStore();

onMounted(()=>{
  store.getCommunities()
})

</script>

<style scoped></style>
