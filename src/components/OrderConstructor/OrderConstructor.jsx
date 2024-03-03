import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useSelector, useDispatch} from 'react-redux';
import Modal from '../Modal/Modal';
import {RESET_ORDER} from '../../services/actions/currentOrderAction';
import {makeOrder} from '../../services/actions/currentOrderAction';
import OrderDetails
    from '../OrderDetails/OrderDetails';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const OrderConstructor = ({price}) => {
    const order = useSelector((store) => store.currentOrderReducer.order);
    const dispatch = useDispatch();
    const ingredients = useSelector((store) => store.burgerConstructorReducer);
    const isAuth = useSelector((store) => store.userReducer.isAuth);
    const navigate = useNavigate();

    const closeModal = () => {
        dispatch({type: RESET_ORDER});
    }

    const sendOrder = () => {
        isAuth ? dispatch(makeOrder(ingredients)) : navigate('/login');
    }

    return (
        <div className="flex justify-end items-center gap-10 mt-[40px] mr-[15px] mb-[50px] ml-0">
            <div className="gap-2 flex items-center">
                <p className="text text_type_digits-medium">
                    {price}
                </p>
                <CurrencyIcon type={"primary"}/>
            </div>
            <Button htmlType="button" type="primary" size="large" onClick={sendOrder}
                    disabled={!ingredients.constructorBunElement}>
                Оформить заказ
            </Button>
            {order && (
                <Modal onCloseModal={closeModal}>
                    <OrderDetails/>
                </Modal>
            )}
        </div>
    )
}

OrderConstructor.propTypes = {
    price: PropTypes.number.isRequired,
}

export default OrderConstructor;
