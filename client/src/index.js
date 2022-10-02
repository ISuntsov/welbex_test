import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AppLoader from './app/components/hoc/appLoader';
import App from './app/App';
import { createStore } from './app/store/createStore';

const store = createStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppLoader>
                <App/>
            </AppLoader>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
