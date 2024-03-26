import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, RESET_ORDER} from "../constants";

export interface ICurrentOrderInitialState {
    order: undefined | number;
    orderRequest: boolean;
    orderError: boolean;
    orderErrorText: undefined | string;
}

export type TCurrentOrderAction =
    | IGetOrderRequest
    | IGetOrderSuccess
    | IGetOrderFailed
    | IResetOrder;

export interface IGetOrderRequest {
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly payload: number;
}

export interface IGetOrderFailed {
    readonly type: typeof GET_ORDER_FAILED;
    readonly errorText: string;
}

export interface IResetOrder {
    readonly type: typeof RESET_ORDER;
}