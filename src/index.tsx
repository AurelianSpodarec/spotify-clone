import React from 'react';
import {  useDispatch, Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';

import { store } from 'store/store';
import App from 'App';

import './styles/styles.scss';
import reportWebVitals from 'utils/reportWebVitals';


const root = ReactDOM.createRoot( 
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
