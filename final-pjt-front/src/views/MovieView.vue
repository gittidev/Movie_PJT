<template>
  <div>
    영화소개화면임
    <div>
      <TodayMovie/>
      <WeeklyMovie/>
      <GenreMovie/>
    </div>

    <div class="side">
      <random />
      <chatbot />
      <slider />
      <div class="handler">
        <Popcorn class="popcorn-handler" />
        <ChatbotIcon class="chatbot-handler" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TodayMovie from "@/components/TodayMovie.vue";
import WeeklyMovie from "@/components/WeeklyMovie.vue";
import GenreMovie from "@/components/GenreMovie.vue";

import Slider from "@/components/Slider.vue";
import Popcorn from "@/components/Popcorn.vue";
import ChatbotIcon from "@/components/ChatbotIcon.vue";
import Random from "@/components/Random.vue";
import Chatbot from "@/components/Chatbot.vue";
import TodayMovieVue from "@/components/TodayMovie.vue";
</script>

<style scoped>
.handler {
  position: fixed;
  right: 0;
  bottom: 20%;
}

.popcorn-handler {
  margin: 1rem;
}

.chatbot-handler {
  margin: 1rem;
}
</style>
