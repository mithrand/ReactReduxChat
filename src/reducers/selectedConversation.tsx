/**
 * Created by amunoz on 21/03/2017.
 */
import {Action} from '../actions/Action';
import {ActionType} from '../actions/SelectedConversationActions';

export default function selectedConversation(state: string = '', action: Action) {
    switch (action.type) {
        case ActionType.SELECT_CONVERSATION:
            return {id: action.payload.id};
        default:
            return  state;
    }
}