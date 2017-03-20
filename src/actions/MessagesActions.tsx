/**
 * Created by amunoz on 15/03/2017.
 */
import {Action} from './Action';

export class MessagesActions {

    public static ADD_MESSAGE = (text: string): Action => {
        return {type: ActionType.ADD_MESSAGE, payload: {text: text}} ;
    };

    public static DEL_MESSAGE = (id: string): Action => {
        return {type: ActionType.DEL_MESSAGE, payload: {id: id}} ;
    };

    public static UPDATE_MESSAGE = (id: string, text: string): Action => {
        return {type: ActionType.UPDATE_MESSAGE, payload: {id: id , text: text}} ;
    };

}

export class ActionType {
    public static ADD_MESSAGE = 'ADD_MESSAGE';
    public static DEL_MESSAGE = 'DEL_MESSAGE';
    public static UPDATE_MESSAGE = 'UPDATE_MESSAGE';
}

export default MessagesActions;
