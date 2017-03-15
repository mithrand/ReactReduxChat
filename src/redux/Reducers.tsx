/**
 * Created by amunoz on 15/03/2017.
 */
import {State} from './State';
import {Action, ACTION_TYPE} from './Actions';

export class Reducers {

    static reducer (state: State, action: Action): State {
        let result = state;

        switch (action.type) {
            case ACTION_TYPE.ADD_MESSAGE:
                break;
            case ACTION_TYPE.DEL_MESSAGE:
                break;
            default:
                result =  state;
                break;
        }

        return result;
    }
}

export default Reducers;
