import {ADD_INGREDIENT, DELETE_INGREDIENT, SORT_INGREDIENT} from "../actions/burgerConstructorAction";

const constructorInitialState = {
    constructorBunElement: undefined,
    constructorFillingList: []
};

export default function burgerConstructorReducer(state = constructorInitialState, action) {
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
                    {constructorItemId: action.constructorItemId, ...action.payload}

                ],
            };

        case DELETE_INGREDIENT:
            return {
                ...state,
                constructorFillingList: state.constructorFillingList.filter(
                    (item) => item.constructorItemId !== action.payload.constructorItemId
                ),
            };
        case SORT_INGREDIENT:
            return {
                ...state,
                constructorFillingList: action.payload,
            };
        default: {
            return state;
        }
    }
}