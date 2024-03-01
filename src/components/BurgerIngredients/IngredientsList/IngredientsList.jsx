import React from 'react';
import IngredientsItem from '../IngredientsItem/IngredientsItem';
import PropTypes from 'prop-types';
import itemPropTypes from '../../../utils/prop-types';
import {Link, useLocation} from "react-router-dom";

const IngredientsList = React.forwardRef((props, ref) => {
    let location = useLocation();
    return (
        <>
            <p ref={ref} id={props.id} className='text text_type_main-medium mt-10 mb-6'>
                {props.title}
            </p>
            <ul className="mt-0 max-w-[600px] list-none gap-6 py-0 px-4 mb-[40px] grid grid-cols-custom">
                {props.ingredients.map((item) => {
                    return <Link key={item._id}
                                 to={`/ingredients/${item._id}`}
                                 state={{background: location}}>
                        <IngredientsItem ingredient={item}/>
                    </Link>
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