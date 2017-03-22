/**
 * Created by Antonio on 15/03/2017.
 */

import { combineReducers } from 'redux';
import conversations from './Conversations';
import selectedConversation from './SelectedConversation';

export default combineReducers({
    conversations,
    selectedConversation
});