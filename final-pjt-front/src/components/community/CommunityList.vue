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

const store = useCommunityStore();
</script>

<style scoped></style>
