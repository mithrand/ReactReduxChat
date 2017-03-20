import * as React from 'react';

import {MessagesActions} from './actions/MessagesActions';
import {conversationsActions} from './actions/ConversationsActions';
import {MessageView} from './components/MessageView';
import {MessageInput, FormState} from './components/MessageInput';
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
        let action = MessagesActions.ADD_MESSAGE(form.text);
        store.dispatch(action);
    };

    delMessage = (id: string): void => {
        let action = MessagesActions.DEL_MESSAGE(id);
        store.dispatch(action);
    };

    selectConversation = (id: string): void => {
        let action = conversationsActions.SELECT_CONVERSATION(id);
        store.dispatch(action);
    };

    render() {
        const state: State = store.getState().conversationsReducer;
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
            </div>
        );
    }
}

export default App;