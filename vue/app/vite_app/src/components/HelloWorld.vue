<script>
import { h } from 'vue'

export default {
    name: 'HelloWorld',
    data() {
        return{
            title: 'HelloWorld',
            message: 'This is sample message.',
        }
    },
    render() {
        return h('dev',{
            class :'alert alert-warning'
        },
        [
            h('h2', this.title),
            h('p', this.message)
        ])
    }
}
</script>
