/**
 * Created by Antonio on 15/03/2017.
 */

import { combineReducers } from 'redux';
import MessageReducer from './MessageReducer';

export default combineReducers({
    messages: MessageReducer
})

