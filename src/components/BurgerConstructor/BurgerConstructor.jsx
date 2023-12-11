import {ConstructorElement, CurrencyIcon, DragIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import stylesConstructor from './BurgerConstructor.module.css';
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";


function BurgerConstructor({constructorIngredients}) {
    const [modal, setModal] = React.useState(false);

    function toggleModal() {
        setModal((prevModal) => {
            console.log(prevModal)
            return !prevModal
        });
    }

    return (
        <section className={`${stylesConstructor.constructor} ml-10 mt-20`}>
            <div className={stylesConstructor.constructor__container}>
                <ConstructorElement
                    text='Краторная булка N-200i (верх)'
                    type='top'
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    isLocked={true}
                />

                <ul className={`${stylesConstructor.constructor__list} custom-scroll`}>
                    {/* eslint-disable-next-line array-callback-return */}
                    {constructorIngredients.map((item) => {
                        if (item.type !== "bun") {
                            return (
                                <li key={item._id} className={`${stylesConstructor.constructor__item} mt-4 pr-5`}>
                                    <DragIcon/>
                                    <ConstructorElement
                                        key={item._id}
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    />
                                </li>
                            )
                        }
                    })}
                </ul>

                <ConstructorElement
                    text='Краторная булка N-200i (низ)'
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
                    type='bottom'
                    isLocked={true}
                    price={200}
                />
            </div>
            <div className={`${stylesConstructor.constructor__total} mr-8 mt-10`}>
                <div className={`${stylesConstructor.constructor__price} mr-10`}>
                    <p className='text text_type_digits-medium mr2'>10000</p>
                    <CurrencyIcon/>
                </div>
                <Button htmlType={"button"} type='primary' onClick={toggleModal} size='large'>Оформить заказ</Button>
                {modal && (
                    <Modal onCloseModal={toggleModal}>
                        <OrderDetails/>
                    </Modal>
                )}
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    constructorIngredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};

export default BurgerConstructor;