<template>
    <div>
        <div id='update' class="modal fade" ref="modalRef" aria-labelledby="random" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background-color: #242424;">

                    <div class="modal-body" style="text-align: center;">
                        <div class="d-grid col-12 mx-auto">
                            <input class="form-control mx-auto" type="text" v-model.trim="updatetitle"
                                placeholder="수정할 POT 이름을 적어주세요" />
                        </div>

                        <div class="d-grid col-12 mx-auto mt-3">
                            <textarea class="form-control mx-auto" type="textarea" v-model="updatecontent"
                                placeholder="수정할 POT에 대한 설명을 적어주세요" />
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소하기</button>
                            <button type="button" class="btn btn-primary" @click="potDelete">수정하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from "vue";

const updatetitle=ref('')
const updatecontent=ref('')
const route = useRoute()
const communityId = route.params.id

//POT 수정하기
// const potUpdate = function () {


//   // console.log(movie_id);
//   const payload = {
//     title: updatetitle.value,
//     content: updatecontent.value,
//     // movie_title : 
//   };
//   communityStore.updateCommunity(payload, communityId)
// }




</script>

<style scoped>


</style>