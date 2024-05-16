<template>
    <div>
        <button @click="loginWithKakao">카카오 로그인</button>
    </div>
</template>

<script>
export default {
    methods: {
    loginWithKakao() {
      Kakao.Auth.authorize({
        redirectUri: 'http://localhost:5173',
      });
    },
    displayToken() {
      const token = this.getCookie('authorize-access-token');
      if (token) {
        Kakao.Auth.setAccessToken(token);
        Kakao.Auth.getStatusInfo()
          .then(res => {
            if (res.status === 'connected') {
              this.tokenResult = 'login success, token: ' + Kakao.Auth.getAccessToken();
            }
          })
          .catch(err => {
            Kakao.Auth.setAccessToken(null);
          });
      };
    }}};
</script>

<style scoped></style>
