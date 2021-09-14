import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () =>{

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // axiosを使用した場合
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res => {
        //     setPosts(res.data)
        // })

        // fetchの場合(HTMLの形で返ってくる)
        fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [])
    return(
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default ApiFetch