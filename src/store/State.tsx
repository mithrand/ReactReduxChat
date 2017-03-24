/**
 * Created by amunoz on 15/03/2017.
 */

import {Conversation} from '../model/Conversation';

export interface State {
    conversations: Conversation[];
    selectedConversation: string;
}

export function defaultState() {
    return {
        conversations: [],
        selectedConversation: ''
    };
}

export default State;