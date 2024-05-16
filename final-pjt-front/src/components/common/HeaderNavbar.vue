<template>
    <header>
 <!-- 컴포넌트 최상위 -->
    <nav class="navbar navbar-expand-md ">
      <div class="container-fluid">
            
          <RouterLink :to="{name:'movie'}"> 
              <img src="@/assets/MarchMovie_Title.png" alt="MarshMovieLogo" class="logo"/> 
          </RouterLink>
      
          <button class="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon primary-second"></span>
          </button>


          <div class="collapse navbar-collapse link-handler" id="navbarSupportedContent">
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
              
              <li class="nav-item dropdown">
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

nav {
  position: relative;
  height: 5rem;
  background-color:rgba(255,255,255,0.1);
  backdrop-filter: blur(50px);
}

img {
  height: 4rem;
  margin: 0;
}


.link-handler {
  position: absolute;
  width: 60rem;
  bottom: 0;
  right: 0rem;
}

.link-font {
  bottom: 0;
  color : white;
  font-family: 'PyeongChangPeace-Bold';
  font-size: 20px;
}

.link-font:hover {
  color : rgb(255, 0, 0);
}
</style>