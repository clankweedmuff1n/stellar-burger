import {useMemo, useState, useEffect} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from './IngredientsList/IngredientsList';
import {useSelector} from 'react-redux';
import {useInView} from 'react-intersection-observer';
import {RootState} from "../../services/store";
import {IIngredient} from "../../services/types/Ingredient.type";

interface IIngredientsSort {
    buns: Array<IIngredient>;
    mains: Array<IIngredient>;
    sauces: Array<IIngredient>;
}

const BurgerIngredients = () => {
    const [current, setCurrent] = useState('first');
    const ingredients = useSelector((store: RootState) => store.burgerIngredientsReducer.burgerIngredientsList);

    const [bunTabRef, inViewTabBun] = useInView({threshold: 0});
    const [sauceTabRef, inViewTabSauce] = useInView({threshold: 0});
    const [mainTabRef, inViewTabMain] = useInView({threshold: 0});
    useEffect(() => {
        if (inViewTabBun) {
            setCurrent('bun');
        } else if (inViewTabSauce) {
            setCurrent('sauce');
        } else {
            setCurrent('main');
        }
    }, [inViewTabBun, inViewTabSauce, inViewTabMain]);

    const { buns, mains, sauces } = useMemo(() => {
        return ingredients.reduce<IIngredientsSort>(
            (count, item) => {
                // eslint-disable-next-line default-case
                switch (item.type) {
                    case "bun":
                        count.buns.push(item);
                        break;
                    case "sauce":
                        count.sauces.push(item);
                        break;
                    case "main":
                        count.mains.push(item);
                        break;
                }
                return count;
            },
            { buns: [], mains: [], sauces: [] }
        );
    }, [ingredients]);

    const changeIngredients = (id: string) => {
        setCurrent(id);
        document.querySelector(`#${id}`)!.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <section className="max-w-[600px]">
            <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
            <div className="flex">
                <Tab value='bun' active={current === 'bun'} onClick={changeIngredients}>
                    Булки
                </Tab>

                <Tab value='sauce' active={current === 'sauce'} onClick={changeIngredients}>
                    Соусы
                </Tab>
                <Tab value='main' active={current === 'main'} onClick={changeIngredients}>
                    Начинки
                </Tab>
            </div>
            <div className="m-0 list-none overflow-y-auto p-0 max-h-[50vh] custom-scroll">
                <IngredientsList
                    title="Булки"
                    id="bun"
                    type="bun"
                    ref={bunTabRef}
                    ingredients={buns}
                />
                <IngredientsList
                    title="Соусы"
                    id="sauce"
                    type="sauce"
                    ref={sauceTabRef}
                    ingredients={sauces}
                />
                <IngredientsList
                    title="Начинки"
                    id="main"
                    type="main"
                    ref={mainTabRef}
                    ingredients={mains}
                />
            </div>
        </section>
    );
}

export default BurgerIngredients;




