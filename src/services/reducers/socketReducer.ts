import {
    WS_GET_MESSAGE,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
} from "../actions/socketAction";
import {ISocketInitialState, TSocketAction} from "../types/SocketReducer.types";

const initialState: ISocketInitialState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
    errorState: false,
    errorMessage: null,
};

export default function socketReducer(state = initialState, action: TSocketAction): ISocketInitialState {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true,
            };

        case WS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false,
                errorState: true,
                errorMessage: action.payload,
            };

        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false,
                errorState: false,
                errorMessage: null,
            };

        case WS_GET_MESSAGE:
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };

        default:
            return state;
    }
}