import styleIngredients from './IngredientsItem.module.css';
import React, {useCallback} from 'react';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../../Modal/Modal";
import ingredientPropType from "../../../utils/prop-types";
import IngredientDetails from "../../IngredientDetails/IngredientDetails";

function IngredientsItem({ ingredient }) {
    const [modal, setModal] = React.useState(false);

    const toggleModal = useCallback((e) => {
        e.stopPropagation();
        setModal((prevModal) => !prevModal);
    },[])
    return (
        <li className={`${styleIngredients.ingredients__item} mb-8`} onClick={toggleModal}>
            <img src={ingredient.image} alt={ingredient.name}/>
            <div className={`${styleIngredients.ingredients__price} mt-2`}>
                <p className='text text_type_digits-default mr-2'>{ingredient.price}</p>
                <CurrencyIcon type='primery'/>
            </div>
            <p className={`${styleIngredients.ingredients__heading} text text_type_main-default mt-2`}>{ingredient.name}</p>
            <Counter count={1} size='default'/>
            {modal && (
                <Modal onCloseModal={toggleModal}>
                    <IngredientDetails ingredient={ingredient}/>
                </Modal>
            )}
        </li>
    )
}

IngredientsItem.propTypes = {
    ingredient: ingredientPropType,
}

export default IngredientsItem;