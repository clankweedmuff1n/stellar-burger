import styles from './OrderDetails.module.css';
import done from '../../images/done.svg';
import {useSelector} from 'react-redux';

const OrderDetails = () => {
    const order = useSelector((store) => store.currentOrderReducer.order);

    return (
        <>
            <p className={`${styles.order__number} text text_type_digits-large mt-30`}>{order}</p>
            <p className='text text_type_main-medium mt-8'>идентификатор заказа</p>
            <img className='mt-15 mb-15' src={done} alt='иконка подтверждения заказа'/>
            <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
            <p className={`${styles.order__text} text text_type_main-default mb-30`}>Дождитесь готовности на орбитальной
                станции</p>
        </>
    )
}

export default OrderDetails;