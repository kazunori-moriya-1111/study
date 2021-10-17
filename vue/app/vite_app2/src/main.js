import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router.js'

var app = createApp(App)
app.use(router)
app.mount('#app')