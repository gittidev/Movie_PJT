<template>

  <div>
    <!--서비스 소개 화면 -->
    <div class="main-body">
      <div class="container main-container">


        <div class="row section1">
          <!-- row 1 (total : 12) -->
          <div class="col-12">
            <img class='logo' src="@/assets/MarshMovie_logo.png" alt="메인이미지">
          </div>
        </div>
        <div class="row section1-sub">
          <h2>맛있는 영화 Time</h2>
          <h3>snack movie</h3>
        </div>

        <div class="row section2 d-flex flex-wrap" style=" background-color: #DEB6AB;">
          <div class="col-sm-12 col-md-8 camping">
            <img src="@/assets/camping.png" alt="캠핑이미지">
          </div>
          <div class="col col-md-4 section2-txt d-none d-md-block" style="text-align: center; margin: auto;">
            <p>
              환영합니다, 캠퍼 여러분!
            </p>
            <p>
              Marshmovie는 캠핑장의 따뜻한 분위기 속에서 영화를 사랑하는 사람들이 모여 서로의 이야기를 나누는 특별한 공간입니다.
            </p>


            <div>
              이곳에서는 매일 새로운 캠퍼들과 함께 영화에 대한
              열정을 공유하고, 숨겨진 보석 같은 영화들을 추천받을 수 있습니다.
            </div>

            <div>
              불멍을 하며 나누는 한 편의 영화 이야기처럼, 이곳에서 여러분의
              영화 여행이 더욱 특별해집니다.
            </div>

          </div>

        </div>

        <button class="btn btn-primary">포트럭 참여하기</button>

        <div style="height:5em;">

        </div>

        <div class="row section2-sub">
          <h2>골라먹는</h2>
          <h3>snack movie</h3>
        </div>

        <div class="row section3" style="margin-bottom: 5rem;">

          <div class="col-12 col-md-4 icon1" >
            <RouterLink :to="{ name: 'movie' }">
              <img src="@/assets/popcorn-bomb.png" alt="#" style="width: 80%;">
              <h4>오늘의 영화</h4>
            </RouterLink>   
          </div>

          <div class="col-12 col-md-4 icon2">
            <RouterLink :to="{ name: 'community' }">
              <img src="@/assets/fire.png" alt="#" style="width: 65%;">
              <h4>POTLUCK</h4>
            </RouterLink>
          </div>

          <div class="col-12 col-md-4 icon3">
            <RouterLink :to="{ name: 'marshchat' }">
              <img src="@/assets/marsh-icon.png" alt="#" style="width: 40%;">
              <h4>마쉬에게 물어봐</h4>
            </RouterLink>
          </div>
        </div>

        <div class="row section4">
          <h2>박동민 박보람</h2>
          <h3>Marsh movie</h3>
        </div>

      </div>

      <div class="side">
        <random />
        <chatbot />

        <div class="popcorn-handler">
          <router-link :to="{ name: 'random' }">
            <Popcorn />
          </router-link>
        </div>
      </div>




    </div>

  </div>

</template>

<script setup>
import Popcorn from "@/components/Popcorn.vue";
import ChatbotIcon from "@/components/ChatbotIcon.vue";
import Random from "@/components/Random.vue";
import Chatbot from "@/components/Chatbot.vue";
import { RouterLink, RouterView, useRouter } from "vue-router";

</script>

<style scoped>
.main-body {
  width: 100%;
  height: 100%;
}

.main-container {
  margin: auto;
  width: 100%;
}

.section1 {
  margin-top: 130px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  height: 720px;
  background: #ff0000ca;
  border-radius: 30px;
  background-image: url("@/assets/floating_marsh.png");
  background-size: 47rem 47rem;
  /* 또는 'contain' 사용 */
  background-position: center;
  background-repeat: no-repeat;

}


.section1-sub {
  margin: 4rem 0rem;
}

h2 {
  margin: auto;
  font-family: 'RixInooAriDuriR';
  font-size: var(--font-size-lg);
  text-shadow: 0px 0 #000000, 1px 1px rgb(255, 255, 0), 4px 0 rgb(255, 255, 0), 0 0px rgb(0, 0, 0);
}

h3 {
  margin: auto;
  font-family: 'RixInooAriDuriR';
  font-size: var(--font-size-md);
  text-shadow: 0px 0 #000000, 1px 1px rgb(255, 255, 0), 4px 0 rgb(255, 255, 0), 0 0px rgb(0, 0, 0);
}

h4 {
  font-family: 'RixInooAriDuriR';
  font-size: var(--font-size-sm);
}

.section2 {
  margin-top: 40px;
  width: 100%;
  position: relative;
  height: 720px;
  background: #ff0000ca;
  border-radius: 30px;
  position: relative;
}

a {
  text-decoration: none;
}

.section2-txt {
  position: absolute;
  top: 80px;
  right: 100px;
  font-family: 'KCC-Hanbit';
  text-align: center;
  margin: auto;
  font-size: 1.5em;
}

.camping {
  position: absolute;
  top: 110px;

}

button {
  position: absolute;
  top: 30px;
}

.camping>img {
  width: 30rem;
}

.section3 {
  position: relative;
  margin: 40px 0px;
  width: 100%;
  padding: 2rem;
  height: auto;
  background: #b3ff00ca;
  border-radius: 30px;
}


div {
  height: 200px;
  text-align: center;
}

.logo {
  margin: auto;
  width: 40rem;
}

@media (max-width: 768px) {
  .logo {
    margin-top: 10px;
    margin: auto;
    max-width: 500px;
    /* 화면 너비가 768px 이하인 경우 이미지 최대 너비를 500px로 조정 */
  }
}

.popcorn-handler {
  position: fixed;
  right: 0;
  bottom: 5%;
  margin: 0rem 3rem;
}
</style>
