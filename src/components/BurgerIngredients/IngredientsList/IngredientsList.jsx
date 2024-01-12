import React from 'react';
import IngredientsItem from '../IngredientsItem/IngredientsItem';
import styles from './IngredientsList.module.css';
import PropTypes from 'prop-types';
import itemPropTypes from '../../../utils/prop-types';

const IngredientsList = React.forwardRef((props, ref) => {
    return (
        <>
            <p ref={ref} id={props.id} className='text text_type_main-medium mt-10 mb-6'>
                {props.title}
            </p>
            <ul className={styles.ingredients__list}>
                {props.ingredients.map((item) => {
                    return <IngredientsItem key={item._id} ingredient={item}/>
                })}
            </ul>
        </>
    )
})

IngredientsList.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(itemPropTypes).isRequired,
}

export default IngredientsList;