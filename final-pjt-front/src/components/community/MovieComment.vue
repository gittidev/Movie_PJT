<template>
  <div>영화커뮤니티별 코멘트</div>
  <div class="comment container">
    <div class="row">
      커뮤니티에 생성된 댓글이 보일 예정
    </div>
    <div v-for="_ in 10" class="row">
      <div class="col-8">
        <!-- 필요하면 당사자 프로필 이동 기능도..? -->
        <img src="" alt="프로필이미지">
        <p>comment 달림ddddddddddddddddddddddddddddddddddddslgaldskdgadskng.dskmg;.kmds;<div class="lg"></div>jg</p>
      </div> 
      <div class="col-4">
        마시멜로 좋아요
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.comment {
  border: 1px solid;

  margin: 1rem;
}
</style>
