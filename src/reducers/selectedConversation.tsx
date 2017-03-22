/**
 * Created by Antonio on 18/03/2017.
 */

import {Action} from '../actions/Action';
import {ActionType} from '../actions/ConversationsActions';

export default function selectedConversation (state: string = '', action: Action): string {
    switch (action.type) {
        case ActionType.SELECT_CONVERSATION:
            return action.payload.id;
        default:
            return state;
    }
}
