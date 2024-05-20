import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios';
import { useUserStore } from '@/stores/users';
const API_URL = 'http://127.0.0.1:8000';




export const useCommunityStore = defineStore('community', () => {
  const store = useUserStore()
  const token = store.token
  const communities = ref([])
  const newCommunity = ref([])
  
  // 커뮤니티 정보 가져오기
  const getCommunities = function () {
    axios({
      method: 'get',
      url: `${API_URL}/marshmovie/communities/`,
    })
      .then(res => {
        communities.value = res.data
      })
      .catch(err => console.error(err))
  }


  // 커뮤니티 생성하기
  const createCommunity = function (payload) {
    const { title, content, movie, create_user } = payload;
    return axios({
      method: 'post',
      url: `${API_URL}/marshmovie/communities/create/`,
      headers: {
        Authorization: `Token ${token}`, // 토큰을 헤더에 포함
        'Content-Type': 'application/json'
      },
      data: {
        title: title,
        content: content,
        movie: movie,
        create_user: create_user
      }
    })
      .then(response => {
        newCommunity.value= response.data
        return newCommunity.value
      })
      .catch(err => {
        console.error(err.response.data); // 오류 메시지를 출력
      });
  };
  


  return { communities, token, newCommunity, getCommunities, createCommunity }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,  // sessionStorage를 사용하여 로그인 상태를 저장// 창 끄거나 탭 종료시 로그아웃됨
        paths: ['token']  // 'token' 상태를 지속성 있게 유지합니다.
      }
    ]
  }
});

