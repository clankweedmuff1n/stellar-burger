import styles from './ingredients-page.module.css';
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useSelector} from 'react-redux';
import {useParams, useLocation, Navigate} from 'react-router-dom';
import AppHeader from "../../components/AppHeader/AppHeader";

export default function IngredientsPage() {
    const ingredients = useSelector((store) => store.burgerIngredientsReducer.burgerIngredientsList);
    const {id} = useParams();
    const currentIngredient = ingredients.find((item) => item._id === id);
    const location = useLocation();

    return location.state?.from === "/" ? (
        <Navigate to='/'/>
    ) : (
        currentIngredient && (
            <>
                <AppHeader/>
                <section className={styles.section}>
                    <div className={styles.container}>
                        <IngredientDetails
                            ingredient={currentIngredient}
                            titleClassName={styles.title}
                            subtitleClassName={styles.subtitle}
                        />
                    </div>
                </section>
            </>
        )
    );
}