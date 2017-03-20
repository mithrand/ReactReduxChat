/**
 * Created by amunoz on 15/03/2017.
 */

import {State, defaultState} from '../store/State';
import {Action} from '../actions/Action';
import {ActionType} from '../actions/MessagesActions';
import * as moment from 'moment';
import {Message} from '../model/Message';
import {Conversation} from '../model/Conversation';

// REQUIRES
let UID = require('uuid-js');

/**
 * Reducer form messages
 * @param state - actual State
 * @param action - Action to perform
 * @returns new State copy with changes applied
 */
export default function messages (state: State = defaultState(), action: Action): State {

    let message: Message;
    let NewConversation: Conversation | undefined;
    let messages: Message[] = [];
    let newState: State;
    let conversations: Conversation[];
    let result = state;

    switch (action.type) {
        case ActionType.ADD_MESSAGE:

            message = {
                id: UID.create().hex ,
                text: action.payload.text,
                user: 'pepe',
                timeSpam: moment()
            };

            NewConversation = state.conversations.find(x => x.id === state.selectedConversation);

            if (NewConversation) {
                messages = NewConversation.messages.concat(message);
                NewConversation = Object.assign({}, NewConversation, {messages: messages});
                conversations = state.conversations
                    .filter(x => x.id !== state.selectedConversation)
                    .concat([NewConversation]);
                newState = {...state , conversations: conversations};
            }else {
                result = state;
            }

            break;
        case ActionType.DEL_MESSAGE:
            // result = Object.assign({}, state, {messages: state.messages.filter(x => x.id !== action.payload.id)});
            result = state;
            break;
        case ActionType.UPDATE_MESSAGE:
            // result = Object.assign({}, state, {
            //         messages: state.messages.map(x => {
            //             if (x.id === action.payload.id) {
            //                 return Object.assign({}, x, {text: action.payload.text});
            //             }else {
            //                 return x;
            //             }
            //         })
            // });
            result = state;
            break;
        default: {
            result = state;
            break;
        }

    }

    return result;
}
