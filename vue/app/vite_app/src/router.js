import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import index from './components/index.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            props: true
        },
        {
            path: '/hello',
            name: 'hello',
            component: HelloWorld,
            props: true
        },
    ],
})