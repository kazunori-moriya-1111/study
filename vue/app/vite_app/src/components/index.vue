<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <table class="table table-light table-striped">
            <tbody class="text-left">
                <tr v-for="tmp in data.json_data">
                    <th style="width:200px;">ID</th>
                    <td><router-link :to="{name: 'detail', params: {user_id: tmp.user_id}}">{{tmp ? tmp.user_id : '-'}}</router-link></td>
                </tr>
            </tbody>
        </table>
    </section>
    <div>
        <router-link to="/add" class="btn btn-primary mx-2">
            Go to add
        </router-link>
        <router-link to="/delete" class="btn btn-primary mx-2">
            Go to delete
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

let url = "http://127.0.0.1:8000/v1/index"

export default {
    setup(props){
        // データ定義
        const data = reactive({
            title: 'index page',
            message: 'data list',
            json_data: '',
        })
        // 一覧表示
        axios.get(url).then((result)=>{
            data.json_data = result.data
        }).catch((error)=>{
            data.message = 'ERROR'
            data.json_data = null
        })
        return{ data }
    },
}
</script>
