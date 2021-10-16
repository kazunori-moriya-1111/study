<template>
    <div class="card alert-primary">
        <div class="card-body text-left">
            <h2 class="card-title text-center">{{ title }}</h2>
            <p class="card-text h5">{{ message }}</p>
            <hr>
            <div>
                <!-- 式を入力するテキストエリア -->
                <div class="form-group">
                    <label>Formula:</label>
                    <textarea class="form-control mb-2" v-model="formula"></textarea>
                </div>
                <!-- 計算実行ボタン -->
                <div class="text-center">
                    <button class="btn btn-primary" v-on:click="doAction">CALC</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calc',
    // 親コンポーネントから属性として操作できるように設定する値
    props: {
        title: String,
    },
    // 常に変更がかかる値
    data(){
        return {
            message: 'Enter expression',
            // v-modelでテキストエリアと常に同期
            formula: 0
        }
    },
    methods:{
        doAction(){
            let arr = this.formula.trim().split('\n')
            let last = arr.pop()
            let fn = ''
            for(let n in arr){
                if(arr[n].trim() != ''){
                    fn +=　'let ' + arr[n] + ';'
                }
            }
            fn += 'return ' + last + ';'
            let exp = 'function f(){' + fn + '} f();'
            let ans = eval(exp)
            this.message = 'answer: ' + ans
            let re = arr.join(';').trim()
            if (re != '') { re += ';' }
            re += last
            this.$emit('result-event', re, ans)
        }
    }
}
</script>
