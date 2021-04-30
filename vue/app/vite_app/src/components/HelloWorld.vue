<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <textarea v-model="data.mydata" rows="5" class="form-control"></textarea>
    </section>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

const url = "http://127.0.0.1:8000/v1/"

export default {
    setup(props){
        const data = reactive({
            title: 'Axios',
            message: 'This is axios sample.',
            mydata: '',
        })
        const getData = async()=>{
            let result = await axios.get(url)
            console.log(result.data)
            data.mydata = result.data
        }
        onMounted(()=>{
            getData()
        })
        return{ data, getData}
    },
}
</script>
