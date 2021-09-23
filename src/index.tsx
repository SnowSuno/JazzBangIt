import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import ReduxThunk from "redux-thunk";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import {ParallaxProvider} from "react-scroll-parallax";

import Routes from "./Routes";

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);
const persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ParallaxProvider>
                    <Routes />
                </ParallaxProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


