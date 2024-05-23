<template>
  <div>
    <CommunityCardItem
    v-for="community in communities"
    :key="community.id"
    :community="community" 
  />

  </div>
</template>

<script setup>
import CommunityCardItem from "@/components/community/CommunityCardItem.vue";
import { defineProps } from "vue";

const props = defineProps({
  communities : Object
})

</script>

<style scoped>
div {
  margin: 10px;
}
</style>
