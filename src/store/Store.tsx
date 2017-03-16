/**
 * Created by Antonio on 16/03/2017.
 */
// import { applyMiddleware, createStore, Store } from 'redux';
// import thunk from 'redux-thunk';
// const logger =  require('redux-logger');
// const promises =  require('redux-promise-middleware');
// import reducer from '../reducers'
//
// export const middleware = applyMiddleware(promises, thunk, logger());
// export const store: Store<any> = createStore(reducer, middleware);
//
// export default store;

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';
const logger =  require('redux-logger');
import {promiseMiddleware} from 'redux-promise-middleware/dist';

import reducer from '../reducers';

const middleware = applyMiddleware(promiseMiddleware(), thunk, logger());
export const store = createStore(reducer, middleware);
export default store