<template>
  <div class="login">
    <div class="card login-body" style="width: 25rem; height: 30rem; padding: 1rem">
      <div class="card-body">
        <form @submit.prevent="logIn">
          <div class="d-grid gap-2 col-12 mx-auto">
            <label for="username">username: </label>
            <input
              class="form-control mx-auto"
              type="text"
              id="username"
              v-model.trim="username"
            />
          </div>
          <div class="d-grid gap-2 m-2 col-12 mx-auto">
            <label for="password">password: </label>
            <input
              class="form-control"
              type="password"
              id="password"
              v-model.trim="password"
            />
          </div>

          <div class="d-grid gap-2 m-3 col-12 mx-auto">
            <input type="submit" class="btn btn-primary" value="login" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/users";

const username = ref(null);
const password = ref(null);
const store = useUserStore();

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
  /* background-color:rgba(255,255,255,0.1); */
  backdrop-filter: blur(80px);
  width: 30rem;
  height: 40rem;
  text-align: center;
}
</style>
