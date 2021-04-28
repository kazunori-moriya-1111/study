<template>
    <div class="alert alert-primary">
        <h1>{{title}}</h1>
        <p class="mt-3 h5">{{data.msg}}</p>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    props: {
        title:String
    },
    setup(props, context){
        const data = reactive({
            msg: 'This is ref-value!',
        })
        data.msg = context.attrs['msg'].toUpperCase()
        return{
            data
        }
    }
}
</script>
