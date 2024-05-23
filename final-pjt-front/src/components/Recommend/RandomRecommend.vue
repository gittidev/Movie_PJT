<template>
  <div style="padding: 5rem;">
    <div class="modal-body" style="text-align: center; font-size: 5em;">
      <p>
        오늘의 영화를
      </p>
      <p>
        뽑아보세요!
      </p> 
      <div class="popcorn-img-bg">
        <img :src="popcornIconPath" alt="popcron그림" class="popcorn-img">

      </div>
      <button type="button" class="btn" style="background-color:#ff9d3d; color : white;" @click="generateRandomNumber" data-bs-toggle="modal" data-bs-target="#random-number">
      오늘의 영화 뽑기
      </button>
    </div>
  </div>
</template>

<script setup>
import popcornIcon from '@/assets/popcorn.gif';

const popcornIconPath = popcornIcon

</script>

<style scoped>
.modal-body {
  font-family: 'RixInooAriDuriR';
}

button {

  font-size: 0.5em;
  width: 10em;
  height: 2em;
  border-radius: 1em;

}
</style>
