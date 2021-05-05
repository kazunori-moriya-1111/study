<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <div class="form-group">
            <input type="number" class="form-control" v-model="data.id">
            <button class="btn btn-primary m-2" @click="doClick">click</button>
        </div>
        <table class="table table-light table-striped">
            <tbody class="text-left">
                <tr>
                    <th style="width:200px;">ID</th>
                    <td>{{data.json_data ? data.json_data.id : '-'}}</td>
                </tr>
                <tr>
                    <th>User ID</th>
                    <td>{{data.json_data ? data.json_data.user_id : '-'}}</td>
                </tr>
                <tr>
                    <th>Title</th>
                    <td>{{data.json_data ? data.json_data.title : '-'}}</td>
                </tr>
                <tr>
                    <th>Body</th>
                    <td>{{data.json_data ? data.json_data.body : '-'}}</td>
                </tr>
            </tbody>
        </table>
        <p>User ID</p>
        <input type="text" name="user_id" placeholder="User IDを入力してください" v-model="form_data.user_id">
        <button class="btn btn-primary m-2" @click="doAdd">追加する</button>
    </section>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

let url = "http://127.0.0.1:8000/v1/"

export default {
    setup(props){
        const data = reactive({
            title: 'Axios',
            message: 'This is axios sample.',
            id:0,
            json_data: '',
        })
        // フォームデータ
        const form_data = reactive({
            user_id : ''
        })
        // 検索
        const doClick = ()=>{
            axios.get(url + data.id).then((result)=>{
                data.json_data = result.data
            }).catch((error)=>{
                data.message = 'ERROR'
                data.json_data = null
            })
        }
        // 追加
        const doAdd = ()=>{
            console.log(form_data.user_id)
        }
        return{ data, form_data, doClick, doAdd }
    },
}
</script>
