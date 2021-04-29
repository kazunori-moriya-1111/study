import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
    state :()=> {
        return {
            message: 'count number.',
            counter: 0,
        }
    },
    mutations: {
        doit: (state, n)=>{
            var n = Math.floor(Math.random() * 10)
            state.counter += n
            state.message = 'add ' + n + ' !';
        },
        reset: (state)=>{
            state.message = "reset now"
            state.counter = 0
        },
    },
    plugins:[
        createPersistedState(),
    ],
})