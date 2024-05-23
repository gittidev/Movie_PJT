<template>
    <div class="updateinfo">
        <div class="card updateinfohandler" style="width: 25rem; height:39rem; padding: 1rem;">
            <div class="card-body">
                <form @submit.prevent="profileUpdate">
                    <div class="d-grid gap-2 col-12 mx-auto">
                        <label for="firstname">이름(firstname)</label>
                        <input class="form-control" type="text" id="firstname" v-model.trim="firstname" 
                        placeholder="이름(firstname)을 입력하세요"/>
                    </div>

                    <div class="d-grid gap-2 m-2 col-12 mx-auto">
                        <label for="lastname">성(lastname)</label>
                        <input class="form-control" type="text" id="lastname" v-model.trim="lastname" 
                        placeholder="성(lastname)을 입력하세요"/>
                    </div>
                    
                    <div class="d-grid gap-2 m-2 col-12 mx-auto">
                        <label for="email">이메일</label>
                        <input class="form-control" type="email" id="email" v-model.trim="email" 
                        placeholder="이메일을 입력하세요"/>
                    </div>

                    <div class="d-grid gap-2 m-2 col-12 mx-auto">
                        <label for="nickname">별명(nickname)</label>
                        <input class="form-control" type="text" id="nickname" v-model.trim="nickname" 
                        placeholder="별명을 입력하세요"/>
                    </div>
                    
                    <div class="d-grid gap-2 m-2 col-12 mx-auto">
                        <label for="profileImg">프로필 이미지</label>
                        <input class="form-control" type="file" id="profileImg" @change="handleFileUpload" />
                    </div>

                    <div class="d-grid gap-2 m-3 col-12 mx-auto">
                        <input type="submit" class="btn btn-primary" value="회원정보 수정" />
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
import { ref } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import { useUserStore } from '@/stores/users'

const route = useRoute()
const router = useRouter()
const profileUserId = route.params.userId
const store = useUserStore()

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const nickname = ref('')
const profileImg = ref(null)

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        profileImg.value = file
    }
}

const profileUpdate = () => {
    const formData = new FormData()
    if (firstname.value.trim() !== '') {
        formData.append('first_name', firstname.value);
    }
    if (lastname.value.trim() !== '') {
        formData.append('last_name', lastname.value);
    }
    if (email.value.trim() !== '') {
        formData.append('email', email.value);
    }
    if (nickname.value.trim() !== '') {
        formData.append('nickname', nickname.value);
    }
    if (profileImg.value) {
        formData.append('profile_image', profileImg.value);
    }

    axios({
        method: 'patch',
        url: `http://127.0.0.1:8000/accounts/profile/update/${profileUserId}/`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Token ${store.token}`,
        }
    })
        .then(response => {
            console.log('Profile updated successfully:', response.data)
            router.push({name:'profile', params:{userId:profileUserId }})
        })
        .catch(error => {
            console.error('Error updating profile:', error)
        })
};
</script>

<style scoped>
.updateinfo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.updateinfohandler {
  position: absolute;
  top: 5rem;
  /* background-color:rgba(255,255,255,0.1); */
  backdrop-filter: blur(80px);
  width: 30rem;
  height: 40rem;
  text-align: center;
}
</style>