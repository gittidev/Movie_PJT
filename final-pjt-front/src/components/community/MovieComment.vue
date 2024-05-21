<template>
  <div style="margin: 2rem 1rem;">
    <h3>POTLUCK</h3>
    <div class="comment container">
    <div class="row">

    </div>
    <div v-for="_ in 10" class="row">
      <div class="col-10">
        <!-- 필요하면 당사자 프로필 이동 기능도..? -->
        <img :src="defaultProfile" alt="프로필이미지">
        <span>가져온 코멘트 포문 돌리기</span>
        <div>
        <button class="btn btn-primary">삭제하기</button>
        </div>
        <!-- 내가 작성한 것만 보이게 -->
      </div> 
      <div class="col-2">
        <img :src="marsh3" alt="좋아요">
        <img :src="marsh2" alt="싫어요">
      </div>
    </div>

  </div>


    
  </div>

</template>

<script setup>
import defaultProfile from '@/assets/profile.png';
import marsh2 from '@/assets/marsh2.png';
import marsh3 from '@/assets/marsh3.png';



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
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
}
</style>
