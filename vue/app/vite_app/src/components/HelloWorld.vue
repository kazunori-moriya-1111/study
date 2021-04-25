<template>
    <div class="alert alert-primary">
        <h1>{{ title }}</h1>
        <pre>{{ message }}</pre>
        <hr>
        <div class="area"
            v-on:click.left.prevent="left"
            v-on:click.middle.prevent="middle"
            v-on:click.right.prevent="right">
            click here!
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data: function() {
        return{
            title: 'Event',
            message: '',
        }
    },
    methods:{
        left(){
            this.message = '[left button]'
        },
        right(){
            this.message += '[right button]'
        },
        middle(){
            this.message += '[middle button]'
        }
    },
}
</script>

<style>
pre {
  font-size:16pt;
  line-height: 1.25;
}
div.out {
  padding: 0px;
  background-color: #eee;
  width:300px;
  height:200px;
}
div.mid {
  padding: 0px;
  background-color: #ddd;
  width:200px;
  height:170px;
}
div.in {
  padding: 0px;
  background-color: #ccc;
  width:100px;
  height:140px;
}
.area {
  width:300px;
  height:100px;
  background-color: #fff;
  padding:10px;
  font-size:20pt;
}
</style>