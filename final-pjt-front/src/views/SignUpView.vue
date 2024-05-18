<template>
  <div class="signup">
    <div class="card signuphandler" style="width: 25rem; height:39rem; padding: 1rem;">
      <div class="card-body">
        <form @submit.prevent="signUp">
          <div class="d-grid gap-2 col-12 mx-auto">
            <label for="username">아이디</label>
            <input class="form-control mx-auto" type="text" id="username" v-model.trim="username" 
            placeholder="사용할 아이디를 입력하세요"/>
          </div>
          <div class="d-grid gap-2 m-2 col-12 mx-auto">
            <label for="email">이메일</label>
            <input class="form-control" type="email" id="email" v-model.trim="email" 
            placeholder="사용할 이메일을 입력하세요(선택사항)"/>
          </div>
          <div class="d-grid gap-2 m-2 col-12 mx-auto">
            <label for="nickname">사용자명</label>
            <input class="form-control" type="text" id="nickname" v-model.trim="nickname" 
            placeholder="사용할 닉네임을 알려주세요(선택사항)">
          </div>
          <div class="d-grid gap-2 m-2 col-12 mx-auto">
            <label for="password1">비밀번호 </label>
            <input class="form-control" type="password" id="password1" v-model.trim="password1" 
            placeholder="사용할 비밀번호를 입력하세요"/>
          </div>

          <div class="d-grid gap-2 m-2 col-12 mx-auto">
            <label for="password2">비밀번호 재확인</label>
            <input class="form-control" type="password" id="password2" v-model.trim="password2" 
            placeholder="비밀번호를 재입력해주세요"/>
          </div>



      <div class="d-grid gap-2 m-3 col-12 mx-auto">
        <input type="submit" class="btn btn-primary" value="회원가입" />
      </div>
      </form>

      <div class="d-grid gap-2 m-3 col-12 mx-auto">
        <KakaoLogin />
      </div>
    </div>
  </div>
  </div>

</template>

<script setup>
import KakaoLogin from "@/components/KakaoLogin.vue";
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const username = ref(null);
const password1 = ref(null);
const password2 = ref(null);
const email = ref('');
const nickname = ref('');

const signUp = function () {
  const payload = {
    username: username.value,
    password1: password1.value,
    password2: password2.value,
    email: email.value,
    nickname: nickname.value,
  };
  console.log(payload)
  store.signUp(payload);
};
</script>



<style scoped>
.signup {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signuphandler {
  position: absolute;
  top: 5rem;
  /* background-color:rgba(255,255,255,0.1); */
  backdrop-filter: blur(80px);
  width: 30rem;
  height: 40rem;
  text-align: center;
}
</style>
