import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import App from 'App';
 
import {  useDispatch, Provider } from 'react-redux'
import { store } from 'store/store';

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
