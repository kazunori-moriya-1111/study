import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router.js'
import { store } from './store.js'

var app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')