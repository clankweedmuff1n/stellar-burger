import {IIngredient} from "./Ingredient.type";
import {ADD_INGREDIENT, DELETE_INGREDIENT, RESET_CURRENT_INGREDIENT, SORT_INGREDIENTS} from "../constants";

export interface IConstructorInitialState {
    constructorBunElement: IIngredient | undefined;
    constructorFillingList: Array<IIngredient>;
};

export type TConstructorAction =
    | IAddIngredient
    | ISortIngredients
    | IDeleteIngredient
    | IResetIngredient;

export interface IResetIngredient {
    readonly type: typeof RESET_CURRENT_INGREDIENT;
}

export interface ISortIngredients {
    readonly type: typeof SORT_INGREDIENTS;
    payload: Array<IIngredient>;
}

export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT;
    readonly constructorItemId: string;
    readonly payload: IIngredient;
}

export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
    readonly payload: IIngredient;
}