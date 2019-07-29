import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import DevTools from './DevTools';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>Hello Redux!</h1>
            <DevTools />
        </div>
    </Provider>,
    rootElement
);

