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
                                placeholder="수정할 POT에 대한 설명을 적어주세요"/>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                            <button type="button" class="btn btn-primary" @click="potUpdate">수정하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, defineProps } from "vue";
import { useCommunityStore } from '@/stores/community';

const communityStore = useCommunityStore()
const route = useRoute()
const router = useRouter()
// 모달창으로 커뮤니티 id 전달하기
const props = defineProps({
    community : Object,
})




const communityId = props.community.id
// console.log(props.community)
// console.log(props.community.id)

const updatetitle=ref('')
const updatecontent=ref('')


// POT 수정하기
const potUpdate = function () {
  const payload = {
    title: updatetitle.value,
    content: updatecontent.value,
  };
   communityStore.updateCommunity(payload, communityId)
   alert('수정이 완료되었습니다.')
//   router.push({name:'communitydetail', params: {communityId:communityId}})
}




</script>

<style scoped>


</style>