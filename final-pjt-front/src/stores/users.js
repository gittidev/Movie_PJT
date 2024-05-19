import { ref,reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'



export const useUserStore = defineStore('user', () => {
  const state = reactive({
    user: null,
    isAuthenticated: false,
  })
  const API_URL = 'http://127.0.0.1:8000'
  const router = useRouter() 
  const token = ref(null)
  
  //회원가입
  const signUp = function (payload) {
    const { username, password1, password2, email, nickname } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, password1, password2, email, nickname
      }
    })
      .then((response) => {
        router.push({ name: 'movie' })
        alert('회원가입이 완료되었습니다.')
       
      })
      .catch(err => 
        { console.error('Error:', err.response ? err.response.data : err.message);})
  }

  //회원탈퇴 
  const deleteUser = function () {
    axios({
      method: 'delete',
      url: `${API_URL}/accounts/delete/`,
      headers: {
        Authorization: `Token ${token.value}` // 토큰을 헤더에 포함
      }})
      .then(() => {
        alert('회원탈퇴가 완료되었습니다.')
        logOut()
        router.push({ name: 'home' })
      })
      .catch(err => console.log(err))
  }



  // 로그인
  const logIn = function (payload) {
    const username = payload.username
    const password = payload.password

    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username, password
      }
    })
      .then(res => {
        token.value = res.data.key
        // console.log(res.data)
        state.isAuthenticated = true
        getUserInfo()
        router.push({ name: 'movie' })// 로그인 후 영화소개 화면으로 전환
      })
      .catch(err => console.log(err))
  }

  // 사용자 정보 가져오기
  const getUserInfo = function () {
    axios({
      method: 'get',
      url: `${API_URL}/accounts/user/`, // 사용자 정보를 가져오는 API 엔드포인트
      headers: {
        Authorization: `Token ${token.value}` // 토큰을 헤더에 포함
      }
    })
      .then(res => {
        state.user = res.data // 사용자 데이터 저장
        console.log(state.user) 
      })
      .catch(err => {
        console.log(err)
        state.isAuthenticated = false
        state.user = null
      })
  }


  //로그아웃
  const logOut = function () {
    token.value = null; //토큰 초기화
    state.isAuthenticated = false //사용자 상태관리
    state.user = null
    router.push({ name: 'login' }); // 로그아웃 후 로그인 화면으로 전환

  };


  return {state, API_URL, token, signUp, deleteUser, logIn, logOut };
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: sessionStorage,  // sessionStorage를 사용하여 로그인 상태를 저장// 창 끄거나 탭 종료시 로그아웃됨
        paths: ['token']  // 'token' 상태를 지속성 있게 유지합니다.
      }
    ]
  }
});