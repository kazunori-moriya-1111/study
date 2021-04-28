<template>
    <div class="alert alert-primary">
        <h1>{{title}}</h1>
        <p class="h5">{{data.msg}}</p>
        <div>
            <input type="number" v-model="data.num" min="0" class="form-control">
        </div>
        <button class="btn btn-primary m-3" v-on:click="action">Click</button>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    props: {
        title:String
    },
    setup(props){
        const data = reactive({
            msg: 'This is ref-value!',
            num: 0
        })
        const action = ()=> {
            let total = 0
            for(let i = 1; i <= data.num; i++){
                total += i
            }
            data.msg = "Total: " + total
        }
        return{
            data, action
        }
    }
}
</script>
