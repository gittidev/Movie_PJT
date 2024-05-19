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
import { useUserStore } from "@/stores/users";
import CommunityCardItem from "@/components/community/CommunityCardItem.vue";

const store = useUserStore();
</script>

<style scoped></style>
