/**
 * Created by amunoz on 15/03/2017.
 */

// tslint:disable-next-line
export class ACTIONS {

    public static ADD_MESSAGE = (text: string): Action => {
        return {type: ACTION_TYPE.ADD_MESSAGE, payload: {text: text}} ;
    };

    public static DEL_MESSAGE = (id: string): Action => {
        return {type: ACTION_TYPE.DEL_MESSAGE, payload: {id: id}} ;
    };

}

// tslint:disable-next-line
export class ACTION_TYPE {
    public static ADD_MESSAGE = 'ADD_MESSAGE';
    public static DEL_MESSAGE = 'DEL_MESSAGE';
}

export interface Action {
    type: string;
    payload: any;
}
