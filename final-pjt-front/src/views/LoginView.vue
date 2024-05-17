<template>
  <div class="login">
    <div class="login-body">
      <div>
        <h1>로그인</h1>
        <form @submit.prevent="logIn">
          <label for="username">username: </label>
          <input type="text" id="username" v-model.trim="username" /><br />

          <label for="password">password: </label>
          <input type="password" id="password" v-model.trim="password" /><br />

          <input type="submit" value="login" />
        </form>
      </div>

      <div>
        <KakaoLogin />
      </div>
    </div>
  </div>
</template>

<script setup>
import KakaoLogin from "@/components/KakaoLogin.vue";
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const username = ref(null);
const password = ref(null);
const store = useCounterStore();

const logIn = function () {
  const payload = {
    username: username.value,
    password: password.value,
  };
  store.logIn(payload);
};
</script>

<style scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-body {
  position: absolute;
  top: 5rem;
  background-color: blanchedalmond;
  width: 30rem;
  height: 40rem;
  text-align: center;
}

h1 {
  color: white;
}
</style>
