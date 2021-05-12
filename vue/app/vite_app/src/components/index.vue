<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <table class="table table-light table-striped">
            <tbody class="text-left">
                <tr v-for="tmp in data.json_data">
                    <th style="width:200px;">ID</th>
                    <td><router-link to="/hello">{{tmp ? tmp.user_id : '-'}}</router-link></td>
                </tr>
            </tbody>
        </table>
    </section>
    <router-link to="/hello" class="btn btn-primary mx-2">
        Go to hello
    </router-link>
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
            getPaginateCount: '',
        })
        // 一覧表示
        console.log("setup内でもメソッドを使用する")
        axios.get(url).then((result)=>{
            data.json_data = result.data
            console.log(result.data[0])
            console.log(result.data[0].body)
        }).catch((error)=>{
            data.message = 'ERROR'
            data.json_data = null
        })
        // 追加
        const doAdd = ()=>{
            //URLSearchParamsを使用してpostデータ送信する
            let params = new URLSearchParams();
            params.append('user_id', form_data.user_id);
            console.log(form_data.user_id)
            axios.post(add_url, params).then((result)=>{
                console.log(result.data)
                //キーを指定して特定のデータを抽出
                console.log(result.data.result)
            }).catch((error)=>{
                console.log('error')
            })
        }
        return{ data }
    },
}
</script>
