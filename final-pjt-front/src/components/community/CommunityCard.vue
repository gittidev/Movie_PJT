<template>
  <div class="community-card">
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

<style scoped>

.community-card {
  background-color: aliceblue;
}

</style>
