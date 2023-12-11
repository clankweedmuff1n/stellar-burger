import stylesIngredientDetails from './IngredientDetails.module.css';
import itemPropTypes from '../../utils/prop-types';


function IngredientDetails({ingredient}) {
    return (
        <>
            <p className={`${stylesIngredientDetails.title} text text_type_main-large`}>Детали ингредиента</p>
            <img
                className={stylesIngredientDetails.image}
                src={ingredient.image_large}
                alt={ingredient.name}
            />
            <p className={`${stylesIngredientDetails.paragraph} text text_type_main-medium`}>{ingredient.name}</p>
            <ul className={stylesIngredientDetails.container}>
                <li className={stylesIngredientDetails.item}>
                    <p className='text text_type_main-default'>Калории, ккал</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient.calories}</p>
                </li>
                <li className={stylesIngredientDetails.item}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient.proteins}</p>
                </li>
                <li className={stylesIngredientDetails.item}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient.fat}</p>
                </li>
                <li className={stylesIngredientDetails.item}>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient.carbohydrates}</p>
                </li>
            </ul>
        </>
    )
}

IngredientDetails.propTypes = {
    ingredient: itemPropTypes,
}

export default IngredientDetails;