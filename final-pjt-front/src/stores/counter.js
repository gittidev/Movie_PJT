import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const communities = ref([]);
  const API_URL = "http://127.0.0.1:8000";
  const getCommunities = function () {
    axios({
      method: "get",
      url: `${API_URL}/marshmovie/communities/`,
      headers: {
        Authorization: `Token ${token.value}`,
      },
    })
      .then((res) => {
        communities.value = res.data;
      })
      .catch((err) => console.log(err));
  };

  const signUp = function (payload) {
    // const username = payload.username
    // const password1 = payload.password1
    // const password2 = payload.password2
    const { username, password1, password2 } = payload;

    axios({
      method: "post",
      url: `${API_URL}/accounts/signup/`,
      data: {
        username,
        password1,
        password2,
      },
    })
      .then((response) => {
        console.log("회원가입이 완료되었습니다.");
      })
      .catch((err) => console.log(err));
  };

  const token = ref(null);

  const logIn = function (payload) {
    const username = payload.username;
    const password = payload.password;
    axios({
      method: "post",
      url: `${API_URL}/accounts/login/`,
      data: {
        username,
        password,
      },
    })
      .then((res) => {
        console.log(username);
        console.log(password);
        token.value = res.data.key;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return { communities, API_URL, getCommunities, signUp, logIn, token };
});
