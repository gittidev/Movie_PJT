<template>
  <div>
    <div id='chatbot' class='modal fade' ref="modalRef" aria-labelledby="random" tabindex = "-1" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content" style="background-color:white;">
          <div class="modal-header">
      
            <button type="button" class="btn-close btn-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body" style="text-align: center;">
            무비에게 물어봐
            오늘 기분을 알려주세요
            <div class="popcorn-img-bg">
        

            </div>
              <button type="button" class="btn" style="background-color:#ff9d3d; color : white;" @click="startRandom">
              오늘의 영화 뽑기
              </button>
          </div>

          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button> -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style  scoped>
.modal-content > * {
  border: none;
}
</style>