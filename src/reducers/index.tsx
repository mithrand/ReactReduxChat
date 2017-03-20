/**
 * Created by Antonio on 15/03/2017.
 */

import { combineReducers } from 'redux';
import messages from './Messages';
import conversations from './Conversations';

export default combineReducers({
    messageReducer: messages,
    conversationsReducer: conversations
});