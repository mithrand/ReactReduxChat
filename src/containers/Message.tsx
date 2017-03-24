/**
 * Created by amunoz on 15/03/2017.
 */

import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import {store} from '../store/Store';
import {State} from '../store/State';
import {MessagesActions} from '../actions/MessagesActions';

import {AddForm} from '../presentation/AddForm';
import {ListItem, Item} from '../presentation/ListItem';

export class Message extends React.Component<{}, {}> {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    deleteMessage = (id: string): void => {
        const state = store.getState();
        store.dispatch(MessagesActions.DEL_MESSAGE(id, state.selectedConversation));
    };

    addMessage = (text: string) => {
        const state = store.getState();
        store.dispatch(MessagesActions.ADD_MESSAGE(text, state.selectedConversation));
    };

    render() {
        return(
            <div>
                <AddForm
                    caption="Message"
                    addButtonCaption="Add Message"
                    placeholder="Message"
                    onSubmit={this.addMessage}
                />
            </div>
        );
    }

}

const mapStateToListItem = (state: State) => {
    return {};
};

// we'll return an object with an onClick property configured to dispach our onClick function
const mapDispatchToListItem = (dispatch: Redux.Dispatch<State>) => {
    return {};
};

const mapDispatchAndStateToListItem = (state: State, dispatch: Redux.Dispatch<State>) => {
    const conversation = state.conversations.find(x => x.id === state.selectedConversation);
    let messages: Item[] = [];

    if (conversation) {
        messages = conversation.messages.map(m => ({id: m.id, text: m.text, timeSpam: m.timeSpam.format('HH:mm:ss')}));
    }

    return {
        items: messages,
        onClick: (id: string) => {
            dispatch(MessagesActions.DEL_MESSAGE(id, state.selectedConversation));
        },
    };

};

export const MessagesList = connect(mapStateToListItem,
                                    mapDispatchToListItem,
                                    mapDispatchAndStateToListItem) (ListItem);

