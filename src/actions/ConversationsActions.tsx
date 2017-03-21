/**
 * Created by Antonio on 18/03/2017.
 */
/**
 * Created by amunoz on 15/03/2017.
 */
import {Action} from './Action';
import {ActionType as MessagesActionTypes, MessagesActions} from './MessagesActions';

// tslint:disable-next-line
export class conversationsActions extends MessagesActions {

  public static ADD_CONVERSATION = (title: string): Action => {
    return {type: ActionType.ADD_CONVERSATION, payload: {title: title}} ;
  };

  public static DEL_CONVERSATION = (id: string): Action => {
    return {type: ActionType.DEL_CONVERSATION, payload: {id: id}} ;
  };

  public static UPDATE_CONVERSATION = (id: string, title: string): Action => {
    return {type: ActionType.UPDATE_CONVERSATION, payload: {id: id , title: title}} ;
  };
}

// tslint:disable-next-line
export class ActionType extends MessagesActionTypes {
  public static ADD_CONVERSATION = 'ADD_CONVERSATION';
  public static DEL_CONVERSATION = 'DEL_CONVERSATION';
  public static UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';
}

export default conversationsActions;
