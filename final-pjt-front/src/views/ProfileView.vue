<template> <!-- 컴포넌트 재사용을 위하여, 프로필 유저의 id값은 useRoute로 사용 -->
    <div class="profile-body">
      <div class="profile-hander">
        <div class="row">
          <div class="col-4">
            <img src="@/assets/profile.png" alt="기본이미지" style="width: 10rem;">
          </div>
          <div class="col">
            <h1>{{profileUser.nickname}}님의 공간입니다</h1>
            <p v-if="loginUser.pk==profileUserId"> ID : {{profileUserId}}</p>
            <p v-if="loginUser.pk==profileUserId"> E-MAIL : {{profileUser.email}}</p>
            
            <div class="col">
              <RouterLink v-if="loginUser.pk==profileUserId" :to="{ name: 'profileupdate', params: { userId: profileUserId } }" class="btn btn-primary">회원정보 수정</RouterLink>
              <RouterLink v-if="loginUser.pk==profileUserId" :to="{ name: 'passwordchange'}" class="btn btn-primary">비밀번호 변경</RouterLink>
            </div>
          </div>
        </div>
        <div class="col list-handler">
          <p>좋아요한 영화 목록</p>
          <p>생성한 커뮤니티 목록</p>
        </div>
        
      
      </div>


      <div>

      </div>

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/users'
import { ref, onMounted } from "vue";
import axios from 'axios'
import { RouterLink } from 'vue-router'

const store = useUserStore()
const isAuthenticated=store.state.isAuthenticated
//로그인한 유저
const loginUser=store.state.user


// 현재 프로필의 유저 아이디
const route = useRoute()
const profileUserId = route.params.userId
const profileUser = ref([])
// console.log(loginUser.pk)
// console.log(profileUserId)

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
.profile-body {
  position: relative;
}

.profile-hander {
  position: absolute;
  top: 2rem;
  left: 2rem;
  margin-top: 2rem;
}
button {
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}

.list-handler {
  margin: 10px;
}

</style>