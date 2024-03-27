import React from 'react';
import IngredientsItem from '../IngredientsItem/IngredientsItem';
import {Link, useLocation} from "react-router-dom";
import {IIngredient} from "../../../services/types/Ingredient.type";

interface IIngredientsList {
    id: string;
    title: string;
    type: string;
    ingredients: IIngredient[];
}

const IngredientsList = React.forwardRef<HTMLParagraphElement, IIngredientsList>((props, ref) => {
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
                                 state={{locationIngredient: location}}>
                        <IngredientsItem ingredient={item}/>
                    </Link>
                })}
            </ul>
        </>
    )
})

export default IngredientsList;