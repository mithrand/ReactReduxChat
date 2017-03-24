import * as React from 'react';

import {Message, MessagesList} from './containers/Message';
import {ConversationTabs, AddConversationForm } from './containers/Conversations';

class App extends React.Component<{}, {} > {

    render() {

        return (
            <div>
                {/* <Conversations /> */}
                <ConversationTabs />
                <div className="page-header">
                    <h1>MessageChat</h1>
                </div>
                < MessagesList />
                <Message />
                <AddConversationForm />
            </div>
        );
    }
}

export default App;