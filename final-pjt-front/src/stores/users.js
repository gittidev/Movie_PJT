import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'
import axiosInstance from '@/axiosInstance'



export const useUserStore = defineStore('user', () => {
  const state = reactive({
    user: null,
    isAuthenticated: false,
  })

  const API_URL = 'http://127.0.0.1:8000'
  const router = useRouter()
  const token = ref(localStorage.getItem('token') || null);


  // 사용자 정보 가져오기
  const getUserInfo = function () {
    if (!token.value) return;

    axios({
      method: 'get',
      url: `${API_URL}/accounts/user/`,
      headers: {
        Authorization: `Token ${token.value}`,
      },
    })
      .then(res => {
        state.user = res.data;
        state.isAuthenticated = true;
      })
      .catch(err => {
        console.error(err);
        state.isAuthenticated = false;
        state.user = null;
      });
  };

  //회원가입
  const signUp = (payload) => {
    const { username, password1, password2, email, nickname } = payload;

    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username,
        password1,
        password2,
        email,
        nickname,
      },
    })
    .then(() => {
      router.push({ name: 'movie' });
      alert('회원가입이 완료되었습니다.');
    })
    .catch(err => {
      console.error('Error:', err.response ? err.response.data : err.message);
    });
  };
  //회원탈퇴 
  const deleteUser = function () {
    axios({
      method: 'delete',
      url: `${API_URL}/accounts/delete/`,
      headers: {
        Authorization: `Token ${token.value}` // 토큰을 헤더에 포함
      }
    })
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

        localStorage.setItem('token', token.value);
        state.isAuthenticated = true
        getUserInfo()

        router.push({ name: 'movie' }); // 로그인 후 영화소개 화면으로 전환
      })
      .catch(err => {
        alert('가입된 정보와 일치하지 않습니다.')
      })
  }


  //로그아웃
  const logOut = function () {
    token.value = null; //토큰 초기화
    state.isAuthenticated = false; //사용자 상태관리
    state.user = null;
    localStorage.removeItem('token');
    router.push({ name: 'login' }); // 로그아웃 후 로그인 화면으로 전환
  };

  // 비밀번호 변경
  const changePassword = function (payload) {
    const newPassword1 = payload.newPassword1
    const newPassword2 = payload.newPassword2
    const oldPassword = payload.oldPassword

    axiosInstance({
      method: 'post',
      url: `/accounts/password/change/`,
      headers: {
        Authorization: `Token ${token.value}`
      },
      data: {
        new_password1: newPassword1,
        new_password2: newPassword2,
        old_password: oldPassword
      }
    })
      .then(res => {
        alert('비밀번호가 변경되었습니다.')
        router.push({ name: 'home' })
      })
      .catch(err => {
        alert('새 비밀번호와 확인 칸의 비밀번호가 일치하지 않거나, 새 비밀번호에 특수문자가 들어있지 않습니다.')
      })
  }

  getUserInfo()

  return { state, API_URL, token, signUp, deleteUser, logIn, logOut, changePassword, getUserInfo };
}, {
  persist: {
    // enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,  // sessionStorage를 사용하여 로그인 상태를 저장// 창 끄거나 탭 종료시 로그아웃됨
        paths: ['token']  // 'token' 상태를 지속성 있게 유지합니다.
      }
    ]
  }
});