<template>
  <div>
    <img
      src="@/assets/kakao_login_medium_wide.png"
      alt="카카오로그인"
      @click="loginWithKakao"
    />
  </div>
</template>

<script>
export default {
  methods: {
    loginWithKakao() {
      Kakao.Auth.authorize({
        redirectUri: "http://localhost:5173",
      });
    },
    displayToken() {
      const token = this.getCookie("authorize-access-token");
      if (token) {
        Kakao.Auth.setAccessToken(token);
        Kakao.Auth.getStatusInfo()
          .then((res) => {
            if (res.status === "connected") {
              this.tokenResult =
                "login success, token: " + Kakao.Auth.getAccessToken();
            }
          })
          .catch((err) => {
            Kakao.Auth.setAccessToken(null);
          });
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
