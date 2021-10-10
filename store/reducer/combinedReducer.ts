import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers, Store } from 'redux';
import { PostAction, PostState } from '../../actionTypes/ActionTypesPosts';
import { initialState, postReducer } from './postReducer';

export interface GlobalState{
postState:PostState,
count:string
}

const initialGlobalState={
  postState:initialState,
  count:"init"
}

const rootReducer = combineReducers({
  postState: postReducer,
});

export const reducer = (state:GlobalState=initialGlobalState, action:AnyAction) => {
  if(state=== undefined) return
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, 
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};


