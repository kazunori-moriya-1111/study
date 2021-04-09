<template>
    <div class="alert alert-info">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return{
            title: 'HelloWorld',
            message: 'This is sample message.',
        }
    }
}
</script>
