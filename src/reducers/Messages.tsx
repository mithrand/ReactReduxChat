/**
 * Created by amunoz on 15/03/2017.
 */

import {State} from '../store/State';
import {Action} from '../actions/Action';
import {ActionType} from '../actions/MessagesActions';
import * as moment from 'moment';
import {Message} from '../model/Message';

// REQUIRES
let UID = require('uuid-js');

const defaultState: State = {
    messages: [],
    fetching: false,
    fetched: false,
    error: null,
};

/**
 * Reducer form messages
 * @param state - actual State
 * @param action - Action to perform
 * @returns new State copy with changes applied
 */
export default function messages (state: State = defaultState, action: Action): State {

    let message: Message;
    let messageArray: Message[];
    let result: State;

    switch (action.type) {
        case ActionType.FETCH_MESSAGE:
            result = Object.assign({}, state, { fetching: true });
            break;
        case ActionType.FETCH_MESSAGE_FULFILLED:
            result = Object.assign({}, state, { fetching: false , error: action.payload });
            break;
        case ActionType.FETCH_MESSAGE_REJECTED:
            result = Object.assign({}, state, { fetching: false , fetched: true, messages: action.payload });
            break;
        case ActionType.ADD_MESSAGE:
            message = {
                id: UID.create().hex ,
                text: action.payload.text,
                user: 'pepe',
                timeSpam: moment()
            };
            messageArray = state.messages.concat([message]);
            result = Object.assign({}, state, { fetching: false , fetched: true, messages: messageArray });
            break;
        case ActionType.DEL_MESSAGE:
            result = Object.assign({}, state, {messages: state.messages.filter(x => x.id !== action.payload.id)});
            break;
        case ActionType.UPDATE_MESSAGE:
            result = Object.assign({}, state, {
                    messages: state.messages.map(x => {
                        if (x.id === action.payload.id) {
                            return Object.assign({}, x, {text: action.payload.text});
                        }else {
                            return x;
                        }
                    })
            });
            break;
        default: {
            result = state;
            break;
        }

    }

    return result;
}
