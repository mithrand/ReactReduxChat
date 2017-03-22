/**
 * Created by amunoz on 15/03/2017.
 */

import * as React from 'react';

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
        const state: State = store.getState();
        const conversation = state.conversations.find(x => x.id === state.selectedConversation);

        let messages: Item[] = [];
        if (conversation) {
            messages = conversation.messages.map(m => {
                return { id: m.id, text: m.text, timeSpam: m.timeSpam.format('HH:mm:ss')};
            });
        }

        return(
            <div>
                <ListItem items={messages} onClick={this.deleteMessage}/>
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
