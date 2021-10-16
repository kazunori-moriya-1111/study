export default {
    name :'HelloJSX',
    data() {
        return {
            title: 'HelloJSX',
            message: 'this is sample message',
        }
    },
    render(h) {
        return (
            <div class="alert alert-primary">
                <h2>{ this.title }</h2>
                <p>{ this.message }</p>
            </div>
        )
    }
}