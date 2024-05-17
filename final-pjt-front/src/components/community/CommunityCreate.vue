<template>

  <div>
    <div class="create-handler">
      <button class='create btn' @click="openModal" data-bs-toggle="modal" data-bs-target="#pot">
        Pot 생성하기
      </button>
    </div>
    
  </div>
</template>

<script setup>

import {ref} from 'vue'

</script>

<style scoped >

.create-handler {
  position: relative;
}

.create {
  box-sizing: border-box;
  height: 4rem;
  color: white;
  background-color: black;
  border-radius: 1rem;
  margin: 10px;
  padding: 0.5rem 2rem;
}

.create:hover {
  background-color: rgb(255, 0, 0);
  transition: 0.3s;
}




</style>