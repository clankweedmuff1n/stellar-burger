import styles from './IngredientsItem.module.css';
import React, {useMemo} from 'react';
import itemPropTypes from '../../../utils/prop-types';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from 'react-redux';
import {SET_CURRENT_INGREDIENT} from '../../../services/actions/currentIngredientAction';
import {useDrag} from 'react-dnd';

const IngredientsItem = ({ingredient}) => {
    const dispatch = useDispatch();
    const constructorIngredients = useSelector((store) => store.burgerConstructorReducer);
    const burgerIngredients = useSelector((store) => store.burgerIngredientsReducer);

    const openModal = () => {
        dispatch({type: SET_CURRENT_INGREDIENT, payload: ingredient});
    }

    const [, dragRef, dragPreviewRef] = useDrag({
        type: 'ingredients',
        item: ingredient,
    })

    const counter = useMemo(() => {
        const counters = {};
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

    const getIngredientCounter = (ingredientId) => counter[ingredientId];

    return (
        <li ref={dragRef} className={`${styles.ingredients__item} mb-8`} onClick={openModal}>
            {getIngredientCounter(ingredient._id) !== 0 && (
                <Counter count={getIngredientCounter(ingredient._id)} size='default'/>
            )}
            <img ref={dragPreviewRef} src={ingredient.image} alt={ingredient.name}/>
            <div className={`${styles.ingredients__price} mt-2`}>
                <p className='text text_type_digits-default mr-2'>{ingredient.price}</p>
                <CurrencyIcon type='primery'/></div>
            <p className={`${styles.ingredients__heading} text text_type_main-default mt-2`}>{ingredient.name}</p>
        </li>
    )

}

IngredientsItem.propTypes = {
    ingredient: itemPropTypes,
}

export default IngredientsItem;
