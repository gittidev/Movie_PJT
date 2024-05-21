<template>
<div class="pwchange">
    <div class="card pwchange-body" style="width: 25rem; height: 30rem; padding: 1rem">
        <div class="card-body">
            <form @submit.prevent="changePassword">
                <div class="d-grid gap-2 m-2 col-12 mx-auto">
                    <label for="newPassword1">새 비밀번호: </label>
                    <input
                        class="form-control"
                        type="password"
                        id="newPassword1"
                        v-model.trim="newPassword1"
                    />
                </div>
                <div class="d-grid gap-2 m-2 col-12 mx-auto">
                    <label for="newPassword2">새 비밀번호 체크: </label>
                    <input
                        class="form-control"
                        type="password"
                        id="newPassword2"
                        v-model.trim="newPassword2"
                    />
                </div>
                <div class="d-grid gap-2 m-2 col-12 mx-auto">
                    <label for="oldPassword">기존 비밀번호: </label>
                    <input
                        class="form-control"
                        type="password"
                        id="oldPassword"
                        v-model.trim="oldPassword"
                    />
                </div>
                <div class="d-grid gap-2 m-3 col-12 mx-auto">
                    <input type="submit" class="btn btn-primary" value="Change" />
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/users";

const store = useUserStore();

const newPassword1 = ref(null)
const newPassword2 = ref(null)
const oldPassword = ref(null)

const changePassword = function () {
  const payload = {
    newPassword1: newPassword1.value,
    newPassword2: newPassword2.value,
    oldPassword: oldPassword.value
  };
  store.changePassword(payload);
};
</script>

<style scoped>
.pwchange {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pwchange-body {
  position: absolute;
  top: 5rem;
  backdrop-filter: blur(80px);
  width: 30rem;
  height: 40rem;
  text-align: center;
}
</style>