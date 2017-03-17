/**
 * Created by Antonio on 15/03/2017.
 */

import { combineReducers } from 'redux';
import messages from './Messages';

export default combineReducers({
    messageReducer: messages
})