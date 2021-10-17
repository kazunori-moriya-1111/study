export default {
    name :'HelloJSX',
    props: {
        title: String,
        msg: String,
    },
    setup(props) {
        return () => <div class="alert alert-primary">
            <h1>{props.title}</h1>
            <p>{props.msg}</p>
        </div>
    }
}