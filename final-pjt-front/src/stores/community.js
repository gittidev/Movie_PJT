import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios';
import { useUserStore } from '@/stores/users';
const API_URL = 'http://127.0.0.1:8000';




export const useCommunityStore = defineStore('community', () => {
  const store = useUserStore()
  const loginUser = store.state.user
  const token = store.token
  const communities = ref([])
  const newCommunity = ref([])
  const communityInfo = ref({})
  const commentList = ref([])
  const newComment = ref('')


  // 커뮤니티 목록 정보 가져오기
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

  //단일 커뮤니티 정보 가져오기
    const getCommunityInfo = function (communityId) {
      axios({
        method: 'get',
        url: `${API_URL}/marshmovie/communities/${communityId}/`,
      })
        .then(response => {
          communityInfo.value = response.data
        })
        .catch(error => console.error(error))
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
      .catch(error => {
        console.error(error.response.data); // 오류 메시지를 출력
      });
  };
  

  //커뮤니티 수정하기(로그인한 사용자가 생성자와 같을떄 component에서 체크)
  const updateCommunity = function (payload, communityId) {
    const { title, content , movie_title } = payload;
    return axios({
      method: 'put',
      url: `${API_URL}/marshmovie/communities/${communityId}/`,
      headers: {
        Authorization: `Token ${token}`, // 토큰을 헤더에 포함
        'Content-Type': 'application/json'
      },
      data: {
        title: title,
        content: content,
        movie_title: movie_title,
      }
    })
      .then(response => {
        communityInfo.value= response.data
        return communityInfo.value
      })
      .catch(err => {
        console.error(err.response.data); // 오류 메시지를 출력
      });
  };
  


  //커뮤니티 삭제하기(로그인한 사용자가 생성자와 같을떄 component에서 체크)

  const deleteCommunity = function (communityId) {
    return axios({
      method: 'delete',
      url: `${API_URL}/marshmovie/communities/${communityId}/`,
      headers: {
        Authorization: `Token ${token}`, // 토큰을 헤더에 포함
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        alert('삭제완료')
      })
      .catch(err => {
        console.error(error.response.data); // 오류 메시지를 출력
      });
  };
  


  //커뮤니티 좋아요 기능



  //커뮤니티 싫어요 기능



  //댓글 목록 불러오기
  const getCommentList = function (communityId) {
    axios({
      method: 'get',
      url: `${API_URL}/marshmovie/communities/${communityId}/comments/`,
    })
    .then(res => {
        // console.log(res.data)
        commentList.value = res.data
      })
      .catch(err => console.error(err))
  }


  //댓글 생성하기
  const createComment = function (payload, communityId) {
    const { content, user } = payload;
    return axios({
      method: 'post',
      url: `${API_URL}/marshmovie/communities/${communityId}/comments/create/`,
      headers: {
        Authorization: `Token ${token}`, // 토큰을 헤더에 포함
        'Content-Type': 'application/json'
      },
      data: {
        content: content ,
        user :  user,
      }
    })
      .then(response => {
        console.log(response)
        newComment.value= response.data
      })
      .catch(error => {
        console.error(error); // 오류 메시지를 출력
      });
  };
  

  //댓글 삭제하기
  const deleteComment = function (commentId) {
    return axios({
      method: 'delete',
      url: `${API_URL}/marshmovie/comments/${commentId}/delete`,
      headers: {
        Authorization: `Token ${token}`, // 토큰을 헤더에 포함
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        alert('삭제완료')
      })
      .catch(err => {
        console.error(err.response.data); // 오류 메시지를 출력
      });
  };

  return { communities, token, newCommunity, commentList ,communityInfo,  loginUser, getCommunities, createCommunity, getCommunityInfo, updateCommunity, deleteCommunity, getCommentList, createComment, deleteComment }
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

