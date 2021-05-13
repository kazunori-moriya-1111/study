import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import index from './components/index.vue'
import detail from './components/detail.vue'
import add from './components/add.vue'
import delete_vue from './components/delete.vue'

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
            path: '/detail',
            redirect: '/index'
        },
        {
            path: '/detail/:user_id',
            name: 'detail',
            component: detail,
            props: true
        },
        {
            path: '/add',
            name: 'add',
            component: add,
            props: true
        },
        {
            path: '/delete',
            name: 'delete_vue',
            component: delete_vue,
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