import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIngredient } from "../../services/actions/burgerIngredientsAction";
import { wsConnectionStart, wsConnectionClose } from "../../services/actions/socketAction";
import { WS_URL_ALL } from "../../utils/variables";
import { getSocketUrl } from "../../utils/variables";
import BurgerDetails from "../../components/BurgerDetails/BurgerDetails";
import { AppDispatch, RootState } from "../../services/store";
import { IOrder } from "../../services/types/Order.type";

interface IOrderPage {
    isAuth: boolean | undefined;
}

const OrderPage: FC<IOrderPage> = ({ isAuth }) => {
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
    }, []);

    const orders = useSelector((store: RootState) => store.socketReducer.orders);

    const { id } = useParams();
    const order = orders.find((item: IOrder) => item._id === id);

    return (
        <> { order && (
            <section className="mt-[122px] flex justify-center">
                <BurgerDetails titleClassName="text-center"/>
            </section>
        )} </>
    );
}

export default OrderPage;
