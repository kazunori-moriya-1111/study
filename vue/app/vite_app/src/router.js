import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'index',
            components: {
                default: HelloWorld,
                first: HelloWorld,
                second: HelloJSX
            },
        },
        {
            path: '/jsx',
            name: 'jsx',
            components: {
                default: HelloJSX,
                first: HelloJSX,
                second: HelloWorld
            },
        },
    ],
})