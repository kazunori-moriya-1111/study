<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <table class="table table-light table-striped">
            <tbody class="text-left">
                <tr>
                    <th style="width:200px;">ID</th>
                    <td>{{data.json_data.id}}</td>
                </tr>
                <tr>
                    <th>User ID</th>
                    <td>{{data.json_data.user_id}}</td>
                </tr>
                <tr>
                    <th>Title</th>
                    <td>{{data.json_data.title}}</td>
                </tr>
                <tr>
                    <th>Body</th>
                    <td>{{data.json_data.body}}</td>
                </tr>
            </tbody>
        </table>
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
            const url = "http://127.0.0.1:8000/v1/1"
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
