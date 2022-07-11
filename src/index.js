import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";





const root = ReactDOM.createRoot(document.getElementById('root'));



    root.render(
        <BrowserRouter >
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>
    );



/*store.subscribe(() => {
    /!*let state = store.getState();*!/
    rerenderEntireTree();
});*/
