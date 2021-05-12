import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import index from './components/index.vue'
import detail from './components/detail.vue'

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
            path: '/detail/:user_id',
            name: 'detail',
            component: detail,
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