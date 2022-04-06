import React, {Component} from 'react'
import axios from 'axios'
class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    componentWillMount(){
        // place holder API
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            // console.log(response.data)
            this.setState({posts:response.data})
        })
        .catch(err=>console.log("error ", err))
        console.log('hello')

    }
    render(){
        const postItems = this.state.posts.map(post =>{
           return( <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
           )
        })
        console.log(postItems)
        return(

            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }

}


export default Post;
