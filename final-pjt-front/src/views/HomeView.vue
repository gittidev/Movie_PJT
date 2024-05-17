<template>
  <!--서비스 소개 화면 -->
  <div>
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
