/**
 * Created by amunoz on 15/03/2017.
 */

import {Conversation} from '../model/Conversation';

export interface State {
    conversations: Conversation[];
    fetching: boolean,
    fetched: boolean,
    error: Error | null,
    selectedConversation: string;
}

export function defaultState() {
    return {
        conversations: [],
        fetching: false,
        fetched: false,
        error: null,
        selectedConversation: ''
    };
}

export default State;