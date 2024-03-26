import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIngredient} from "../../services/actions/burgerIngredientsAction";
import {wsConnectionStart, wsConnectionClose} from "../../services/actions/socketAction";
import {WS_URL_ALL} from "../../utils/variables";
import {getSocketUrl} from "../../utils/variables";
import BurgerDetails from "../../components/BurgerDetails/BurgerDetails";
import {AppDispatch, RootState} from "../../services/store";
import {IOrder} from "../../services/types/Order.type";

interface Props {
    isAuth: boolean;
}

export default function OrderPage({isAuth}: Props) {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredient());
        if (isAuth) {
            dispatch(wsConnectionStart(getSocketUrl()));
        } else {
            dispatch(wsConnectionStart(WS_URL_ALL));
        }
        return () => {
            dispatch(wsConnectionClose());
        };
    }, [dispatch, isAuth]);

    const orders = useSelector((store: RootState) => store.socketReducer.orders);
    const currentOrder = useSelector((store: RootState) => store.currentOrderReducer.order);

    const {id} = useParams<{ id: string }>();

    const order: IOrder | undefined = orders.find((item): boolean => item._id === id);
    const selectedOrder = order || currentOrder as IOrder | undefined;

    return (
        selectedOrder && (
            <section className="mt-[122px] flex justify-center">
                <BurgerDetails titleClassName="text-center"/>
            </section>
        )
    );
}
