import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import logoData from './js/svg'
import common from './js/common'


const app = createApp(App)
app.use(router)
app.use(logoData)
app.use(common)
app.mount('#app')