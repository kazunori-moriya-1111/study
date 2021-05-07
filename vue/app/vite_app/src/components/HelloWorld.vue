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
        <div class="form-group">
            <input type="text" name="user_id" placeholder="User IDを入力してください" v-model="form_data.user_id">
            <input type="text" name="title" placeholder="titleを入力してください" v-model="form_data.title">
            <input type="text" name="body" placeholder="bodyを入力してください" v-model="form_data.body">
            <button class="btn btn-primary m-2" @click="doAdd">追加する</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

let url = "http://127.0.0.1:8000/v1/"
let add_url = "http://127.0.0.1:8000/v1/add"

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
            user_id : '3',
            title : '',
            body : '',
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
            //URLSearchParamsを使用してpostデータ送信する
            let params = new URLSearchParams();
            params.append('user_id', form_data.user_id);
            console.log(form_data.user_id)
            axios.post(add_url, params).then((result)=>{
                console.log(result.data)
            }).catch((error)=>{
                console.log('error')
            })
        }
        return{ data, form_data, doClick, doAdd }
    },
}
</script>
