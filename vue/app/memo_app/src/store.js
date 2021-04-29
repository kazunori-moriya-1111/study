import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
    state: ()=>{
        return{
            memo: [],
            page: 0,
        }
    },
    mutations: {
        insert: (state, obj)=>{
            var d = new Date()
            var fmt = d.getFullYear() + '-' + (d.getMonth() + 1)
                    + '-' + d.getDate() + ' ' + d.getHours() + ':'
                    + d.getMinutes()
            state.memo.unshift({
                title: obj.title,
                content: obj.content,
                created: fmt
            })
        },

        set_page: (state, p)=>{
            state.page = p;
        },

        remove: (state, obj)=>{
            for (let i = 0; i < state.memo.length; i++){
                const ob = state.memo[i]
                if (ob.title == obj.title
                    && ob.content == obj.content
                    && ob.created == obj.created){
                        alert('remove it! --' + ob.title)
                        state.memo.splice(i, 1)
                        return
                }
            }
        }
    },
    plugins:[
        createPersistedState(),
    ],
})