import {createStore} from 'vuex'

export const store = createStore({
    state () {
        return {
            message: 'This is store data.',
            counter: 0,
        }
    },
    mutations: {
        count: (state, obj)=>{
            state.message = obj.message
            state.counter += obj.add
        },
        reset: (state)=>{
            state.message = "reset!"
            state.counter = 0
        }
    },
})