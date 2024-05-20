<template>

  <div>
    <div class="popcorn-box">
      <div class='popcorn' @click="openModal" data-bs-toggle="modal" data-bs-target="#random">
      <img :src="popcornIconPath" alt="popcron그림">
    </div>
    </div>
    
  </div>

</template>

<script setup>
import Random from "@/components/Random.vue";
import popcornIcon from '@/assets/popcorn.gif';
import {ref} from 'vue'
const popcornIconPath = popcornIcon

</script>

<style scoped>

.popcorn {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 5rem;
  height: 5rem;
  background-color: black;
  border-radius: 5rem;
  padding: 10px;
}

.popcorn:hover {
  background-color: rgb(255, 198, 198);
  transition: 0.3s;
}

.popcorn-box {
  position: relative;
}

.arrow_box {
  display: none;
  position: absolute;
  width: 50px;
  padding: 8px;
  left: 0;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  background: #333;
  color: #fff;
  font-size: 14px;
}

.arrow_box:after {
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -10px;
  border: solid transparent;
  border-color: rgba(51, 51, 51, 0);
  border-bottom-color: #333;
  border-width: 10px;
  pointer-events: none;
  content: ' ';
}

.popcorn-box:hover + p.arrow_box {
  display: block;
}
</style>