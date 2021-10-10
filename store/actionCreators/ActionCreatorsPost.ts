import axios, { AxiosRequestConfig } from "axios"
import { Dispatch } from "redux"
import { PostAction,PostActionTypes } from "../../actionTypes/ActionTypesPosts"



export const fetchPost = () =>{
  return async (dispatch:Dispatch<PostAction>)=>{
    try {
      const res = await axios.get('https://simple-blog-api.crew.red/posts')
      dispatch({type:PostActionTypes.GetPosts,payload:res.data})
    } catch (error) {
      console.log(error)
    }
  }
}


export const createPost = (title:string,body:string) =>{
  return async (dispatch:Dispatch<PostAction>)=>{
    const data = JSON.stringify({
      title:title,
      body:body
    })
    const config:AxiosRequestConfig={
      method: 'post',
      url: 'https://simple-blog-api.crew.red/posts',
      headers: { 
    'Content-Type': 'application/json'
      },
      data : data
    }
    try {
      const res = await axios(config)
      dispatch({type:PostActionTypes.CreatePost,payload:res.data})
    } catch (error) {
      console.log(error)
    }
  }
}
