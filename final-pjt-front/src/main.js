// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap'
// kakao login
const kakaoKey = import.meta.env.VITE_APP_KAKAO_KEY;
window.Kakao.init(kakaoKey);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
