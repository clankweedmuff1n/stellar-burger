import {sendOrderRequest} from "../../utils/api";
import {getToken} from "../../utils/cookie";
import {refreshUserToken} from "./userAction";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';
export const RESET_ORDER = 'RESET_ORDER';

export function makeOrder(ingredients) {
    return function (dispatch) {
        const arrayId = [
            ingredients.constructorBunElement._id,
            ...ingredients.constructorFillingList.map((item) => item._id),
            ingredients.constructorBunElement._id,
        ]
        dispatch({type: GET_ORDER_REQUEST});
        sendOrderRequest(arrayId, getToken('accessToken'))
            .then((res) => {
                dispatch({type: GET_ORDER_SUCCESS, payload: res.order.number});
            })
            .catch((err) => {
                if (err.message === 'jwt expired' || err.message === 'jwt malformed') {
                    dispatch(refreshUserToken(getToken('refreshToken')))
                        .then(() => {
                            return sendOrderRequest(arrayId, getToken('accessToken'));
                        })
                        .then((res) => {
                            dispatch({
                                type: GET_ORDER_SUCCESS,
                                payload: res.order.number,
                            });
                        })
                        .catch(() => {
                            dispatch({
                                type: GET_ORDER_ERROR,
                                errorText: 'Ошибка при формировании заказа',
                            });
                        });
                }
            });
    };
}