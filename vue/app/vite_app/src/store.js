import {createStore} from 'vuex'

export const store = createStore({
    state :()=> {
        return {
            message: 'count number.',
            counter: 0,
        }
    },
    mutations: {
        count: (state, n)=>{
            state.counter += n
        },
        say: (state, msg)=>{
            state.message = msg
        },
        reset: (state)=>{
            state.message = "reset!"
            state.counter = 0
        },
    },
    actions: {
        doit: (context)=>{
            var n = Math.floor(Math.random() * 10)
            context.commit('count', n)
            context.commit('say', 'add ' + n + ' !')
        },
    }
})