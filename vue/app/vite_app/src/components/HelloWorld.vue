<template>
    <div class="alert alert-primary">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <hr>
        <p>Number:{{ num }}</p>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        title: String,
        num: {
            type: Number,
            default: 100,
            validator: (value)=>{
                return value == parseInt(value)
                && value >= 0 && value <= 100
            },
        },
    },
    data() {
        return{
            message: 'バリデーション・チェック',
        }
    },
}
</script>
