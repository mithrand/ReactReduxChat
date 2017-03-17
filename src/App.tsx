import * as React from 'react';

import {MessagesActions} from './actions/MessagesActions';
import {MessageView} from './components/MessageView';
import {MessageInput, FormState} from './components/MessageInput';
import {store} from './store/Store';

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

    onClick = (id: string): void => {
        let action = MessagesActions.DEL_MESSAGE(id);
        store.dispatch(action);
    };

    render() {
        const messages = store.getState().messageReducer.messages;
        return (
            <div>
                <div className="page-header">
                    <h1>MessageChat</h1>
                </div>
                <MessageView messages={messages} onClick={this.onClick} />
                <MessageInput name="text" onSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

export default App;