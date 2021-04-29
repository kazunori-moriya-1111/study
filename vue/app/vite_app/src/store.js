import {createStore} from 'vuex'

export const store = createStore({
    state () {
        return {
            message: 'This is store data.',
            counter: 0,
        }
    },
    mutations: {
        count: (state, n)=>{
            state.counter += n
        },
        reset: (state)=>{
            state.counter = 0
        }
    },
})