import React, {useState} from 'react'

const Basic1 = (props) =>{

    const [product, setProducts] = useState({name: '', price:''})

    return(
        <div>
            <form >
                <input type="text" value={product.name}
                onChange={env => setProducts({...product, name:env.target.value})}/>
                <input type="text" value={product.price}
                onChange={env => setProducts({...product, price:env.target.value})}/>
            </form>
            <h3>product name is {product.name}</h3>
            <h3>product price is {product.price}</h3>
        </div>
    )
}

export default Basic1