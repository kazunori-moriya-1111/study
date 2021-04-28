import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'index',
            component: HelloWorld,
        },
        {
            path: '/jsx',
            name: 'jsx',
            component: HelloJSX,
        },
    ],
})