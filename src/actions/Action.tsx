/**
 * Created by Antonio on 15/03/2017.
 */
import * as Redux from 'redux';

export interface Action extends Redux.Action {
    payload: any;
}

export default Action;