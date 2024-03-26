import {IResetCurrentIngredient, ISetCurrentIngredient} from "../types/CurrentIngredient.types";
import {RESET_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../constants";
import {IIngredient} from "../types/Ingredient.type";

export const setCurrentIngredient = (
    ingredient: IIngredient
): ISetCurrentIngredient => {
    return {
        type: SET_CURRENT_INGREDIENT,
        payload: ingredient,
    };
};

export const resetCurrentIngredient = (): IResetCurrentIngredient => {
    return {
        type: RESET_CURRENT_INGREDIENT,
    };
};