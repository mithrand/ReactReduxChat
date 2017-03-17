/**
 * Created by Antonio on 16/03/2017.
 */

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
const logger =  require('redux-logger');
import promise from 'redux-promise-middleware';

import reducer from '../reducers';

const middleware = applyMiddleware(promise(), thunk, logger());
export const store = createStore(reducer, middleware);
export default store