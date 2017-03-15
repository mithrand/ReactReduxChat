import * as React from 'react';
import * as ReactDOM from 'react-dom';
const { Provider } = require('react-redux');
import store from './store/Store';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement);