/**
 * Created by Antonio on 18/03/2017.
 */

import {State, defaultState} from '../store/State';
import {Action} from '../actions/Action';
import {ActionType} from '../actions/ConversationsActions';
import {Conversation} from '../model/Conversation';

// REQUIRES
let UID = require('uuid-js');

export default function conversations (state: State = defaultState(), action: Action): State {
    let result: State = state;
    switch (action.type) {
        case ActionType.ADD_CONVERSATION: {
            let newConversation: Conversation = {id: UID.create().hex, title: action.payload.title, messages: []};
            let conversations = state.conversations.concat([newConversation]);
            result = {...state, conversations: conversations};
            }
            break;
        case ActionType.UPDATE_CONVERSATION: {
                let myConversation = state.conversations.find(x => x.id === action.payload.id);
                if (myConversation) {
                    let newConversation = Object.assign({}, myConversation, {
                        title: action.payload.title,
                        messages: action.payload.messages
                    });
                    let conversations = state.conversations
                        .filter(x => x.id !== action.payload.id)
                        .concat([newConversation]);
                    result = {...state, conversations: conversations };
                }
            }
            break;
        case ActionType.SELECT_CONVERSATION: {
                let myConversation = state.conversations.find(x => x.id === action.payload.id);
                if (myConversation) {
                    result = {...state, selectedConversation: myConversation.id };
                }
            }
            break;
        default:
            result = state;
            break;
    }

    return result;
}