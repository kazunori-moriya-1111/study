<template>
    <section class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p>{{data.message}}</p>
        <table class="table table-light table-striped">
            <tbody class="text-left">
                <tr v-for="(tmp, i) in data.json_data" :key=i>
                    <th style="width:200px;">ID</th>
                    <td>
                        <input :id="'tmp' + i" type="checkbox" :value="tmp.user_id" v-model="data.delete_user_id_list">
                        <label :for="'tmp' + i">{{tmp ? tmp.user_id : '-'}}</label>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    <div class="alert alert-warning">
        <div class="font-weight-bolder">削除対象一覧</div>
        <p>{{ data.delete_user_id_list }}</p>
    </div>
    <p>{{ data.result_message }}</p>
    <div>
        <!-- 削除処理 -->
        <button class="btn btn-primary m-2" @click="doDelete">delete</button>
        <!-- 一覧へ -->
        <router-link to="/index" class="btn btn-primary mx-2">
            Go to index
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

let url = "http://127.0.0.1:8000/v1/index"
let delete_url = "http://127.0.0.1:8000/v1/delete"

export default {
    setup(props){
        // データ定義
        const data = reactive({
            title: 'index page',
            message: 'data list',
            json_data: '',
            delete_user_id_list: [],
        })
        // 一覧表示
        axios.get(url).then((result)=>{
            data.json_data = result.data
        }).catch((error)=>{
            data.message = 'ERROR'
            data.json_data = null
        })
        // 削除
        const doDelete = ()=>{
            console.log("deleteボタン確認")
            console.log(data.delete_user_id_list)
            //URLSearchParamsを使用してpostデータ送信する
            let params = new URLSearchParams();
            params.append('user_id_list', data.delete_user_id_list);
            axios.post(delete_url, params).then((result)=>{
                console.log(result.data)
                //キーを指定して特定のデータを抽出
                console.log(result.data.result)
                data.result_message =  "complete delete"
            }).catch((error)=>{
                console.log('error')
                data.result_message =  "failure delete"
            })
        }
        return{ data, doDelete }
    },
}
</script>
