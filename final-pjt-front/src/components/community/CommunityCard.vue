<template>
  <div>
    <h5>{{ community.id }}</h5>
    <p>{{ community.title }}</p>
    <p>{{ community.content }}</p>
    <RouterLink
      :to="{ name: 'communitydetail', params: { communityId: community.id } }"
    >
      [DETAIL]
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  community: Object,
});
</script>

<style scoped></style>
