import * as React from 'react';

import {MessagesActions} from './actions/MessagesActions';
import {MessageView} from './components/MessageView';
import {MessageInput} from './components/MessageInput';
import {store} from './store/Store';

class App extends React.Component<{}, {} > {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    constructor() {
        super();
    }

    onFormSubmit = (text: string) => {
        let action = MessagesActions.ADD_MESSAGE(text);
        store.dispatch(action);
    };

    render() {
        const messages = store.getState().messages;
        return (
            <div>
                <div className="page-header">
                    <h1>MessageChat</h1>
                </div>
                <MessageView messages={messages} />
                <MessageInput name="text" onSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

export default App;

