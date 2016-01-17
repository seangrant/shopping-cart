import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from 'store/user/user';
import counter from 'store/counter/counter';

const reducers = {
  user,
  counter
};

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
export default () => createStoreWithMiddleware(reducer);
