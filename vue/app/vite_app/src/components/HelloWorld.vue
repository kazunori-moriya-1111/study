<template>
    <div class="alert alert-primary">
        <h1>{{ title }}</h1>
        <pre v-on:click="clear">{{ message }}</pre>
        <hr>
        <div><input type="text" class="form-control"
            v-on:keypress="type"
            v-on:keydown.delete="clear"
            v-on:keydown.space="space"
            v-on:keydown.enter="enter"></div>
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
        type(event){
            if (event.key == "Enter"){ return }
            this.message += event.key + ' '
            event.target.value = ''
        },
        clear(){
            this.message = ""
        },
        space(){
            this.message += "_ "
        },
        enter(event){
            var res = this.message.split(' ').join('')
            this.message = res.split('_').join(' ')
            event.target.value = ''
        }
    },
}
</script>
