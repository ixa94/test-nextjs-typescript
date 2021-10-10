import {
  PostAction,
  PostActionTypes,
  PostState,
} from '../../actionTypes/ActionTypesPosts';
import { Comment, Post } from '../postTypes';

export const initialState: PostState = {
  posts: [],
  comments: [],
};

export const postReducer = (
  state = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case PostActionTypes.GetPosts:
      return { ...state, posts: action.payload };
    case PostActionTypes.CreatePost:
      return { ...state, posts: [...state.posts, action.payload] };
    case PostActionTypes.CreateComment:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
