<template>
  <div style="padding: 5rem;">
    <div class="modal-body" style="text-align: center; font-size: 5em;">
      오늘의 영화를 뽑아보세요!
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

</style>