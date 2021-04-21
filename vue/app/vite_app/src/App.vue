<template>
    <HelloWorld title="computed" />
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
