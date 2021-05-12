<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <div class="form-group">
            <p>user_id</p>
            <input type="text" name="user_id" placeholder="User IDを入力してください" v-model="form_data.user_id">
            <p>title</p>
            <input type="text" name="title" placeholder="titleを入力してください" v-model="form_data.title">
            <p>body</p>
            <input type="text" name="body" placeholder="bodyを入力してください" v-model="form_data.body">
        </div>
    </section>
    <p>{{ data.result_message }}</p>
    <!-- 追加処理 -->
    <button class="btn btn-primary m-2" @click="doAdd">add</button>
    <!-- 一覧へ -->
    <router-link to="/index" class="btn btn-primary mx-2">
        Go to index
    </router-link>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

let add_url = "http://127.0.0.1:8000/v1/add"

export default {
    setup(props){
        // データ定義
        const data = reactive({
            title: 'add page',
            message: 'input form',
            json_data: '',
            result_message: ''
        })
        // フォームデータ定義
        const form_data = reactive({
            user_id: '',
            title: '',
            body: ''
        })
        // 追加
        const doAdd = ()=>{
            //URLSearchParamsを使用してpostデータ送信する
            let params = new URLSearchParams();
            params.append('user_id', form_data.user_id);
            params.append('title', form_data.title);
            params.append('body', form_data.body);
            axios.post(add_url, params).then((result)=>{
                console.log(result.data)
                //キーを指定して特定のデータを抽出
                console.log(result.data.result)
                data.result_message =  "complete add"
            }).catch((error)=>{
                console.log('error')
                data.result_message =  "failure add"
            })
        }
        return{ data, form_data, doAdd }
    },
}
</script>
