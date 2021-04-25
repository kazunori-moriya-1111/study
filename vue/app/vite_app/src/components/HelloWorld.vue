<template>
    <div class="alert alert-primary">
        <h1>{{ title }}</h1>
        <pre>{{ message }}</pre>
        <hr>
        <div class="area"
            v-on:click="click"
            v-on:click.exact="exact"
            v-on:click.shift="shift"
            v-on:click.ctrl="ctrl"
            v-on:click.alt="alt">
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
        click(){
            this.message = 'click '
        },
        exact(){
            this.message += "**no any key**"
        },
        shift(){
            this.message += "[shift]"
        },
        ctrl(){
            this.message += "[ctrl]"
        },
        alt(){
            this.message += "[alt]"
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