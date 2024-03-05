import {compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/index';
import {configureStore} from '@reduxjs/toolkit';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
} from "./actions/socketAction";
import {socketMiddleware} from "./middleware/socketMiddleware";

const wsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSE,
    onClosed: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE,
};

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
//export const store = configureStore({reducer: rootReducer}, enhancer);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(socketMiddleware(wsActions)),
});