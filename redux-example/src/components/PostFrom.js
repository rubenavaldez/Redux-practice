import React, {Component} from 'react'
import axios from 'axios';

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
onChange(e){
    // works with body and title of form
    this.setState({[e.target.name]:e.target.value})
}
onSubmit(e){
    e.preventDefault()
    const post ={
        title:this.state.title,
        body:this.state.body
    }
    console.log(post)
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        headers:{
            'content-type':"application/json"
        },
        body:post

    })
    .then(response =>{
        console.log(response.data)
        // this.setState({posts:response.data})
    })
    .catch(err=>console.log("error ", err))
}
    render(){
        return(
            <div>
                <h1>
                    Add Post
                </h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
                    </div>
                    <br/>
                    <div>
                        <label>Body:</label>
                        <br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}


export default PostForm;
