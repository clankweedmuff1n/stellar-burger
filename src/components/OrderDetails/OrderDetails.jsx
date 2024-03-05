import done from '../../images/done.svg';
import {useSelector} from 'react-redux';

const OrderDetails = () => {
    const order = useSelector((store) => store.currentOrderReducer.order);

    return (
        <>
            <p className="not-italic font-['Iceland'] font-normal text-custom text-white-custom text text_type_digits-large mt-30 [text-shadow:0px_0px_16px_rgba(51,51,255,0.25),_0px_0px_8px_rgba(51,51,255,0.25),_0px_4px_32px_rgba(51,51,255,0.5)]">{order}</p>
            <p className="text text_type_main-medium mt-8 [text-shadow:0px_0px_16px_rgba(51,51,255,0.25),_0px_0px_8px_rgba(51,51,255,0.25),_0px_4px_32px_rgba(51,51,255,0.5)]">идентификатор заказа</p>
            <img className=' mt-15 mb-15' src={done} alt=' иконка подтверждения заказа'/>
            <p className=' text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
            <p className={`text-purple-light text text_type_main-default mb-30`}>Дождитесь готовности на орбитальной
                станции</p>
        </>
    )
}

export default OrderDetails;