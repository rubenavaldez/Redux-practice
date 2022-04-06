import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts= ()=>dispatch=>{
    // resolver and a promise 
        console.log('fetching')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
        //  console.log(response.data)
        //     this.setState({posts:response.data})
        dispatch({
            type:FETCH_POSTS,
            payload:response
        })
        })
        .catch(err=>console.log("error ", err))
        
    
}