import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios';
import { useUserStore } from '@/stores/users';
const API_URL = 'http://127.0.0.1:8000'; 

const store = useUserStore()

export const useCommunityStore = defineStore('community', () => {
    // const state=ref({
    //     isAuthenticated: false,
    //     user: null,
    //     token: null,
    //     communities: []
    // }) 
    const token = store.token
    const communities = ref([])
      // 커뮤니티 정보 가져오기
    const getCommunities = function () {
    axios({
      method: 'get',
      url: `${API_URL}/marshmovie/communities/`,
      // headers: {
      //   Authorization: `Token ${token.value}`
      // }
    })
      .then(res => {
        communities.value = res.data
      })
      .catch(err => console.err)
  }
  return { communities, getCommunities };
});

