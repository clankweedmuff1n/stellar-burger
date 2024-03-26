import {IIngredient} from "./Ingredient.type";
import {RESET_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../constants";

export interface ICurrentIngredientInitialState {
    currentIngredient: IIngredient | undefined;
}

export type TCurrentIngredientAction =
    | ISetCurrentIngredient
    | IResetCurrentIngredient;

export interface ISetCurrentIngredient {
    readonly type: typeof SET_CURRENT_INGREDIENT;
    readonly payload: IIngredient;
}

export interface IResetCurrentIngredient {
    readonly type: typeof RESET_CURRENT_INGREDIENT;
}