<template>

  <div>
    <!--서비스 소개 화면 -->
    <div class="main-body">
      <div class="container main-container">
        <div class="row section1">
          <div class="col-12">
            <img class='logo' src="@/assets/MarshMovie_logo.png" alt="메인이미지">
          </div>
        </div>
        <div class="row section1-sub">
          <div class="col-12 text-center" >
            <h2>맛있는 영화 Time</h2>
            <h3>snack movie</h3>
          </div>
        </div>

        <div class="row section2 d-flex flex-wrap" style="background-color: #DEB6AB; margin-top: 150px">
          <div class="col-sm-12 col-md-8 camping">
            <img src="@/assets/camping.png" alt="캠핑이미지" class="img-fluid">
          </div>
          <div class="col-sm-12 col-md-4 section2-txt d-none d-md-block" style="text-align: center; margin: auto;">
            <p>환영합니다, 캠퍼 여러분!</p>
            <p>Marshmovie는 캠핑장의 따뜻한 분위기 속에서 영화를 사랑하는 사람들이 모여 서로의 이야기를 나누는 특별한 공간입니다.</p>
            <p>이곳에서는 매일 새로운 캠퍼들과 함께 영화에 대한 열정을 공유하고, 숨겨진 보석 같은 영화들을 추천받을 수 있습니다.</p>
            <p>불멍을 하며 나누는 한 편의 영화 이야기처럼, 이곳에서 여러분의 영화 여행이 더욱 특별해집니다.</p>
          </div>
        </div>


        <div class="row section2-sub" style="margin-top: 100px; margin-bottom: 100px;">
          <div class="col-12">
            <h2>골라먹는</h2>
            <h3>snack movie</h3>
          </div>
        </div>
        &nbsp;
        <div class="row section3" style="margin-bottom: 100px;">
          <div class="col-12 col-md-4 icon1" style="margin-top: 50px;">
              <RouterLink :to="{ name: 'movie' }">
              <img src="@/assets/popcorn-bomb.png" alt="오늘의 영화" class="img-fluid" style="width: 50%;">
              <h5>오늘의 영화</h5>
            </RouterLink>
          </div>

          <div class="col-12 col-md-4 icon2 text-center" style="margin-top: 50px;">
            <RouterLink :to="{ name: 'community' }">
              <img src="@/assets/fire.png" alt="POTLUCK" class="img-fluid" style="width: 40%; margin-top: 10px;">
              <h5>POTLUCK</h5>
            </RouterLink>
          </div>

          <div class="col-12 col-md-4 icon3 text-center" style="margin-top: 30px;">
            <RouterLink :to="{ name: 'marshchat' }">
              <img src="@/assets/marsh-icon.png" alt="마쉬에게 물어봐" class="img-fluid" style="width: 25%; margin-top: 10px;">
              <h5>마쉬에게</h5>
              <h5>물어봐</h5>
            </RouterLink>
          </div>


        </div>

        &nbsp;
      
      </div>

    </div>


    <div class="side">
      <div class="popcorn-handler">
        <RouterLink :to="{ name: 'random' }">
          <Popcorn />
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<script setup>
import Popcorn from "@/components/Popcorn.vue";
import { RouterLink } from "vue-router";

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
  background-size: 65%;
  background-position: center;
  background-repeat: no-repeat;

}


.section1-sub {
  margin: 4rem 0rem;
}

h2 {
  margin: auto;
  font-family: 'RixInooAriDuriR';
  font-size:80px;
  text-shadow: 0px 0 #000000, 1px 1px rgb(255, 255, 0), 4px 0 rgb(255, 255, 0), 0 0px rgb(0, 0, 0);
}

h3 {
  margin: auto;
  font-family: 'RixInooAriDuriR';
  font-size: 70px;
  text-shadow: 0px 0 #000000, 1px 1px rgb(255, 255, 0), 4px 0 rgb(255, 255, 0), 0 0px rgb(0, 0, 0);
}

h5 {
  font-family: 'RixInooAriDuriR';
  font-size: 50px;
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
  width: 100%;
  min-height: 350px;
  padding: 10px;
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
