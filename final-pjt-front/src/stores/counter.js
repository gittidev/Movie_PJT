import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useCounterStore = defineStore('counter', () => {
  const communities = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const router = useRouter() 


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
      .catch(err => console.log(err))
  }

  const signUp = function (payload) {
    // const username = payload.username
    // const password1 = payload.password1
    // const password2 = payload.password2
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

  const token = ref(null)

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

  return { communities, API_URL, getCommunities, signUp, logIn, token }
})
