<template> <!-- 컴포넌트 재사용을 위하여, 프로필 유저의 id값은 useRoute로 사용 -->
    <div>
      <div>
        <p>{{profileUser.nickname}} 프로필 페이지</p>
        <p> 사용자 ID : {{profileUserId}}</p>
        <p> 사용자 연락처 : {{profileUser.email}}</p>
      </div>
        <button class="btn btn-primary">회원정보 수정</button>
        <button class="btn btn-primary">비밀번호 변경</button>

      <div>
        <p>좋아요한 영화 목록</p>
        <p>생성한 커뮤니티 목록</p>
      </div>

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/users'
import { ref, onMounted } from "vue";
import axios from 'axios'

const store = useUserStore()
const isAuthenticated=store.state.isAuthenticated
//로그인한 유저
const loginUser=store.state.user

// 현재 프로필의 유저 아이디
const route = useRoute()
const profileUserId = route.params.userId
const profileUser = ref([])

const getProfileUserInfo = function () {
  const API_URL=store.API_URL
  const token = store.token
    axios({
      method: 'get',
      url: `${API_URL}/accounts/profile/${profileUserId}`, // 사용자 정보를 가져오는 API 엔드포인트
      headers: {
        Authorization: `Token ${token}` // 토큰을 헤더에 포함
      }
    })
      .then(res => {
        profileUser.value = res.data // 사용자 데이터 저장
        // console.log(profileUser.value)
      })
      .catch(err => {
        console.log(err)
      })
}

onMounted(() => {
  getProfileUserInfo()
})

// 로그인한 유저와 프로필 유저 아이디가 일치할때, 수정가능


</script>

<style scoped>

</style>