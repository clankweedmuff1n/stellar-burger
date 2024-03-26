import {useSelector} from "react-redux";
import {IOrder} from "../types/Order.type";
import {RootState} from "../store";
import {IIngredient} from "../types/Ingredient.type";

export default function useOrder(order: IOrder | undefined) {
    const ingredients = useSelector(
        (store: RootState) => store.burgerIngredientsReducer.burgerIngredientsList
    );

    const getOrderIngredientsList = () => {
        const list: Array<IIngredient> = [];
        order?.ingredients.forEach((ingredientId) => {
            ingredients.forEach((ingredient) => {
                if (ingredient._id === ingredientId) {
                    list.push(ingredient);
                }
            });
        });

        return list;
    };

    const getOrderStatus = () => {
        if (!order || !order.status) {
            return undefined;
        }
        if (order.status === "done") {
            return "Выполнен";
        } else {
            return "Готовится";
        }
    };

    const orderStatus = getOrderStatus();

    const orderIngredientsList = getOrderIngredientsList();

    const orderPrice = orderIngredientsList.reduce((count, item) => {
        return count + item.price;
    }, 0);

    const curOffset = new Date().getTimezoneOffset() / 60;
    const orderDate = "i-GTM" + (curOffset > 0 ? "-" + curOffset : "+" + -curOffset);

    return {orderIngredientsList, orderPrice, orderStatus, orderDate};
}