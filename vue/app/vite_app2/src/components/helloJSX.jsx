export default {
    name :'HelloJSX',
    props: {
        title: String,
        msg: String,
    },
    data() {
        return {
            cls_title: 'text-danger h1',
            cls_msg: 'text-primary  h5'
        }
    },
    render(h) {
        return (
            <div class="alert alert-primary">
                <h2 class={this.cls_title}>{ this.title }</h2>
                <p class={this.cls_msg}>{ this.msg }</p>
            </div>
        )
    }
}