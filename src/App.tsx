import * as React from 'react';

import {Message} from './containers/Message';
import {Conversations} from './containers/Conversations';

class App extends React.Component<{}, {} > {

    render() {

        return (
            <div>
                <Conversations />
                <div className="page-header">
                    <h1>MessageChat</h1>
                </div>
                <Message />
            </div>
        );
    }
}

export default App;