<template>

  <div>
    <div class="chatbot-box">
      <div class='chatbot' @click="openModal" data-bs-toggle="modal" data-bs-target="#chatbot">
      <img :src="chatIconPath" alt="chatbot그림">
    </div>
    </div>
    
  </div>

</template>

<script setup>
import Random from "@/components/Random.vue";
import chatbotIcon from '@/assets/chatbot.svg';
import {ref} from 'vue'
const chatIconPath = chatbotIcon

</script>

<style scoped>

.chatbot {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 30px;
  padding: 10px;
}

.chatbot:hover {
  background-color: rgb(176, 226, 255);
  transition: 0.3s;
}

.chatbot-box {
  position: relative;
}

</style>