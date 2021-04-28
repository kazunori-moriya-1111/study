import {ref, reactive} from 'vue'

export default{
    name: 'HelloJSX',
    setup(props){
        const data = reactive({
            title: 'HelloJSX',
            msg: 'This is JSX component sample.',
        })
        return() => <div class="alert alert-primary">
            <h1>{data.title}</h1>
            <p>{data.msg}</p>
            </div>
    }
}