import {getIngredientsApi} from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export function getIngredient() {
    return function (dispatch) {
        dispatch({type: GET_INGREDIENTS_REQUEST});
        getIngredientsApi()
            .then((res) => {
                dispatch({type: GET_INGREDIENTS_SUCCESS, payload: res.data});
            })
            .catch((err) => {
                dispatch({type: GET_INGREDIENTS_ERROR, errorText: err});
            });
    };
}
