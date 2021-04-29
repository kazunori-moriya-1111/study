import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { store } from './store.js'

var app = createApp(App)
app.use(store)
app.mount('#app')
