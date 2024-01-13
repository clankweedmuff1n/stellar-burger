import styles from './IngredientDetails.module.css';
import {useSelector} from 'react-redux';

const IngredientDetails = () => {
    const ingredient = useSelector((store) => store.currentIngredientReducer.currentIngredient);
    return (
        <>
            <p className={`${styles.title} text text_type_main-large`}>Детали ингредиента</p>
            <img
                className={styles.image}
                src={ingredient.image_large}
                alt={ingredient.name}
            />
            <p className={`${styles.paragraph} text text_type_main-medium`}>{ingredient.name}</p>
            <ul className={styles.container}>
                <li className={styles.item}>
                    <p className='text text_type_main-default'>Калории, ккал</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient.calories}</p>
                </li>
                <li className={styles.item}>
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient.proteins}</p>
                </li>
                <li className={styles.item}>
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient.fat}</p>
                </li>
                <li className={styles.item}>
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient.carbohydrates}</p>
                </li>
            </ul>
        </>
    )
}

export default IngredientDetails;