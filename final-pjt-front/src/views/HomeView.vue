<template>
  <!--서비스 소개 화면 -->
  <div>

    <div class="container-fluid" style="background-color: gray;">
      <div class="row">
        <!-- row 1 (total : 12) -->
        <div class="col-12" style="background-color: #F8ECD1;">
          <div class="col-8" style="background-color: #AC7D88;">
            <h2>간단한 클릭으로 다양한 추천 영화를 만나보세요.</h2>

          </div>
          <div class="col-4">
            <img class='logo' src="@/assets/MarshMovie_logo.png" alt="메인이미지">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12" style="background-color: #DEB6AB;">
          <p>
            Marshmovie - 캠핑장에서 만나는 영화 이야기

            환영합니다, 캠퍼 여러분! Marshmovie는 캠핑장의 따뜻한 분위기 속에서 영화를 사랑하는 사람들이 모여 서로의 이야기를 나누는 특별한 공간입니다. 이곳에서는 매일 새로운 캠퍼들과 함께
            영화에 대한
            열정을 공유하고, 숨겨진 보석 같은 영화들을 추천받을 수 있습니다. Marshmovie에서 나만의 영화 모험을 시작해 보세요. 불멍을 하며 나누는 한 편의 영화 이야기처럼, 이곳에서 여러분의
            영화
            여행이 더욱 특별해집니다.
          </p>
        </div>
      </div>

      <div class="row">

        <!-- row 2 (total : 12) -->
        <div class="col-12" style="background-color: #A2B38B;">
          총 너비인 12칸을<br>(col-3)
        </div>
        <div class="col-6" style="background-color: #E4E9BE;">
          넘는 경우에는<br>(col-6)
        </div>
        <div class="col-3" style="background-color: #FAFDD6;">
          다음 줄로 넘어갑니다.<br>(col-3)
        </div>

        <!-- row 3 (total : 12) -->
        <div class="col-2" style="background-color: #F8B400;">
          다음과 같이<br>(col-2)
        </div>
        <div class="col" style="background-color: #FAF5E4;">
          사용 또한<br>(col, 남는 자리 자동 할당)
        </div>
        <div class="col-3" style="background-color: #FF6363;">
          가능합니다..<br>(col-3)
        </div>
      </div>
    </div>

    <!-- <div>

   
    <div class="row container1">
      <div class="main-title">

        1번 row -->
    <!-- <div class="col-8">
          
          <h1>
          </h1>
          <button class="btn" style="background-color: red;">체험하기</button>
        </div>
        <div class="col-4">
         
        </div> -->
    <!-- </div>
      <div class="main-content">
        2번 row
        Marshmovie - 캠핑장에서 만나는 영화 이야기

        환영합니다, 캠퍼 여러분! Marshmovie는 캠핑장의 따뜻한 분위기 속에서 영화를 사랑하는 사람들이 모여 서로의 이야기를 나누는 특별한 공간입니다. 이곳에서는 매일 새로운 캠퍼들과 함께 영화에 대한
        열정을 공유하고, 숨겨진 보석 같은 영화들을 추천받을 수 있습니다. Marshmovie에서 나만의 영화 모험을 시작해 보세요. 불멍을 하며 나누는 한 편의 영화 이야기처럼, 이곳에서 여러분의 영화
        여행이 더욱 특별해집니다.

      </div>
    </div>

    <div class="row container2">
      <div class=" main-title">

        1번 row
      </div>
      <div class="main-content">
        2번 row
        Marshmovie - 캠핑장에서 만나는 영화 이야기

        환영합니다, 캠퍼 여러분! Marshmovie는 캠핑장의 따뜻한 분위기 속에서 영화를 사랑하는 사람들이 모여 서로의 이야기를 나누는 특별한 공간입니다. 이곳에서는 매일 새로운 캠퍼들과 함께 영화에 대한
        열정을 공유하고, 숨겨진 보석 같은 영화들을 추천받을 수 있습니다. Marshmovie에서 나만의 영화 모험을 시작해 보세요. 불멍을 하며 나누는 한 편의 영화 이야기처럼, 이곳에서 여러분의 영화
        여행이 더욱 특별해집니다.

      </div>
    </div>

 
    
    <div class="row container3">
      <div class=" main-title">

        1번 row
      </div>
      <div class="main-content">
        2번 row
        Marshmovie - 캠핑장에서 만나는 영화 이야기

        환영합니다, 캠퍼 여러분! Marshmovie는 캠핑장의 따뜻한 분위기 속에서 영화를 사랑하는 사람들이 모여 서로의 이야기를 나누는 특별한 공간입니다. 이곳에서는 매일 새로운 캠퍼들과 함께 영화에 대한
        열정을 공유하고, 숨겨진 보석 같은 영화들을 추천받을 수 있습니다. Marshmovie에서 나만의 영화 모험을 시작해 보세요. 불멍을 하며 나누는 한 편의 영화 이야기처럼, 이곳에서 여러분의 영화
        여행이 더욱 특별해집니다
      </div>
    </div>
  </div> -->














    <div class="side">
      <random />
      <chatbot />
      <div class="handler">
        <Popcorn class="popcorn-handler" />
        <ChatbotIcon class="chatbot-handler" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Popcorn from "@/components/Popcorn.vue";
import ChatbotIcon from "@/components/ChatbotIcon.vue";
import Random from "@/components/Random.vue";
import Chatbot from "@/components/Chatbot.vue";



</script>

<style scoped>
h2 {
  color: rgb(255, 255, 255);
}

.container1 {
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  position: absolute;
  top: 3rem;
  background-color: black;
  border-radius: 1rem;
  height: 30rem;
  margin: auto;
}

.main-title {
  /* width: 100%;
  position: absolute;
  top: 3rem;
  background-color: black;
  border-radius: 1rem;
  height: 30rem;
  margin: auto; */
}

.container2 {
  width: 100%;
  position: absolute;
  top: 3rem;
  background-color: rgb(255, 58, 58);
  border-radius: 1rem;
  height: 30rem;
  margin: auto;
}

.container3 {
  width: 100%;
  position: absolute;
  top: 3rem;
  background-color: rgb(0, 255, 76);
  border-radius: 1rem;
  height: 30rem;
  margin: auto;
}

div {
  height: 200px;
  text-align: center;
}

.logo {
  margin: auto;
  width: 10rem;
}

.handler {
  position: fixed;
  right: 0;
  bottom: 10%;
}

.popcorn-handler {
  margin: 1rem;
}

.chatbot-handler {
  margin: 1rem;
}
</style>
