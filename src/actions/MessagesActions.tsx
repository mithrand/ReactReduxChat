/**
 * Created by amunoz on 15/03/2017.
 */
import {Dispatch} from 'redux';
import axios, {AxiosResponse} from 'axios';
import {Action} from './Action';

// tslint:disable-next-line
export class MessagesActions {

    public static ADD_MESSAGE = (text: string): Action => {
        return {type: ActionType.ADD_MESSAGE, payload: {text: text}} ;
    };

    public static DEL_MESSAGE = (id: string): Action => {
        return {type: ActionType.DEL_MESSAGE, payload: {id: id}} ;
    };

    public static UPDATE_MESSAGE = (id: string, text: string): Action => {
        return {type: ActionType.DEL_MESSAGE, payload: {id: id , text: text}} ;
    };

    public static FETCH_MESSAGES = () => {
        return (dispatch: Dispatch<Action>) => {
            axios.get('http://rest.learncode.academy/api/test123/tweets')
            .then((response: AxiosResponse ) => {
                dispatch({type: ActionType.FETCH_MESSAGE_FULFILLED, payload: response.data});
            })
            .catch((err: Error) => {
                dispatch({type: ActionType.FETCH_MESSAGE_REJECTED, payload: err});
            });
        }
    };

}

// tslint:disable-next-line
export class ActionType {
    public static ADD_MESSAGE = 'ADD_MESSAGE';
    public static DEL_MESSAGE = 'DEL_MESSAGE';
    public static UPDATE_MESSAGE = 'UPDATE_MESSAGE';
    public static FETCH_MESSAGE = 'FETCH_MESSAGE_REJECTED';
    public static FETCH_MESSAGE_FULFILLED = 'FETCH_MESSAGE_FULFILLED';
    public static FETCH_MESSAGE_REJECTED = 'FETCH_MESSAGE_REJECTED';
}

export default MessagesActions;
