<template>
    <div class="alert alert-primary">
        <h1>{{data.title}}</h1>
        <p class="mt-3 h5">{{$store.state.message}}</p>
        <hr>
        <div class="alert alert-dark"
            @click.exact="$store.commit('count' ,1)"
            @click.shift="$store.commit('count' ,2)"
            @click.ctrl="$store.commit('count' ,3)">
            <a class="h5"
                @click.stop="$store.commit('reset')">
                clicked: {{ $store.state.counter }}
            </a>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    setup(props){
        const data = reactive({
            title: 'Vuex',
        })
        return{
            data
        }
    }
}
</script>
