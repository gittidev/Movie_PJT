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
                <input class="form-control mx-auto" type="text" v-model.trim="communitytitle" placeholder="생성항 POT 이름을 적어주세요"/>
              </div>

              <div class="d-grid gap-2 col-12 mx-auto">
                <label for="username">POT에 놀러와</label>
                <input class="form-control mx-auto" type="text" placeholder="생성할 POT에 대한 설명을 적어주세요"/>
              </div>
              <div>
                <!-- 선택한 항목 기본 선택 상태 방지 위해, required 속성 -->
                <select required class="d-grid gap-2 col-12 mx-auto form-control" aria-labelledby="navbarDropdown" v-model="likeMovies"> 
                <option value="" selected>좋아요 영화를 선택하세요</option> 
                <option value="apple">사과</option> 
                <option value="banana">바나나</option> 
                <option value="orange">오렌지</option> 
              </select>
              </div> 
          </div>

          <div class="modal-footer">
            <button type="button" class="btn" style="background-color:red; color : white;" @click="createCommunity">
              POT 생성하기
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const modalRef=ref(null)
const likeMovies=ref([])
const communitytitle= ref('')

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