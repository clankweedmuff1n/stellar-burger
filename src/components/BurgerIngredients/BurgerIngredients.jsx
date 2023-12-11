import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import PropTypes from "prop-types";
import IngredientsList from "./IngredientsList/IngredientsList";
import ingredientPropType from "../../utils/prop-types";

function BurgerIngredients({data}) {
    const [current, setCurrent] = React.useState('first');

    const { buns, mains, sauces } = React.useMemo(() => {
        return data.reduce(
            (count, item) => {
                switch (item.type) {
                    case "bun":
                        count.buns.push(item);
                        break;
                    case "sauce":
                        count.sauces.push(item);
                        break;
                    default:
                        count.mains.push(item);
                }
                return count;
            },
            { buns: [], mains: [], sauces: [] }
        );
    }, [data]);

    return (
        <section className={burgerIngredientsStyles.ingredients__section}>
            <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
            <div className={burgerIngredientsStyles.ingredients__menu}>
                <Tab value='first' active={current === 'first'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value='second' active={current === 'second'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value='third' active={current === 'third'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`${burgerIngredientsStyles.ingredients__list} custom-scroll`}>
                <IngredientsList
                    title="Булки"
                    id="bun"
                    type="bun"
                    ingredients={buns}
                    category={buns}
                />
                <IngredientsList
                    title="Соусы"
                    id="sauce"
                    type="sauce"
                    ingredients={sauces}
                    category={sauces}
                />
                <IngredientsList
                    title="Начинки"
                    id="main"
                    type="main"
                    ingredients={mains}
                    category={mains}
                />
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType).isRequired,
}

export default BurgerIngredients;