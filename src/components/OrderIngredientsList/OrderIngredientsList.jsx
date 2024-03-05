import OrderIngredientsItem from '../OrderIngredientsItem/OrderIngredientsItem';

export default function OrderIngredientsList({ingredients}) {
    function showCounter() {
        return ingredients.length - 6 !== 0;
    }

    return (
        <ul className="m-0 p-0 list-none flex">
            {ingredients.map((item, index) => {
                return index < 5 ? (
                    <OrderIngredientsItem
                        ingredient={item}
                        index={index}
                        key={index}
                        length={ingredients.length}
                        showCounter={false}
                    />
                ) : index === 5 ? (
                    <OrderIngredientsItem
                        ingredient={item}
                        index={index}
                        key={index}
                        length={ingredients.length}
                        extraClass="opacity-[0.6]"
                        showCounter={showCounter()}
                    />
                ) : null;
            })}
        </ul>
    )
}