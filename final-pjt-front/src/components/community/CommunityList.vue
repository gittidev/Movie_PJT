<template>
  <div>
    <h3>커뮤니티 목록</h3>
    
    <CommunityCard
      v-for="community in store.communities"
      :key="community.id"
      :community="community"
    />
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/users";
import CommunityCard from "./CommunityCard.vue";

const store = useUserStore();
</script>

<style scoped></style>
