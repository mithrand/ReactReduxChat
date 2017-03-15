/**
 * Created by Antonio on 16/03/2017.
 */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
const logger =  require('redux-thunk');
const promise =  require('redux-promise-middleware');
import reducer from '../reducers'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware)