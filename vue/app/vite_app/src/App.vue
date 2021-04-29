<template>
    <div>
        <router-link to="/" class="btn btn-primary mx-2">
            Go to Top
        </router-link>
        <router-link to="/jsx" class="btn btn-warning">
            Go to JSX
        </router-link>
    </div>
    <hr>
    <h5>default view</h5>
    <router-view/>
    <hr>
    <h5>A & B</h5>
    <router-view name="first"></router-view>
    <router-view name="second"></router-view>
</template>

<script>
export default {
    name: 'App',
    created() {
        console.log("** App Created! **")
    },
    mounted() {
        console.log("-- App Mounted!--")
    },
    data() {
        return {
            title:'Router'
        }
    }
}
</script>
