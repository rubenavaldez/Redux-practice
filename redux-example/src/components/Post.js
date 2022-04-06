import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'

class Post extends Component{
componentWillMount(){
    // fetch posts imported as a prop
    this.props.fetchPosts()
}

    render(){

        // const postItems = this.state.posts.map(post =>{
        //     console.log(post)
        //    return( <div key={post.id}>
        //         <h3>{post.title}</h3>
        //         <p>{post.body}</p>
        //     </div>
        //    )
        // })
        // console.log(postItems)
        return(

            <div>
                <h1>Posts</h1>
                {/* {postItems} */}
            </div>
        )
    }

}

//                          map state to properties
export default connect(null, {fetchPosts})(Post);
