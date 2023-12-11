import React from 'react';
import IngredientsItem from '../IngredientsItem/IngredientsItem';
import styleIngredientList from './IngredientsList.module.css';
import PropTypes from 'prop-types';
import ingredientPropType from "../../../utils/prop-types";


const IngredientsList = (props) => {
    return (
        <>
            <p id={props.id} className='text text_type_main-medium mt-10 mb-6'>
                {props.title}
            </p>
            <ul className={styleIngredientList.ingredients__list}>
                {props.ingredients.map((item) => {
                    return <IngredientsItem key={item._id} ingredient={item}/>
                })}
            </ul>
        </>
    )
}

IngredientsList.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
}

export default IngredientsList;