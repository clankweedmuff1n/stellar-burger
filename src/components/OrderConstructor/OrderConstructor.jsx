import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {useSelector, useDispatch} from 'react-redux';
import styles from './OrderConstructor.module.css';
import Modal from '../Modal/Modal';
import {RESET_ORDER} from '../../services/actions/currentOrderAction';
import {makeOrder} from '../../services/actions/currentOrderAction';
import icon from '../../images/image.svg';
import OrderDetails
    from '../OrderDetails/OrderDetails';

const OrderConstructor = ({price}) => {
    const order = useSelector((store) => store.currentOrderReducer.order);
    const dispatch = useDispatch();
    const ingredients = useSelector((store) => store.burgerConstructorReducer);

    const closeModal = () => {
        dispatch({type: RESET_ORDER});
    }

    return (
        <div className={styles.constructor__order}>
            <div className={styles.constructor__price}>
                <p className="text text_type_digits-medium">
                    {price}
                </p>
                <img src={icon} alt="Знак валюты"/>
            </div>
            <Button htmlType="button" type="primary" size="large" onClick={() => dispatch(makeOrder(ingredients))}
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

export default OrderConstructor;
