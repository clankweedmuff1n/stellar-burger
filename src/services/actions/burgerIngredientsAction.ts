import {AppDispatch} from "../store";
import {
    IGetIngredientsFailed,
    IGetIngredientsRequest,
    IGetIngredientsSuccess
} from "../types/BurgerIngredients.types";
import {IIngredient} from "../types/Ingredient.type";
import {getIngredientsRequest} from "../../utils/api";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants";


const getIngredients = (): IGetIngredientsRequest => {
    return {
        type: GET_INGREDIENTS_REQUEST,
    };
}

const getIngredientsSuccess = (ingredients: Array<IIngredient>): IGetIngredientsSuccess => {
    return {
        type: GET_INGREDIENTS_SUCCESS,
        payload: ingredients,
    };
};

const getIngredientsFailed = (text: string): IGetIngredientsFailed => {
    return {
        type: GET_INGREDIENTS_FAILED,
        errorText: text,
    };
};

export function getIngredient() {
    return function (dispatch: AppDispatch) {
        dispatch(getIngredients());
        getIngredientsRequest()
            .then((res) => {
                dispatch(getIngredientsSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getIngredientsFailed(err));
            });
    };
}
