import * as React from 'react';

import {MessagesActions} from './actions/MessagesActions';
import {MessageView} from './components/MessageView';
import {MessageInput} from './components/MessageInput';
import {State} from './store/State';

class App extends React.Component<{}, {} > {

    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <div className="page-header">
                    <h1>MessageChat</h1>
                </div>
                <MessageView messages={state.Messages} />
                <MessageInput />
            </div>
        );
    }
}

export default App;

