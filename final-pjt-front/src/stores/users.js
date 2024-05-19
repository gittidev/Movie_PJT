import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const communities = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const router = useRouter() 
  const token = ref(null)
  
  const getCommunities = function () {
    axios({
      method: 'get',
      url: `${API_URL}/marshmovie/communities/`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    })
      .then(res => {
        communities.value = res.data
      })
      .catch(err => console.err)
  }

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
        console.log('회원가입이 완료되었습니다.')
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
        console.log(res.data)
        // 로그인 후 영화소개 화면으로 전환
        router.push({ name: 'movie' })
      })
      .catch(err => console.log(err))
  }


  //로그아웃
  const logOut = function () {
    token.value = null;
    router.push({ name: 'login' });  // 로그아웃 후 로그인 화면으로 전환
  };


  return { communities, token, API_URL, getCommunities, signUp, logIn, logOut };
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