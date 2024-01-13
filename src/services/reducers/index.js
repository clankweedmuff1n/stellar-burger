import {combineReducers} from "redux";
import burgerIngredientsReducer from "./burgerIngredientsReducer";
import burgerConstructorReducer from "./burgerConstructorReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import currentOrderReducer from "./currentOrderReducer";

export const rootReducer = combineReducers({
    burgerIngredientsReducer,
    burgerConstructorReducer,
    currentIngredientReducer,
    currentOrderReducer
});
