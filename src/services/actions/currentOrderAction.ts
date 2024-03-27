import {IGetOrderFailed, IGetOrderRequest, IGetOrderSuccess, IResetOrder} from "../types/CurrentOrder.types";
import {GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, RESET_ORDER} from "../constants";
import {AppDispatch} from "../store";
import {sendOrderRequest} from "../../utils/api";
import {getToken} from "../../utils/cookie";
import {refreshUserToken} from "./userAction";
import {IConstructorInitialState} from "../types/BurgerConstructor.types";

const getOrderRequest = (): IGetOrderRequest => {
    return {
        type: GET_ORDER_REQUEST,
    };
}

const getOrderSuccess = (orderNumber: number): IGetOrderSuccess => {
    return {
        type: GET_ORDER_SUCCESS,
        payload: orderNumber,
    };
};

const getOrderFailed = (text: string): IGetOrderFailed => {
    return {
        type: GET_ORDER_FAILED,
        errorText: text,
    };
};

export const resetOrder =  (): IResetOrder => {
    return {
        type: RESET_ORDER,
    };
};

export function makeOrder (ingredients: IConstructorInitialState)  {
    const arrayId = ingredients.constructorBunElement
        ? [
            ingredients.constructorBunElement._id,
            ...ingredients.constructorFillingList.map((item) => item._id),
            ingredients.constructorBunElement._id,
        ]
        : [];
    console.log("TEST")
    return function (dispatch: AppDispatch) {
        dispatch(getOrderRequest());
        sendOrderRequest(arrayId, getToken('accessToken'))
            .then((res) => {
                dispatch(getOrderSuccess(res.order.number));
            })
            .catch((err) => {
                if(err.message === 'jwt expired' || err.message === 'jwt malformed') {
                    dispatch(refreshUserToken(getToken('refreshToken'))).then(() => {
                        sendOrderRequest(arrayId, getToken('accessToken'))
                            .then((res) => {
                                dispatch(getOrderSuccess(res.order.number));
                            })
                            .catch(() => {
                                dispatch(getOrderFailed('Ошибка при формировании заказа'))
                            });
                    });
                }
            });
    };
}
