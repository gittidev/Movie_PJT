<template>
  <div >
    <div id='random-number' class='modal fade' ref="modalRef" aria-labelledby="random" tabindex = "-1" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: #242424;">
          <div class="modal-body" style="text-align: center;">
            <h1>랜덤 영화 번호 추천</h1>
            <br>
            <br>
            <p>{{ randomNumber }}</p>
            <br>
            <br>
            <p>과연 {{ randomNumber }}번 영화는 무슨 영화일까요?</p>
          </div>

          <div class="modal-footer">
            <button class="btn btn-primary">보러 가기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  dbSize: {
    type: Number
  },
  randomNumber: {
    type: Number
  }
})
</script>

<style scoped>
.modal-body {
  color: rgb(255, 255, 255);
}

.modal-content > * {
  border: none;
}
</style>