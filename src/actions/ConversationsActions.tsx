/**
 * Created by Antonio on 18/03/2017.
 */
/**
 * Created by amunoz on 15/03/2017.
 */
import {Dispatch} from 'redux';
import axios, {AxiosResponse} from 'axios';
import {Action} from './Action';

// tslint:disable-next-line
export class MessagesActions {

  public static ADD_CONVERSATION = (title: string): Action => {
    return {type: ActionType.ADD_CONVERSATION, payload: {title: title}} ;
  };

  public static DEL_CONVERSATION = (id: string): Action => {
    return {type: ActionType.DEL_CONVERSATION, payload: {id: id}} ;
  };

  public static UPDATE_CONVERSATION = (id: string, title: string): Action => {
    return {type: ActionType.UPDATE_CONVERSATION, payload: {id: id , title: title}} ;
  };

  public static FETCH_CONVERSATION = () => {
    return (dispatch: Dispatch<Action>) => {
      axios.get('http://rest.learncode.academy/api/test123/tweets')
        .then((response: AxiosResponse ) => {
          dispatch({type: ActionType.FETCH_CONVERSATION_FULFILLED, payload: response.data});
        })
        .catch((err: Error) => {
          dispatch({type: ActionType.FETCH_CONVERSATION_REJECTED, payload: err});
        });
    }
  };

}

// tslint:disable-next-line
export class ActionType {
  public static ADD_CONVERSATION = 'ADD_CONVERSATION';
  public static DEL_CONVERSATION = 'DEL_CONVERSATION';
  public static UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';
  public static FETCH_CONVERSATION = 'FETCH_CONVERSATION';
  public static FETCH_CONVERSATION_FULFILLED = 'FETCH_CONVERSATION_FULFILLED';
  public static FETCH_CONVERSATION_REJECTED = 'FETCH_CONVERSATION_REJECTED';
}

export default MessagesActions;
