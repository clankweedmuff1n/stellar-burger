import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import OrderPageList from "../OrderPageList/OrderPageList";
import useOrder from "../../services/hooks/useOrder";

export default function BurgerDetails({titleClassName}) {
    const orders = useSelector((store) => store.socketReducer.orders);
    const {id} = useParams();
    const order = orders.find((item) => item._id === id);

    const {orderIngredientsList, orderPrice, orderStatus, orderDate} =
        useOrder(order);

    return (
        <div
            className={`w-[640px] ${
                titleClassName ? undefined : "mt-[60px]"
            }`}
        >
            <div>
                <p
                    className={`text text_type_digits-default mb-10 ${titleClassName}`}
                >{`#${order.number}`}</p>
                <p className="text text_type_main-medium mb-2">{`${order.name}`}</p>
                <p
                    className="text text_type_main-default text-[#00cccc]"
                >{`${orderStatus}`}</p>
            </div>
            <OrderPageList ingredients={orderIngredientsList}/>
            <div className="mt-[40px] pb-[40px] flex justify-between items-center">
                <p className="text text_type_main-default text_color_inactive">
                    {orderDate}
                </p>
                <div className="flex items-center gap-2">
                    <CurrencyIcon type="primary"/>
                    <p className="text text_type_digits-default">{orderPrice}</p>
                </div>
            </div>
        </div>
    );
}