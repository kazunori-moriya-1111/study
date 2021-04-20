<template>
    <div id="app">
        <HelloWorld v-bind:title="message" v-bind:num=123 />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    data(){
        return{
            message:'validate',
            num:'abc',
        }
    }
}
</script>
