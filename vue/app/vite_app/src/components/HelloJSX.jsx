import {ref, reactive} from 'vue'

export default{
    name: 'HelloJSX',
    props:{
        name: String
    },
    setup(props){
        const data = reactive({
            title: 'HelloJSX',
            msg: 'This is JSX component sample.',
        })
        return() => <div class="alert alert-primary">
            <h1>{data.title} [{props.name}]</h1>
            <p>{data.msg}</p>
            </div>
    }
}