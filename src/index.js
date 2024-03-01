import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import _store from './Store';
import reportWebVitals from "./reportWebVitals";

const { persistor, Store } = _store();

const root = createRoot(document.getElementById("root"));
console.log("into index.js")
root.render(
    <PersistGate persistor= { persistor }>
        <Provider store = { Store }>
            <App />
        </Provider>
    </PersistGate>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
