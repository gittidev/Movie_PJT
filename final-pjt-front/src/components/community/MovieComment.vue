<template>
  <div style="margin: 2rem 1rem;">
    <h3>POTLUCK</h3>
    <div class="comment container">
      <div>
        <div v-if="commentList.length > 0">
          <div v-for="comment in commentList" :key="comment.id" class="row">
            <div class="col-10">
              <img :src="comment.profileImage || defaultProfile" alt="프로필이미지" />
              <span>{{ comment.content }}</span>

            </div>
            <div class="col" v-if="comment.user === loginUser.pk" style="display: flex; justify-content: center; align-items: center;">
              <button class="btn btn-primary" @click="deleteComment(comment.id)">삭제하기</button>
            </div>
          </div>
        </div>
        <div v-else>
          <p>댓글이 없습니다.</p>
        </div>
      </div>
    </div>



  </div>

</template>

<script setup>
import defaultProfile from '@/assets/profile.png';

import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/users";
import { useCommunityStore } from '@/stores/community'

const userStore = useUserStore();
const communityStore = useCommunityStore()
const route = useRoute();
const loginUser = userStore.state.user


const community = communityStore.communityInfo
const communityId = route.params.communityId
const commentList = ref([]);


const comment = ref('')

// 페이지 랜더링 되면서 커뮤니티 정보를 가져옴
onMounted(() => {
  communityStore.getCommunityInfo(communityId)
  communityStore.getCommentList(communityId)
});

// commentList를 반응형으로 갱신
watch(() => communityStore.commentList, (newCommentList) => {
  commentList.value = newCommentList;
}, { immediate: true });


//댓글 삭제하기
const deleteComment = (commentId) => {
  communityStore.deleteComment(commentId).then(() => {
    communityStore.getCommentList(communityId); // 댓글 삭제 후 댓글 목록 갱신
  });
};

</script>




<style scoped>
h3 {
  font-family: 'PyeongChangPeace-Bold';
}

img {
  width: 3rem;
  border-radius: 1rem;
  margin: 1rem;
}

.comment {
  border: 1px solid;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
}
</style>
