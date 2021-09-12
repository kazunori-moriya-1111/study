import React, {useState} from 'react'

const Basic2 = (props) =>{

    const [products, setProducts] = useState([])
    const newProducts = () => {
        setProducts([...products, {
            id: products.length,
            name: "Hello React"
        }])
    }

    return(
        <div>
            <button onClick = {newProducts}>addNewProduct</button>
            <ui>
                {products.map(products => (
                    <li key={products.id}>{products.name} ID :{products.id}</li>
                ))}
            </ui>
        </div>
    )
}

export default Basic2