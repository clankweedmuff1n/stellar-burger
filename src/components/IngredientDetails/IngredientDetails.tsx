import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { RootState } from "../../services/store";

const IngredientDetails = () => {
    const ingredients = useSelector((store: RootState) => store.burgerIngredientsReducer.burgerIngredientsList);
    const { id } = useParams();
    const ingredient = ingredients.find((item) => item._id === id);

    return (
        <>
            <p className="text text_type_main-large !mt-[53px] !ml-[41px] ">Детали ингредиента</p>
            <img
                className="mt-[12px]"
                src={ingredient?.image_large}
                alt={ingredient?.name}
            />
            <p className="mt-[17px] text text_type_main-medium">{ingredient?.name}</p>
            <ul className="w-[516px] flex justify-between list-none mt-[32px] mr-0 mb-[60px] ml-0 p-0 relative">
                <li className="text-purple-light flex flex-col items-center">
                    <p className='text text_type_main-default'>Калории, ккал</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient?.calories}</p>
                </li>
                <li className="text-purple-light flex flex-col items-center">
                    <p className='text text_type_main-default'>Белки, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient?.proteins}</p>
                </li>
                <li className="text-purple-light flex flex-col items-center">
                    <p className='text text_type_main-default'>Жиры, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient?.fat}</p>
                </li>
                <li className="text-purple-light flex flex-col items-center">
                    <p className='text text_type_main-default'>Углеводы, г</p>
                    <p className='text text_type_digits-default mt-2'>{ingredient?.carbohydrates}</p>
                </li>
            </ul>
        </>
    );
};

export default IngredientDetails;
