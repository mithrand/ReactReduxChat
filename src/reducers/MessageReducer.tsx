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

export default function MessageReducer (state: State = defaultState, action: Action): State {

    let message: Message;
    let messageArray: Message[];

    switch (action.type) {
        case ActionType.FETCH_MESSAGE: {
            return Object.assign({}, state, { fetching: true });
        }
        case ActionType.FETCH_MESSAGE_FULFILLED: {
            return Object.assign({}, state, { fetching: false , error: action.payload });
        }
        case ActionType.FETCH_MESSAGE_REJECTED: {
            return Object.assign({}, state, { fetching: false , fetched: true, messages: action.payload });
        }
        case ActionType.ADD_MESSAGE: {
            message = {
                id: UID.create() ,
                text: action.payload.text,
                user: 'pepe',
                timeSpam: moment()
            };
            messageArray = state.messages.concat([message])
            return Object.assign({}, state, { fetching: false , fetched: true, messages: messageArray });
        }
        case ActionType.DEL_MESSAGE: {
            return Object.assign({}, state, {messages: state.messages.filter(x => x.id !== action.payload.id)});
        }
        case ActionType.UPDATE_MESSAGE: {
            return Object.assign({}, state, {
                    messages: state.messages.map(x => {
                        if (x.id === action.payload.id) {
                            return Object.assign({}, x, {text: action.payload.text});
                        }else {
                            return x;
                        }
                    })
            });
        }
        default: {
            return state
        }

    }
}
