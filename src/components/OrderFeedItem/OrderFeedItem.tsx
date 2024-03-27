import {
    CurrencyIcon,
    FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation} from "react-router-dom";
import OrderIngredientsList from "../OrderIngredientsList/OrderIngredientsList";
import useOrder from "../../services/hooks/useOrder";
import {IOrder} from "../../services/types/Order.type";
import {FC} from "react";

interface IOrderFeedItem {
    isFeedList: boolean;
    order: IOrder;
}

const OrderFeedItem: FC<IOrderFeedItem> = ({isFeedList, order}) => {
    const {orderIngredientsList, orderPrice, orderStatus} = useOrder(order);
    const location = useLocation();

    const curOffset = new Date().getTimezoneOffset() / 60;
    const GMT = "i-GTM" + (curOffset > 0 ? "-" + curOffset : "+" + -curOffset);

    return (
        <li className="w-full p-6 box-border bg-[#1c1c21] shadow-item-shadow rounded-modal cursor-pointer">
            <Link
                className="text_color_primary flex flex-col gap-6 no-underline"
                to={isFeedList ? `/profile/orders/${order._id}` : `/feed/${order._id}`}
                state={
                    isFeedList
                        ? {locationProfile: location}
                        : {locationFeed: location}
                }
            >

                <div className="flex justify-between items-center">
                    <p className="text text_type_digits-default">{`#${order.number}`}</p>
                    <p className="text text_type_main-default text_color_inactive">
                        <FormattedDate date={new Date(order.createdAt)}/> {`${GMT}`}
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text text_type_main-medium">{order.name}</p>
                    {isFeedList && (
                        <p
                            className={`text text_type_main-default ${
                                order.status === "done" ? "text-[#00cccc]" : undefined
                            }`}
                        >
                            {orderStatus}
                        </p>
                    )}
                </div>
                <div className="flex justify-between items-center">
                    <OrderIngredientsList ingredients={orderIngredientsList}/>
                    <div className="flex items-center gap-2">
                        <CurrencyIcon type="primary"/>
                        <p className="text text_type_digits-default">{orderPrice}</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default OrderFeedItem;