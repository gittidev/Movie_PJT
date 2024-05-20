<template>
  <div >
    <div id='random' class='modal fade' ref="modalRef" aria-labelledby="random" tabindex = "-1" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="random-content" style="background-color: #242424;">
          <div class="modal-header">
      
          <button type="button" class="btn-close btn-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="random-body" style="text-align: center;">
            <p>오늘의 영화를</p>
            <p>뽑아보세요!</p>
            <div class="popcorn-img-bg">
              <img :src="popcornIconPath" alt="popcron그림" class="popcorn-img">

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
<!-- </div> -->
  

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import popcornIcon from '@/assets/popcorn.gif';

const popcornIconPath = popcornIcon
const modalRef=ref(null)

const randomArray = ref([0,1,2,3,4,5,6,7,8,9])

const fetchTrailer=()=>{
  console.log('모달열림')
}




// onMounted(() => {
//   if (modalRef.value) {
//     modalRef.value.addEventListener("show.bs.modal", fetchTrailer);
//   }
// });

// onBeforeUnmount(() => {
//   if (modalRef.value) {
//     modalRef.value.removeEventListener("show.bs.modal", fetchTrailer);
//     console.log('창 닫힘')
//   }
// });



</script>



<style scoped>

.modal-handler {
  
}
.popcorn-img-bg {

  display: flex;
  justify-content: center;
  align-items: center;
}

.popcorn-img {
  width: 60%;
  margin: 2rem;
}

.random-body {
  font-family: 'RixInooAriDuriR';
  color: rgb(255, 255, 255);
  font-size: 3rem;
  
}

.random-content > * {
  border: none;
}

button {
  font-family: 'LOTTERIACHAB';
  font-size: 2rem;
  border-radius: 3rem;
  padding: 1rem;
}
</style>