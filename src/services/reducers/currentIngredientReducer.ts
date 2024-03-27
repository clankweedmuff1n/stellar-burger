import {ICurrentIngredientInitialState, TCurrentIngredientAction} from "../types/CurrentIngredient.types";
import {RESET_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../constants";

const currentIngredientInitialState: ICurrentIngredientInitialState = {
    currentIngredient: undefined,
};

export default function currentIngredientReducer(state = currentIngredientInitialState, action: TCurrentIngredientAction) {
    switch (action.type) {
        case SET_CURRENT_INGREDIENT:
            return {...state, currentIngredient: action.payload};
        case RESET_CURRENT_INGREDIENT:
            return {...state, currentIngredient: undefined};
        default:
            return state;
    }
}