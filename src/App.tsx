import * as React from 'react';
import * as Redux from 'redux';

import {Reducers} from './redux/Reducers';
import {State} from './redux/State';

import {MessageView} from './components/MessageView';
import {MessageInput} from './components/MessageInput';

class App extends React.Component<null, null> {

    store: Redux.Store<State>;

    componentDidMount = () => {
        this.store.subscribe(() => this.forceUpdate());
    };

    constructor() {
        super();
        const initialState = new State();
        this.store = Redux.createStore(Reducers.reducer, initialState);
    }

    render() {
        const state: State = this.store.getState();

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
