import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import ReduxThunk from "redux-thunk";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import Routes from "./Routes";

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);
const persistor = persistStore(store);

const theme = createTheme({
    palette: {
        primary: {main: "#344c70"}
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Routes />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


