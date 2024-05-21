<template>
    <div>
        <div id='update' class='modal fade' ref="modalRef" aria-labelledby="random" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background-color: #242424;">
                    <div class="modal-header">
                    </div>

                    <div class="modal-body" style="text-align: center;">
                        <div class="d-grid col-12 mx-auto">
                            <input class="form-control mx-auto" type="text" v-model.trim="communitytitle"
                                placeholder="수정할 POT 이름을 적어주세요" />
                        </div>

                        <div class="d-grid col-12 mx-auto mt-3">
                            <input class="form-control mx-auto" type="textarea" v-model.trim="communitycontent"
                                placeholder="수정할 POT에 대한 설명을 적어주세요" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

//POT 수정하기
const potUpdate = function (communityId) {
  communityStore.updateCommunity()
}


</script>

<style scoped>

#update {
    height: 100px;
}

</style>