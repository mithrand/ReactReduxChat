/**
 * Created by amunoz on 15/03/2017.
 */

import {Conversation} from '../model/Conversation';

export interface State {
    conversations: Conversation[];
    fetching: boolean,
    fetched: boolean,
    error: Error | null,
}

export function defaultState() {
    return {
        conversations: [],
        fetching: false,
        fetched: false,
        error: null,
    };
}

export default State;