import {IOrder} from "./Order.type";
import {
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR, WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE
} from "../actions/socketAction";
import {IWsMessage} from "./WsMessage.type";

export interface ISocketInitialState {
    wsConnected: boolean;
    orders: Array<IOrder>;
    total: number;
    totalToday: number;
    errorState: boolean;
    errorMessage: null | string;
}

export type TSocketAction =
    | IWsConnectionStart
    | IWsConnectionSuccess
    | IWsConnectionError
    | IWsConnectionClose
    | IWsConnectionClosed
    | IWsGetMessage;

export interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
}

export interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: string;
}

export interface IWsConnectionClose {
    readonly type: typeof WS_CONNECTION_CLOSE;
}

export interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: IWsMessage;
}