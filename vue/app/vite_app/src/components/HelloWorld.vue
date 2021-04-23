<template>
    <div class="alert alert-primary">
        <h1>{{ title }}</h1>
        <pre v-on:click="clear">{{ message }}</pre>
        <hr>
        <div id="out" class="out" v-on:click="a_event">A
            <div id="mid" class="mid" v-on:click.self="b_event">B
                <div id="in" class="in" v-on:click="c_event">C
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data: function() {
        return{
            title: 'Event',
            message: 'イベントの伝播について。\n',
        }
    },
    methods:{
        a_event(event){
            this.message += "A-Event [" + event.target.id + '→' + event.currentTarget .id + "]\n"
        },
        b_event(event){
            this.message += "B-Event [" + event.target.id + '→' + event.currentTarget .id + "]\n"
        },
        c_event(event){
            this.message += "C-Event [" + event.target.id + '→' + event.currentTarget .id + "]\n"
        },
        clear(){
            this.message = "イベントの伝播について。\n"
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
</style>