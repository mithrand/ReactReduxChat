/**
 * Created by amunoz on 15/03/2017.
 */
import {Action} from './Action';

// tslint:disable-next-line
export class MessagesActions {

    public static ADD_MESSAGE = (text: string, idConversation: string): Action => {
        return {type: ActionType.ADD_MESSAGE, payload: {text: text, idConversation: idConversation}} ;
    };

    public static DEL_MESSAGE = (id: string): Action => {
        return {type: ActionType.DEL_MESSAGE, payload: {id: id}} ;
    };

    public static UPDATE_MESSAGE = (id: string, text: string): Action => {
        return {type: ActionType.UPDATE_MESSAGE, payload: {id: id , text: text}} ;
    };

}

// tslint:disable-next-line
export class ActionType {
    public static ADD_MESSAGE = 'ADD_MESSAGE';
    public static DEL_MESSAGE = 'DEL_MESSAGE';
    public static UPDATE_MESSAGE = 'UPDATE_MESSAGE';
}

export default MessagesActions;
