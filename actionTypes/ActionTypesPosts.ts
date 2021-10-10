import { AnyAction } from "redux";
import { Comment, Post } from "../store/postTypes";

  export interface PostState{
    posts:Post[],
    comments:Comment[]
  }
export enum PostActionTypes{
  GetPosts='GetPosts',
  CreatePost='CreatePost',
  CreateComment='CreateComment'
}

 interface PostsAction{
  type:PostActionTypes.GetPosts;
  payload:Post[]
}
 interface PostsCreateAction{
  type:PostActionTypes.CreatePost;
  payload:Post;
}
 interface ComentsCreateAction{
  type:PostActionTypes.CreateComment;
  payload:Comment;
}


export type PostAction = PostsAction| PostsCreateAction | ComentsCreateAction | AnyAction
