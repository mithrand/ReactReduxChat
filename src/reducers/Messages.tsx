/**
 * Created by amunoz on 15/03/2017.
 */

import {Action} from '../actions/Action';
import {ActionType} from '../actions/MessagesActions';
import * as moment from 'moment';
import {Message} from '../model/Message';

// REQUIRES
let UID = require('uuid-js');

/**
 * Reducer form messages
 * @param state - actual State
 * @param action - Action to perform
 * @returns new State copy with changes applied
 */
export default function messages (state: Message[] = [], action: Action): Message[] {

    let message: Message | undefined;

    switch (action.type) {
        case ActionType.ADD_MESSAGE:

            message = {
                id: UID.create().hex ,
                text: action.payload.text,
                user: 'pepe',
                timeSpam: moment()
            };
            return state.concat([message]);

        case ActionType.DEL_MESSAGE:
            return state.filter(x => x.id !== action.payload.id);
        case ActionType.UPDATE_MESSAGE:
            message = state.find(x => x.id === action.payload.id);
            if (message) {
              let newMessage = {...message, text: action.payload.text};
              return state.filter(x => x.id !== newMessage.id).concat([newMessage]);
            } else {
                return state;
            }
        default:
            return state;
    }

}
