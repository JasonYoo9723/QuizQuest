import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia()) // pinia 먼저 등록
app.use(router)        // router도 등록
app.mount('#app')      // mount