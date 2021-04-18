export default{
    name: 'HelloJSX',
    props:{
        title:String,
        msg:String
    },
    render(h){
        return(
            <div class="alert alert-primary">
                <h2>{this.title}</h2>
                <p>{this.msg}</p>
            </div>
        )
    }
}