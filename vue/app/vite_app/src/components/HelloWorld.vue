<template>
    <div class="alert alert-primary">
        <h1>{{title}}</h1>
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title:String,
        msg:String
    },
    setup(props){
        console.log(props)
    }
}
</script>
