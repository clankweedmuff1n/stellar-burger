import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIngredient} from "../../services/actions/burgerIngredientsAction";
import {
    wsConnectionStart,
    wsConnectionClose,
} from "../../services/actions/socketAction";
import {WS_URL_ALL} from "../../utils/variables";
import {getSocketUrl} from "../../utils/variables";
import BurgerDetails from "../../components/BurgerDetails/BurgerDetails";

export default function OrderPage({isAuth}) {
    const dispatch = useDispatch();

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
    }, []);

    const orders = useSelector((store) => store.socketReducer.orders);
    const currentOrder = useSelector((store) => store.currentOrderReducer.order);

    const {id} = useParams();
    const order = orders.find((item) => item._id === id) || currentOrder;
    return (
        order && (
            <section className="mt-[122px] flex justify-center">
                <BurgerDetails titleClassName="text-center"/>
            </section>
        )
    );
}