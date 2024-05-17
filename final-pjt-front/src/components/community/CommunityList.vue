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
import { useCounterStore } from "@/stores/counter";
import CommunityCard from "./CommunityCard.vue";

const store = useCounterStore();
</script>

<style scoped></style>
