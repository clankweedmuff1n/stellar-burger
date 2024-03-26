import {
    wsConnectionStart,
    wsConnectionClose,
} from "../../services/actions/socketAction";
import {checkUserAccess} from "../../services/actions/userAction";
import OrderFeedList from "../../components/OrderFeedList/OrderFeedList";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSocketUrl} from "../../utils/variables";
import {AppDispatch, RootState} from "../../services/store";

export default function UserOrder() { //список всех заказов при переходе на вкладку заказы внутри страницы профиля
    const dispatch: AppDispatch = useDispatch();
    const {orders, errorState} = useSelector((store: RootState) => store.socketReducer);

    useEffect(() => {
        dispatch(wsConnectionStart(getSocketUrl()));
        return () => {
            dispatch(wsConnectionClose());
        };
    }, []);

    useEffect(() => {
        if (errorState) {
            dispatch(wsConnectionClose());
            Promise.resolve(dispatch(checkUserAccess()))
                .then(() => dispatch(wsConnectionStart(getSocketUrl())))
                .catch(() => dispatch(wsConnectionClose()));
        }
    }, [errorState]);

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