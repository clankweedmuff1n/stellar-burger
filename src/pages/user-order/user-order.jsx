import {
    wsConnectionStart,
    wsConnectionClose,
} from "../../services/actions/socketAction";
import OrderFeedList from "../../components/OrderFeedList/OrderFeedList";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSocketUrl} from "../../utils/variables";

export default function UserOrder() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart(getSocketUrl()));
        return () => {
            dispatch(wsConnectionClose());
        };
    }, []);

    const orders = useSelector((store) => store.socketReducer).orders;

    return (
        orders && (
            <OrderFeedList
                orders={orders}
                isFeedList={true}
                listClassName="w-[856px]"
            />
        )
    );
}