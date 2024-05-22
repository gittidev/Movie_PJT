<template>
  <div class="app-body">
    <HeaderNavbar class="header"/>
   
    <!-- 라우터 뷰 구성 -->
    <div class="router-view">
      <RouterView/>
    </div>
    
    <!-- logOut Modal -->
    <div class="modal fade" id="logout" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            로그아웃 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary" @click="logOut" data-bs-dismiss="modal">로그아웃</button>
          </div>
        </div>
      </div>
    </div>

    <!-- delete Modal -->
    <div class="modal fade" id="deleteUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            회원탈퇴 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary" @click="deleteUser" data-bs-dismiss="modal">탈퇴하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CommunityCreateDetail />
  <RandomRecommendModal />
</template>

<script setup>
import HeaderNavbar from '@/components/common/HeaderNavbar.vue'
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from 'vue'
import { useMovieStore } from "@/stores/movies";
import { useUserStore } from "@/stores/users";
import CommunityCreateDetail from "@/components/community/CommunityCreateDetail.vue";
import RandomRecommendModal from '@/components/Recommend/RandomRecommendModal.vue'

const Moviestore = useMovieStore()
const Userstore = useUserStore()

onMounted(() => {
  Moviestore.getGenres()
  Userstore.getUserInfo()
})

const logOut = ()=>{
  Userstore.logOut()
}

const deleteUser =() =>{
  Userstore.deleteUser()
}


</script>

<style>
.app-body {
  width: 100%;
  height: 100%;
}

.router-view {
  margin-top: 70px;
}
/* 라이트 다크 테마 토글 */
</style>
