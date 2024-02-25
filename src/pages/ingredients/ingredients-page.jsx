import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const IngredientsPage = () => {
    const ingredients = useSelector((store) => store.burgerIngredientsReducer.burgerIngredientsList);
    const {id} = useParams();
    const currentIngredient = ingredients.find((item) => item._id === id);

    return currentIngredient &&
        (
            <>
                <section className="mt-[120px] flex justify-center">
                    <div className="max-w-[640px] flex flex-col items-center">
                        <IngredientDetails
                            ingredient={currentIngredient}
                        />
                    </div>
                </section>
            </>
        );
}

export default IngredientsPage;