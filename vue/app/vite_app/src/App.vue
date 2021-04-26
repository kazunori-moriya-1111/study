<template>
    <HelloWorld />
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
            slotobjs:[
                {name:'Taro', mail:'taro@yamada'},
                {name:'Hanako', mail:'hanako@flower'},
                {name:'Sachiko', mail:'sachiko@happy'},
            ],
        }
    }
}
</script>
