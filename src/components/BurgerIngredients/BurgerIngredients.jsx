import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import PropTypes from "prop-types";
import IngredientsList from "./IngredientsList/IngredientsList";
import categories from "../../utils/categories";

function BurgerIngredients() {
    const [current, setCurrent] = React.useState('first');
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
            <ul className={`${burgerIngredientsStyles.ingredients__list} custom-scroll`}>
                {categories.map(category => (
                    <IngredientsList key={category.name} category={category}/>
                ))}
            </ul>
        </section>
    )
}

export default BurgerIngredients;