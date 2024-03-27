import cn from 'classnames';
import OrderFeedItem from '../OrderFeedItem/OrderFeedItem';
import {IOrder} from "../../services/types/Order.type";
import {FC} from "react";

interface IOrderFeedList {
    listClassName: string;
    isFeedList: boolean;
    orders: IOrder[];
}

const OrderFeedList: FC<IOrderFeedList> = ({listClassName, isFeedList, orders}) => {
    return (
        <ul className={cn("m-0 p-0 pb-2 w-[608px] max-h-[745px] overflow-y-scroll box-border list-none flex flex-col gap-4", listClassName)}>
            {orders.map((order, index) => {
                return (
                    <OrderFeedItem
                        key={index}
                        isFeedList={isFeedList}
                        order={order}
                    />
                )
            })}
        </ul>
    )
}

export default OrderFeedList;