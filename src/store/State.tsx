/**
 * Created by amunoz on 15/03/2017.
 */
import {Message} from '../model/Message';

export interface State {
    messages: Message[],
    fetching: boolean,
    fetched: boolean,
    error: Error | null,
}

export default State;