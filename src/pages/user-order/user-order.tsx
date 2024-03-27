import {
    wsConnectionStart,
    wsConnectionClose,
} from "../../services/actions/socketAction";
import OrderFeedList from "../../components/OrderFeedList/OrderFeedList";
import {FC, useEffect} from "react";
import {getSocketUrl} from "../../utils/variables";
import {useDispatch, useSelector} from "../../services/hooks";

const UserOrder: FC = () => {
    const dispatch = useDispatch();
    const {orders} = useSelector((store) => store.socketReducer);

    useEffect(() => {
        dispatch(wsConnectionStart(getSocketUrl()));
        return () => {
            dispatch(wsConnectionClose());
        };
    }, [dispatch]);

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

export default UserOrder;