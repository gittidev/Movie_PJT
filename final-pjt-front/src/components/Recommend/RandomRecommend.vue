<template>
    <div style="padding: 5rem;">
        <div class="modal-body" style="text-align: center; color:white; font-size: 5rem;">
            오늘의 영화를 뽑아보세요!
            <div class="popcorn-img-bg">
              <img :src="popcornIconPath" alt="popcron그림" class="popcorn-img">

            </div>
              <button type="button" class="btn" style="background-color:#ff9d3d; color : white;" @click="startRandom">
              오늘의 영화 뽑기
              </button>
          </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import popcornIcon from '@/assets/popcorn.gif';

const popcornIconPath = popcornIcon
const modalRef=ref(null)


</script>

<style scoped>

</style>