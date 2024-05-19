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
                <input class="form-control mx-auto" type="text" v-model.trim="communitytitle" placeholder="생성할 POT 이름을 적어주세요"/>
              </div>

              <div class="d-grid gap-2 col-12 mx-auto">
                <label for="username">POT에 놀러와</label>
                <input class="form-control mx-auto" type="text" v-model.trim="communitycontent" placeholder="생성할 POT에 대한 설명을 적어주세요"/>
              </div>
              <div>
                <!-- 선택한 항목 기본 선택 상태 방지 위해, required 속성 -->
                <select required class="d-grid gap-2 col-12 mx-auto form-control" aria-labelledby="navbarDropdown" v-model="likeMovies"> 
                <option value="" selected>좋아요한 영화를 선택하세요</option> 
                <option value="1">사과</option> 
                <option value="2">바나나</option> 
                <option value="3">오렌지</option> 
                <!-- 영화의 제목이 아니라, id값을 넘겨 주어야 한다.(DB의 id값) -->
              </select>
              </div> 
          </div>

          <div class="modal-footer">
            <button type="button" class="btn" style="background-color:red; color : white;" @click="create">
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
import  { useCommunityStore } from '@/stores/community'

const store = useCommunityStore()


const modalRef=ref(null)
const likeMovies=ref([])
const communitytitle= ref('')
const communitycontent= ref('')

const create = function () {
  const payload = {
    title : communitytitle.value,
    content : communitycontent.value,
    movie : parseInt(likeMovies.value,10)
  }
  console.log(payload)
  store.createCommunity(payload)
  // 생성 후 router.push 이용해서 상세 페이지로 이동하기 구현필요
}


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