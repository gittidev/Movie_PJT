<template>
    <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
          <RouterLink :to="{name:'home'}"> 
              <img src="@/assets/MarshMovie_logo.png" alt="MarshMovieLogo" class="logo"/> 
          </RouterLink>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          data-bs-theme="dark">
            <span class="navbar-toggler-icon" ></span>
          </button>

          <div class=" navbar-collapse collapse-handler" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink :to="{name:'movie'}" class="nav-link link-font">영화</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink :to="{name:'search'}" class="nav-link link-font" >영화검색</RouterLink>
              </li>

              <li class="nav-item">
                <RouterLink :to="{name:'community'}" class="nav-link link-font" >포트럭</RouterLink>
              </li>
              
              <li class="nav-item dropdown " style="z-index: 999999;">
                <a href="#" class="nav-link dropdown-toggle link-font" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    추천
                </a>
                <ul class="dropdown-menu  dropdown-handler" aria-labelledby="navbarDropdown">
                    <li><RouterLink :to="{name:'bestreview'}" class="nav-link link-font2">핫 리뷰</RouterLink></li>
                    <li><RouterLink :to="{name:'random'}" class="nav-link link-font2" >랜덤 추천</RouterLink></li>
                    <li><RouterLink :to="{name:'marshchat'}" class="nav-link link-font2">마쉬에게 물어봐</RouterLink></li>
                </ul> 
              </li>
            </ul>
            <ul class="" ></ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- 로그인 되어있을 때 화면 -->
        
              <li v-if="!isAuthenticated" class="nav-item">
                <RouterLink :to="{name:'login'}" class="nav-link link-font" >로그인</RouterLink>
              </li>
              <li v-if="!isAuthenticated" class="nav-item">
                <RouterLink :to="{name:'signup'}" class="nav-link link-font">회원가입</RouterLink>
              </li>

              
              <!-- 로그인 안되어있을때 화면 -->
              <span v-else style="display:flex">
                <li class="nav-item">
                <button class="nav-link link-font" @click="goProfile">프로필</button>
                </li>
                <li class="nav-item">
                <button class="nav-link link-font" data-bs-toggle="modal" data-bs-target="#logout">로그아웃</button>
                </li>
                <li class="nav-item">
                  <button class="nav-link link-font" data-bs-toggle="modal" data-bs-target="#deleteUser">회원탈퇴</button>
                </li>
              </span>
                
            </ul>
          </div> 
        </div> 

      </nav>
  
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useUserStore } from '@/stores/users'

const store = useUserStore()
const router = useRouter()
const isAuthenticated=computed(() => store.state.isAuthenticated)
const user=computed(() => store.state.user);

// console.log(user.value)

// 프로필 이동 함수
const goProfile = function () {
  if (user.value && user.value.pk) {
    router.push({ name: 'profile', params: { userId: user.value.pk } });
  } else {
    console.error('User is not authenticated or user ID is missing.');
  }
}


</script>

<style scoped>

.navbar {
  width: 100%;
}

header{
  z-index: 9;
  height: 5rem;
  background-color:rgb(0, 0, 0);
  backdrop-filter: blur(50px);
  position: fixed;
  top: 0;
  width: 100%;
}

nav {
  position: relative;
  z-index: 10;
}
img {
  height: 4rem;
  margin: 0;
}
.collapse-handler {
  background-color: rgb(0, 0, 0,0.7);
  border-radius: 0px 0px 15px 15px;
}

.dropdown-handler {
  padding :1rem;
  background-color: rgb(0, 0, 0,0.7);
  border-radius: 15px 15px;
  width: 90%;
}

ul > li {
  color: white;
}

.link-handler {
  position: absolute;
  width: 60rem;
  bottom: 0;
  right: 0rem;
}

.link-font {
  margin: 0 1rem;
  bottom: 0;
  color : rgb(255, 255, 255);
  font-family: 'SOYOMapleBoldTTF';
  font-size: 20px;
}

.link-font:hover {
  color : rgb(255, 0, 0);
}

.link-font2 {
  font-family: 'PyeongChangPeace-Bold';
  font-size: 1.5rem;
  color : rgb(217, 255, 0);
}
</style>