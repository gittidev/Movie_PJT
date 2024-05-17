<template>
  <div >
    <div id='pot' class='modal fade' ref="modalRef" aria-labelledby="random" tabindex = "-1" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: #242424;">
          <div class="modal-header">
          </div>

          <div class="modal-body" style="text-align: center;">
            <div class="d-grid gap-2 col-12 mx-auto">
                <label for="username">POT 이름</label>
                <input class="form-control mx-auto" type="text" id="username" v-model.trim="username" placeholder="생성항 POT 이름을 적어주세요"/>
              </div>

              <div class="d-grid gap-2 col-12 mx-auto">
                <label for="username">POT에 놀러와</label>
                <input class="form-control mx-auto" type="text" id="username" v-model.trim="username" placeholder="생성할 POT에 대한 설명을 적어주세요"/>
              </div>
              <div>
            
                <select class="d-grid gap-2 col-12 mx-auto form-control" aria-labelledby="navbarDropdown" > 
                <option value="">좋아요한 영화를 선택하세요</option> 
                <option value="apple">사과</option> 
                <option value="banana">바나나</option> 
                <option value="orange">오렌지</option> 
              </select>
              </div>
           

              <button type="button" class="btn" style="background-color:red; color : white;" @click="createCommunity">
              POT 생성하기
              </button>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
          </div>
        </div>
      </div>
    </div>

  </div>

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

.popcorn-img-bg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popcorn-img {
  width: 60%;
  margin: 2rem;
}

.modal-body {
  color: rgb(255, 255, 255);
}

.modal-content > * {
  border: none;
}
</style>