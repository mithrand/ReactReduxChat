/**
 * Created by amunoz on 20/03/2017.
 */

import * as React from 'react';
import {store} from '../store/Store';
import {State} from '../store/State';
import {conversationsActions} from '../actions/ConversationsActions';

import {AddForm} from '../presentation/AddForm';
import {Tabs, Tab} from '../presentation/Tabs'

export class Conversations extends React.Component<{} , {}> {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    selectConversation = (id: string): void => {
        store.dispatch(conversationsActions.SELECT_CONVERSATION(id));
    };

    addConversation = (title: string) => {
        store.dispatch(conversationsActions.ADD_CONVERSATION(title));
    };

    render() {
        const state: State = store.getState();
        const tabs: Tab[] = state.conversations.map((c): Tab => {
            return {  title: c.title, id: c.id, active: c.id === state.selectedConversation };
        });

        return (
            <div>
                <AddForm
                    caption= "Conversation Title"
                    addButtonCaption= "Add new conversation"
                    placeholder= "Conversation title"
                    onSubmit={this.addConversation}
                />
                <Tabs
                    tabs={tabs}
                    onClick={this.selectConversation}
                />
            </div>
        );
    }
}

export default Conversations;