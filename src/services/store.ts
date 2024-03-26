import {rootReducer} from './reducers';
import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
} from "./actions/socketAction";
import {socketMiddleware} from "./middleware/socketMiddleware";
import {TUserActions} from "./types/User.types";
import {TSocketAction} from "./types/SocketReducer.types";
import {TCurrentOrderAction} from "./types/CurrentOrder.types";
import {TCurrentIngredientAction} from "./types/CurrentIngredient.types";
import {TIngredientsAction} from "./types/BurgerIngredients.types";
import {TConstructorAction} from "./types/BurgerConstructor.types";

const wsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSE,
    onClosed: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE,
};


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(socketMiddleware(wsActions)),
});

type TApplicationActions =
    | TConstructorAction
    | TIngredientsAction
    | TCurrentIngredientAction
    | TCurrentOrderAction
    | TSocketAction
    | TUserActions;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
export type RootState = ReturnType<typeof store.getState>
