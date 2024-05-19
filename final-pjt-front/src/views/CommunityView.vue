<template>
  <div class="community container">
    <div class="row row-handler">
      <div class="col col-md-9" style="display: flex; justify-content: center; align-items: center;" >
        <div class="input-group input-handler" style="text-align: center;">
          <input type="text" class="search-input" placeholder="POT을 검색하세요" />
          <button type="button" class="btn btn-primary">
            <i class="bi bi-search"></i>검색
          </button>
        </div>
      </div>
      <div class="col-3">
        <CommunityCreate class="communitycreate" />
        <CommunityCreateDetail />
      </div>
    </div>
    <div class="row row-handler">
      <div v-if="store.communities">
        <CommunityList />
      </div>

      <div v-else>
        <div class="empty">
          <img src="@/assets/empty_popcorn_box.png" alt="">
        </div>
      </div>

    </div>




  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import { useCommunityStore } from "@/stores/community";
import CommunityCreate from "@/components/community/CommunityCreate.vue";
import CommunityCreateDetail from "@/components/community/CommunityCreateDetail.vue";
import CommunityList from "@/components/community/CommunityList.vue";

const store = useCommunityStore();

onMounted(() => {
  store.getCommunities();
  console.log(store.communities)
});

</script>

<style scoped>

.input-handler {
  text-align: center;
  /* height: 5rem; */
}
.search-input {
  width: 80%;
  border-radius: 5px;
  height: 3rem;
}

.community {
  background-color: none;
  position: relative;

}


.row-handler{
  margin-top: 2rem;
} 

.empty {
  position: absolute;
  top: 10rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  pointer-events: none;
}

img {
  width: 50%;
}
</style>
