import { createStore,combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'

import tokenMiddleware from '../Middlewares/TokenMiddleware';
import promiseMiddleware from '../Middlewares/PromiseMiddleware';
import reducers from '../Reducer'

let store = createStore(reducers, applyMiddleware(logger, promiseMiddleware, tokenMiddleware));

export default store;
