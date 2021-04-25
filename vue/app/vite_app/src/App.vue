<template>
    <HelloWorld title="slot">
        <p>Begin!..</p>
        <template v-slot:first>
        ***First message***
        </template>
        <P>..Middle..</P>
        <template v-slot:second>
        ***Second message***
        </template>
        <P>..End</P>
        <template v-slot:third>
        ***Third message***
        </template>
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
