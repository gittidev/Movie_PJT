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
  width: 15rem;
  height: 5rem;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 0, 0);
  font-size: 1.5rem;
  border-radius: 1rem;
  margin: 10px;
  padding: 0.5rem 2rem;
}

.create:hover {
  background-color: rgb(225, 255, 0);
  transition: 0.3s;
}




</style>