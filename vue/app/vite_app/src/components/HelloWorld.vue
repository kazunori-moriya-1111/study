<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <p>{{data.json_data.a}} ({{data.json_data.b}})</p>
    </section>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

export default {
    setup(props){
        const data = reactive({
            title: 'Axios',
            message: 'This is axios sample.',
            json_data: '',
        })
        const getData = async()=>{
            const url = "http://127.0.0.1:8000/v1/"
            axios.get(url).then((result)=>{
                data.json_data = result.data
            })
        }
        onMounted(()=>{
            getData()
        })
        return{ data, getData}
    },
}
</script>
