<template>
    <header>
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
          <RouterLink :to="{name:'home'}"> 
              <img src="@/assets/MarchMovie_Title.png" alt="MarshMovieLogo" class="logo"/> 
          </RouterLink>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          data-bs-theme="dark">
            <span class="navbar-toggler-icon" ></span>
          </button>

          <div class="collapse navbar-collapse collapse-handler" id="navbarSupportedContent">
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
              
              <li class="nav-item dropdown" style="z-index: 999999;">
                <a href="#" class="nav-link dropdown-toggle link-font" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    추천
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><RouterLink :to="{name:'bestreview'}" class="nav-link">핫 리뷰</RouterLink></li>
                    <li><RouterLink :to="{name:'random'}" class="nav-link" >랜덤 추천</RouterLink></li>
                    <li><RouterLink :to="{name:'marshchat'}" class="nav-link">마쉬에게 물어봐</RouterLink></li>
                </ul>
              </li>
            </ul>
            <ul class="" ></ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink :to="{name:'login'}" class="nav-link link-font" >로그인</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink :to="{name:'signup'}" class="nav-link link-font">회원가입</RouterLink>
              </li>
              <li class="nav-item">
                <button class="nav-link link-font" data-bs-toggle="modal" data-bs-target="#logout">로그아웃</button>
              </li>
              <li class="nav-item">
                <button class="nav-link link-font" data-bs-toggle="modal" data-bs-target="#deleteUser">회원탈퇴</button>
              </li>
            </ul>
          </div> 
        </div> 

      </nav>
  
    </header>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";




</script>

<style scoped>

/*  눈누 폰트  */
@font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

header{
  z-index: 1;
  position: relative;
  height: 5rem;
  background-color:rgb(0, 0, 0);
  backdrop-filter: blur(50px);
}

img {
  height: 4rem;
  margin: 0;
}
.collapse-handler {
  background-color: rgb(0, 0, 0,0.7);
  border-radius: 0px 0px 15px 15px;
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
  font-family: 'PyeongChangPeace-Bold';
  font-size: 20px;
}

.link-font:hover {
  color : rgb(255, 0, 0);
}
</style>