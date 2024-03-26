import {IIngredientsInitialState, TIngredientsAction} from "../types/BurgerIngredients.types";
import {GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../constants";

const ingredientsInitialState: IIngredientsInitialState = {
    burgerIngredientsList: [],
    burgerIngredientsListRequest: false,
    burgerIngredientsListError: false,
    burgerIngredientsListErrorText: undefined,
};

export default function burgerIngredientsReducer(state = ingredientsInitialState, action: TIngredientsAction): IIngredientsInitialState  {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {...state, burgerIngredientsListRequest: true, burgerIngredientsListError: false};
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                burgerIngredientsList: action.payload,
                burgerIngredientsListRequest: false,
                burgerIngredientsListError: false,
            };
        case GET_INGREDIENTS_FAILED:
            return {
                ...state,
                burgerIngredientsList: [],
                burgerIngredientsListError: true,
                burgerIngredientsListErrorText: action.errorText,
            };
        default:
            return state;
    }
}


