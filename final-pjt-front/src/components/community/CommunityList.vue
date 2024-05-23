<template>
  <div>
    <CommunityCardItem
    v-for="community in communities"
    :key="community.id"
    :community="community" 
  />
  <!-- v-for="community in store.communities"
    :key="community.id"
    :community="community" -->
  </div>
</template>

<script setup>
import { useCommunityStore } from "@/stores/community";
import CommunityCardItem from "@/components/community/CommunityCardItem.vue";
import { defineProps } from "vue";

const store = useCommunityStore();

const props = defineProps({
  communities : Object
})

</script>

<style scoped>
div {
  margin: 10px;
}
</style>
