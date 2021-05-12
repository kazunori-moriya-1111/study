<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <table class="table table-light table-striped">
            <tbody class="text-left">
                <tr>
                    <th style="width:200px;">id</th>
                    <td>{{ data.json_data.id }}</td>
                </tr>
                <tr>
                    <th style="width:200px;">user_id</th>
                    <td>{{ data.json_data.user_id }}</td>
                </tr>
                <tr>
                    <th style="width:200px;">title</th>
                    <td>{{ data.json_data.title }}</td>
                </tr>
                <tr>
                    <th style="width:200px;">body</th>
                    <td>{{ data.json_data.body }}</td>
                </tr>
            </tbody>
        </table>
    </section>
    <div>
        <router-link to="/index" class="btn btn-primary mx-2">
            Go to index
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

let url = "http://127.0.0.1:8000/v1/detail/"

export default {
    props:{
        user_id: String
    },
    setup(props){
        // データ定義
        const data = reactive({
            title: 'detail page',
            message: 'data detail',
            json_data: '',
        })
        // 一覧表示
        axios.get(url + props.user_id).then((result)=>{
            data.json_data = result.data
        }).catch((error)=>{
            data.message = 'ERROR'
            data.json_data = null
        })
        return{ data }
    },
}
</script>
