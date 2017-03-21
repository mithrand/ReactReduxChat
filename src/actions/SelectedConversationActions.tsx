/**
 * Created by amunoz on 15/03/2017.
 */

import {Action} from './Action';

// tslint:disable-next-line
export class selectConversationActions {

    public static SELECT_CONVERSATION = (id: string): Action => {
        return {type: ActionType.SELECT_CONVERSATION, payload: {id: id}} ;
    };
}

// tslint:disable-next-line
export class ActionType {
    public static SELECT_CONVERSATION = 'SELECT_CONVERSATION';
}

export default selectConversationActions;
