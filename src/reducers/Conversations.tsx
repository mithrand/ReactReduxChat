/**
 * Created by Antonio on 18/03/2017.
 */

import {Action} from '../actions/Action';
import {ActionType} from '../actions/ConversationsActions';
import {Conversation} from '../model/Conversation';
import MessagesReducer from './Messages';

// REQUIRES
let UID = require('uuid-js');

export default function conversations (state: Conversation[] = [], action: Action): Conversation[] {

    switch (action.type) {
        case ActionType.ADD_CONVERSATION: {
            let newConversation: Conversation = {id: UID.create().hex, title: action.payload.title, messages: []};
            return  state.concat([newConversation]);
        }
        case ActionType.UPDATE_CONVERSATION: {
            let myConversation = state.find(x => x.id === action.payload.id);
            if (myConversation) {
                let newConversation = Object.assign({}, myConversation, {
                    title: action.payload.title,
                    messages: myConversation.messages.concat([])
                });
                return state.map(x => { return x.id === newConversation.id ? newConversation : x} );
            } else {
                return state;
            }
        }
        case ActionType.ADD_MESSAGE:
        case ActionType.DEL_MESSAGE: {
            let conversation = state.find(x => x.id === action.payload.idConversation);
            if (conversation) {
                let messages = MessagesReducer(conversation.messages, action);
                let newConversation = {...conversation, messages: messages };
                return state.map(x => { return x.id === newConversation.id ? newConversation : x; });
            } else {
                return state;
            }
        }
        default:
            return state;
    }
}