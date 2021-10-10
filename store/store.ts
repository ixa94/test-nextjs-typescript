import thunk from 'redux-thunk';
import { GlobalState, reducer} from './reducer/combinedReducer';
import { createStore, Store,applyMiddleware } from 'redux';
import { createWrapper, Context} from 'next-redux-wrapper';

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(reducer,applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<GlobalState>>(makeStore, { debug: true });

