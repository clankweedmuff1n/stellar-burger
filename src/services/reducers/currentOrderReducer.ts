import {ICurrentOrderInitialState, TCurrentOrderAction} from "../types/CurrentOrder.types";
import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, RESET_ORDER} from "../constants";

const currentOrderInitialState: ICurrentOrderInitialState = {
    order: undefined,
    orderRequest: false,
    orderError: false,
    orderErrorText: undefined,
};

export default function currentOrderReducer(
    state = currentOrderInitialState,
    action: TCurrentOrderAction
): ICurrentOrderInitialState {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return {...state, orderRequest: true, orderError: false};
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                orderRequest: false,
                orderError: false,
                order: action.payload,
            };
        case GET_ORDER_FAILED:
            return {...state, orderRequest: false, orderError: true, orderErrorText: action.errorText};
        case RESET_ORDER:
            return {...state, order: undefined}
        default:
            return state;
    }
}