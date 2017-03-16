/**
 * Created by Antonio on 16/03/2017.
 */
/**
 * Created by Antonio on 16/03/2017.
 */
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import * as promiseMiddleware from 'redux-promise-middleware';
import reducer from '../reducers';

export const middleware = applyMiddleware(promiseMiddleware(), thunk);
export const store = createStore(reducer, middleware);

export default store;