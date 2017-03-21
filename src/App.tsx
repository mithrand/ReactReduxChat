import * as React from 'react';

import {conversationsActions} from './actions/ConversationsActions';
import {selectConversationActions} from './actions/SelectedConversationActions';
import {MessageView} from './components/MessageView';
import {MessageInput, FormState} from './components/MessageInput';
import {ConversationInput, ConversationInputState} from './components/ConversationInput';
import {ConversationsTabs} from './components/ConversationsTabs';
import {Message} from './model/Message';

import {store} from './store/Store';
import {State} from './store/State';

class App extends React.Component<{}, {} > {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    constructor() {
        super();
    }

    onFormSubmit = (form: FormState) => {
        const state = store.getState();
        let action = conversationsActions.ADD_MESSAGE(form.text, state.selectedConversation);
        store.dispatch(action);
    };

    delMessage = (id: string): void => {
        const state = store.getState();
        let action = conversationsActions.DEL_MESSAGE(id, state.selectedConversation);
        store.dispatch(action);
    };

    createConversation = (form: ConversationInputState) => {
        let action = conversationsActions.ADD_CONVERSATION(form.title);
        store.dispatch(action);
    };

    selectConversation = (id: string): void => {
        let action = selectConversationActions.SELECT_CONVERSATION(id);
        store.dispatch(action);
    };

    render() {
        const state: State = store.getState();
        let messages: Message[] = [];
        const conversation = state.conversations
            .find(x => x.id === state.selectedConversation);
        if ( conversation) {
            messages = conversation.messages;
        }

        return (
            <div>
                <ConversationsTabs
                    conversations={state.conversations}
                    selectedConversation={state.selectedConversation}
                    onClick={this.selectConversation}
                />
                <div className="page-header">
                    <h1>MessageChat</h1>
                </div>
                <MessageView messages={messages} onClick={this.delMessage} />
                <MessageInput name="text" onSubmit={this.onFormSubmit} />
                <ConversationInput onSubmit={this.createConversation} />
            </div>
        );
    }
}

export default App;