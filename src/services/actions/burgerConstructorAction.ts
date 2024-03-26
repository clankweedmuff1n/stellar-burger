import {
    IAddIngredient,
    IDeleteIngredient,
    IResetIngredient,
    ISortIngredients
} from "../types/BurgerConstructor.types";
import {IIngredient} from "../types/Ingredient.type";
import {ADD_INGREDIENT, DELETE_INGREDIENT, RESET_CURRENT_INGREDIENT, SORT_INGREDIENTS} from "../constants";

export const addIngredient = (
    ingredientId: string,
    ingredient: IIngredient
): IAddIngredient => {
    return {
        type: ADD_INGREDIENT,
        constructorItemId: ingredientId,
        payload: ingredient,
    };
};

export const deleteIngredient = (
    ingredient: IIngredient
): IDeleteIngredient => {
    return {
        type: DELETE_INGREDIENT,
        payload: ingredient,
    };
};

export const sortIngredients = (
    ingredients: Array<IIngredient>
): ISortIngredients => {
    return {
        type: SORT_INGREDIENTS,
        payload: ingredients,
    };
};

export const resetIngredient = (): IResetIngredient => {
    return {
        type: RESET_CURRENT_INGREDIENT,
    }
}