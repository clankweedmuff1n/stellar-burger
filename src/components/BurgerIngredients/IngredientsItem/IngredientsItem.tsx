import React, {FC, useMemo} from 'react';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDrag} from 'react-dnd';
import {IIngredient} from "../../../services/types/Ingredient.type";
import {SET_CURRENT_INGREDIENT} from "../../../services/constants";
import {useDispatch, useSelector} from "../../../services/hooks";

interface IIngredientsItem {
    ingredient: IIngredient;
}

const IngredientsItem: FC<IIngredientsItem> = ({ingredient}) => {
    const dispatch = useDispatch();
    const constructorIngredients = useSelector((store) => store.burgerConstructorReducer);
    const burgerIngredients = useSelector((store) => store.burgerIngredientsReducer);

    const setCurrentIngredient = () => {
        dispatch({type: SET_CURRENT_INGREDIENT, payload: ingredient});
    }

    const [, dragRef, dragPreviewRef] = useDrag({
        type: 'ingredients',
        item: ingredient,
    })

    const counter = useMemo(() => {
        const counters: Record<string, number> = {};
        burgerIngredients.burgerIngredientsList.forEach((ingredient) => {
            counters[ingredient._id] = constructorIngredients.constructorFillingList.filter(
                (constructorItem) => constructorItem._id === ingredient._id
            ).length;
        });
        if (constructorIngredients.constructorBunElement) {
            counters[constructorIngredients.constructorBunElement._id] = 2;
        }
        return counters;
    }, [constructorIngredients, burgerIngredients]);

    const getIngredientCounter = (ingredientId: string) => counter[ingredientId];

    return (
        <li ref={dragRef} className="flex flex-col items-center relative max-w-[284px] cursor-pointer box-border mb-8" onClick={setCurrentIngredient}>
            {getIngredientCounter(ingredient._id) !== 0 && (
                <Counter count={getIngredientCounter(ingredient._id)} size='default'/>
            )}
            <img ref={dragPreviewRef} src={ingredient.image} alt={ingredient.name}/>
            <div className="justify-center flex mt-2">
                <p className='text text_type_digits-default mr-2'>{ingredient.price}</p>
                <CurrencyIcon type='primary'/></div>
            <p className="text-center text text_type_main-default mt-2">{ingredient.name}</p>
        </li>
    )

}

export default IngredientsItem;
