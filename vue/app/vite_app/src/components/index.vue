<template>
    <section class="alert alert-primary">
        <h1>{{data.title}} index index index</h1>
        <p>{{data.message}}</p>
        <div class="form-group">
            <input type="number" class="form-control" v-model="data.id">
            <button class="btn btn-primary m-2" @click="doClick">click</button>
        </div>
        <table class="table table-light table-striped">
            <tbody class="text-left">
                <tr v-for="tmp in data.json_data">
                    <th style="width:200px;">ID</th>
                    <td>{{tmp ? tmp.user_id : '-'}}</td>
                </tr>
            </tbody>
        </table>

    </section>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

let url = "http://127.0.0.1:8000/v1/index"

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
            axios.get(url).then((result)=>{
                data.json_data = result.data
                console.log(result.data)
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
                //キーを指定して特定のデータを抽出
                console.log(result.data.result)
            }).catch((error)=>{
                console.log('error')
            })
        }
        return{ data, doClick }
    },
}
</script>
