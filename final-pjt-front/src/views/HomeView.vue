<template>
  <!--서비스 소개 화면 -->
  <div class="main-body">
    <div class="container main-container" >

      <div class="row section1">
        <!-- row 1 (total : 12) -->
            <div class="col-8 section1-txt">

            <h2>맛있는 영화 Time</h2>
            <h3>snack time movie</h3>
            
          </div>
          <div class="col">
            <img class='logo' src="@/assets/MarshMovie_logo.png" alt="메인이미지">
          </div>
      </div>

      <div class="row section2" style="background-color: #DEB6AB;">
        <div class="col col-md-8 camping">
          <img src="@/assets/camping.png" alt="캠핑이미지">
        </div>
        <div class="col col-md-4 section2-txt">
          <div>
            환영합니다, 캠퍼 여러분!
          </div>
          <div>
            Marshmovie는 캠핑장의 따뜻한 분위기 속에서 영화를 사랑하는 사람들이 모여 서로의 이야기를 나누는 특별한 공간입니다. 
          </div>
          <div>
            이곳에서는 매일 새로운 캠퍼들과 함께 영화에 대한
            열정을 공유하고, 숨겨진 보석 같은 영화들을 추천받을 수 있습니다. 
            Marshmovie에서 나만의 영화 모험을 시작해 보세요. 
          </div>

          <div>
            불멍을 하며 나누는 한 편의 영화 이야기처럼, 이곳에서 여러분의
            영화 여행이 더욱 특별해집니다.
          </div>
           
        </div>
      </div>

      <div class="row section3">
          <div class="col-4">
        아이콘
        </div>
        <div class="col-4">
          아이콘
        </div>

        <!-- row 3 (total : 12) -->
        <div class="col-4">
          아이콘
        </div>
        </div>
    </div>

   
  <div class="side">
      <random />
      <chatbot />
      <div class="popcorn-handler">
        <Popcorn/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Popcorn from "@/components/Popcorn.vue";
import ChatbotIcon from "@/components/ChatbotIcon.vue";
import Random from "@/components/Random.vue";
import Chatbot from "@/components/Chatbot.vue";
import FloatingItem from "@/components/FloatingItem.vue";


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
  height: 720px;
  background: #ff0000ca;
  border-radius: 30px;
  background-image: url("@/assets/popcorn-bomb.png");
  background-size: 40rem 40rem; /* 또는 'contain' 사용 */
  background-position: center;
  background-repeat: no-repeat;

}

.section1-txt{
  font-family: 'RixInooAriDuriR';
  text-align: center;
  margin: auto;

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

.section2-txt{
  position: absolute;
  top :100px;
  right: 100px;
  font-family: 'KCC-Hanbit';
  text-align: center;
  margin: auto;
  font-size: 24px;
}

.camping {
  position: absolute;
  top :130px;
  
}
.camping > img {
  width: 30rem;
}

.section3 {
  margin-top: 40px;
  width: 100%;
  position: relative;
  background: #b3ff00ca;
  border-radius: 30px;
}

div {
  height: 200px;
  text-align: center;
}

.logo {
  margin: auto;
  width: 10rem;
}

.popcorn-handler {
  position: fixed;
  right: 0;
  bottom: 5%;
  margin: 0rem 3rem;
}


</style>
