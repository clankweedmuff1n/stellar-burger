import {IIngredient} from "./Ingredient.type";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants";

export interface IIngredientsInitialState {
    burgerIngredientsList: Array<IIngredient>;
    burgerIngredientsListRequest: boolean;
    burgerIngredientsListError: boolean;
    burgerIngredientsListErrorText: string | undefined;
}

export type TIngredientsAction =
    | IGetIngredientsRequest
    | IGetIngredientsSuccess
    | IGetIngredientsFailed;

export interface IGetIngredientsRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    payload: Array<IIngredient>;
}

export interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED;
    readonly errorText: string;
}