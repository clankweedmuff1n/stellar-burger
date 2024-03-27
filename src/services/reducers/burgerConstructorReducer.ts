import {IIngredient} from "../types/Ingredient.type";
import {IConstructorInitialState, TConstructorAction} from "../types/BurgerConstructor.types";
import {ADD_INGREDIENT, DELETE_INGREDIENT, SORT_INGREDIENTS} from "../constants";

const constructorInitialState: IConstructorInitialState = {
    constructorBunElement: undefined,
    constructorFillingList: []
};

export default function burgerConstructorReducer(state = constructorInitialState, action: TConstructorAction): IConstructorInitialState {
    switch (action.type) {
        case ADD_INGREDIENT:
            if (action.payload.type === 'bun') {
                return {
                    ...state,
                    constructorBunElement: action.payload,
                };
            }
            return {
                ...state,
                constructorFillingList: [
                    ...state.constructorFillingList,
                    {
                        ...action.payload,
                        constructorItemId: action.constructorItemId,
                    }
                ],
            };
        case DELETE_INGREDIENT:
            return {
                ...state,
                constructorFillingList: state.constructorFillingList.filter(
                    (item: IIngredient) => item.constructorItemId !== action.payload.constructorItemId
                ),
            };
        case SORT_INGREDIENTS:
            return {
                ...state,
                constructorFillingList: action.payload,
            };
        default: {
            return state;
        }
    }
}