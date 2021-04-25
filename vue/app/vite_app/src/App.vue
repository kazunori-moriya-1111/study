<template>
    <HelloWorld title="slot">
        <P>*** this is default text ***</P>
    </HelloWorld>
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
